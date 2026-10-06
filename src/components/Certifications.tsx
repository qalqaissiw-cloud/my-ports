"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  certificationCategories,
  certificationList,
  type Certification,
  type CertificationCategory,
  type CertificationPage,
} from "../lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SLIDE_MS = 480;
const COLLAPSED_COUNT = 8;

type Motion = "open" | "next" | "prev";
type Filter = "All" | CertificationCategory;
type Slide = { cert: Certification; page: CertificationPage; index: number };

const categoryRank = (cert: Certification) => certificationCategories.indexOf(cert.category);
const byCategoryThenNewest = (a: Certification, b: Certification) =>
  categoryRank(a) - categoryRank(b) || b.sortDate.localeCompare(a.sortDate);

const featured = certificationList.filter((cert) => cert.featured);
const library = certificationList.filter((cert) => !cert.featured).sort(byCategoryThenNewest);
const filters: Filter[] = ["All", ...certificationCategories];
const issuerCount = new Set(certificationList.map((cert) => cert.issuer.split(" · ")[0])).size;
const pageCount = certificationList.reduce((total, cert) => total + cert.pages.length, 0);

function countFor(filter: Filter) {
  return filter === "All"
    ? library.length
    : library.filter((cert) => cert.category === filter).length;
}

function CertThumb({
  cert,
  sizes,
  onOpen,
}: {
  cert: Certification;
  sizes: string;
  onOpen: () => void;
}) {
  const extra = cert.pages.length - 1;
  const layers = cert.pages.slice(0, 3).reverse();

  return (
    <button
      type="button"
      onClick={onOpen}
      className="cert-thumb"
      aria-label={`View ${cert.name} certificate${extra > 0 ? `s (${cert.pages.length})` : ""}`}
    >
      {layers.map((page, index) => (
        <span
          key={page.src}
          className="cert-thumb-layer"
          data-depth={layers.length - 1 - index}
        >
          <Image
            src={page.src}
            alt=""
            fill
            sizes={sizes}
            className="object-contain"
          />
        </span>
      ))}
      {extra > 0 ? <span className="cert-thumb-count">+{extra}</span> : null}
    </button>
  );
}

function SlideFrame({ slide, total }: { slide: Slide; total: number }) {
  const { cert, page } = slide;
  return (
    <>
      <img
        src={page.src}
        alt={`${cert.name}${page.label ? ` — ${page.label}` : ""}, ${cert.issuer}`}
        width={page.width}
        height={page.height}
        draggable={false}
        className="max-h-[72vh] w-auto max-w-full bg-white object-contain shadow-2xl"
      />
      <figcaption className="mt-5 flex max-w-2xl flex-col items-center gap-1.5 text-center">
        <span className="text-[15px] font-medium text-white">{cert.name}</span>
        <span className="text-[12px] tracking-[0.12em] text-white/60 uppercase">
          {page.label && cert.pages.length > 1 ? (
            <>
              {page.label}
              <span className="mx-2 text-white/30">·</span>
            </>
          ) : null}
          {cert.issuer}
          <span className="mx-2 text-white/30">·</span>
          {cert.date}
          <span className="mx-2 text-white/30">·</span>
          <span className="tabular-nums">
            {slide.index + 1} / {total}
          </span>
        </span>
        {cert.verify ? (
          <a
            href={cert.verify}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="link-line mt-1 pb-0.5 text-[13px] text-white/80 hover:text-white"
          >
            Verify credential
          </a>
        ) : null}
      </figcaption>
    </>
  );
}

export function Certifications() {
  const [filter, setFilter] = useState<Filter>("All");
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [motion, setMotion] = useState<Motion>("open");
  const busy = useRef(false);
  const clearOut = useRef<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? library : library.filter((cert) => cert.category === filter)),
    [filter],
  );
  const visible = expanded ? filtered : filtered.slice(0, COLLAPSED_COUNT);
  const hiddenCount = filtered.length - visible.length;

  const slides = useMemo(() => {
    const list: Slide[] = [];
    for (const cert of [...featured, ...filtered]) {
      for (const page of cert.pages) list.push({ cert, page, index: list.length });
    }
    return list;
  }, [filtered]);

  const close = useCallback(() => {
    setActive(null);
    setOutgoing(null);
    busy.current = false;
    if (clearOut.current) window.clearTimeout(clearOut.current);
  }, []);

  const go = useCallback(
    (next: number, dir: 1 | -1) => {
      const wrapped = (next + slides.length) % slides.length;
      if (active === null || wrapped === active || busy.current) return;

      busy.current = true;
      setMotion(dir === 1 ? "next" : "prev");
      setOutgoing(active);
      setActive(wrapped);
      if (clearOut.current) window.clearTimeout(clearOut.current);
      clearOut.current = window.setTimeout(() => {
        setOutgoing(null);
        busy.current = false;
      }, SLIDE_MS);
    },
    [active, slides.length],
  );

  const openCert = useCallback(
    (cert: Certification) => {
      const index = slides.findIndex((slide) => slide.cert === cert);
      if (index === -1) return;
      setOutgoing(null);
      setMotion("open");
      setActive(index);
    },
    [slides],
  );

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(active + 1, 1);
      if (event.key === "ArrowLeft") go(active - 1, -1);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, go]);

  const current = active === null ? null : slides[active];
  const leaving = outgoing === null ? null : slides[outgoing];
  const enterClass =
    motion === "open" ? "from-open" : motion === "next" ? "from-next" : "from-prev";
  const leaveClass = motion === "prev" ? "to-prev" : "to-next";

  return (
    <section id="certifications" className="scroll-mt-24 px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <SectionHeading
            index="06"
            title="Certifications"
            description={`${certificationList.length} credentials and ${pageCount} certificates from ${issuerCount} issuers, led by security and backed by cloud, data, and business coursework. Select any certificate to view it full size.`}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cert, index) => (
            <Reveal key={cert.name} delayMs={index * 70} className="h-full">
              <article className="cert-card cert-card-featured">
                <CertThumb
                  cert={cert}
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 90vw"
                  onOpen={() => openCert(cert)}
                />
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="section-label">{cert.issuer}</p>
                  <h3 className="mt-2 text-[15px] leading-snug font-medium tracking-tight">
                    {cert.name}
                  </h3>
                  {cert.note ? (
                    <p className="mt-2 text-[13px] leading-6 text-muted">{cert.note}</p>
                  ) : null}
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-[13px] text-muted">
                    <span className="tabular-nums">{cert.date}</span>
                    {cert.verify ? (
                      <a
                        href={cert.verify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-line pb-0.5 text-foreground/80"
                      >
                        Verify
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="section-label">Full library</h3>
            <div className="cert-filters" role="group" aria-label="Filter certifications">
              {filters.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={filter === option}
                  onClick={() => {
                    setFilter(option);
                    setExpanded(false);
                  }}
                >
                  {option}
                  <span className="cert-filter-count">{countFor(option)}</span>
                </button>
              ))}
            </div>
          </div>

          <ul key={filter} className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {visible.map((cert, index) => (
              <li
                key={cert.name}
                className="cert-card cert-card-enter"
                style={{ "--i": index % COLLAPSED_COUNT } as CSSProperties}
              >
                <CertThumb
                  cert={cert}
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 45vw"
                  onOpen={() => openCert(cert)}
                />
                <p className="mt-4 text-[11px] tracking-[0.14em] text-muted uppercase">
                  {cert.issuer}
                </p>
                <h4 className="mt-1.5 text-[14px] leading-snug font-medium tracking-tight">
                  {cert.name}
                </h4>
                <p className="mt-1.5 text-[13px] text-muted tabular-nums">
                  {cert.date}
                  {cert.note ? <span className="text-muted/80"> · {cert.note}</span> : null}
                </p>
              </li>
            ))}
          </ul>

          {filtered.length > COLLAPSED_COUNT ? (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="cert-more"
                aria-expanded={expanded}
              >
                {expanded ? "Show fewer" : `Show all ${filtered.length}`}
                {!expanded && hiddenCount > 0 ? (
                  <span className="text-muted"> · {hiddenCount} more</span>
                ) : null}
              </button>
            </div>
          ) : null}
        </Reveal>
      </div>

      {current ? (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.cert.name}
          onClick={close}
        >
          <button type="button" className="photo-lightbox-close" onClick={close} aria-label="Close">
            Close
          </button>
          <button
            type="button"
            className="photo-lightbox-nav photo-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              go((active ?? 0) - 1, -1);
            }}
            aria-label="Previous certificate"
          >
            Prev
          </button>
          <div className="photo-lightbox-stage" onClick={(event) => event.stopPropagation()}>
            {leaving ? (
              <figure className={`photo-lightbox-slide is-out ${leaveClass}`} aria-hidden>
                <SlideFrame slide={leaving} total={slides.length} />
              </figure>
            ) : null}
            <figure key={current.page.src} className={`photo-lightbox-slide is-in ${enterClass}`}>
              <SlideFrame slide={current} total={slides.length} />
            </figure>
          </div>
          <button
            type="button"
            className="photo-lightbox-nav photo-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              go((active ?? 0) + 1, 1);
            }}
            aria-label="Next certificate"
          >
            Next
          </button>
        </div>
      ) : null}
    </section>
  );
}
