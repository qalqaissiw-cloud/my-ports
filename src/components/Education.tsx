"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { education, publication } from "../lib/content";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SLIDE_MS = 480;
const certificates = education.certificates;

type Motion = "open" | "next" | "prev";

function CertificateFrame({
  certificate,
}: {
  certificate: (typeof certificates)[number];
}) {
  return (
    <>
      <img
        src={certificate.src}
        alt={certificate.alt}
        draggable={false}
        className="max-h-[78vh] w-auto max-w-full object-contain"
      />
      <figcaption className="mt-4 text-center text-[13px] tracking-[0.12em] text-white/70 uppercase">
        {certificate.label}
        <span className="mx-2 text-white/35">·</span>
        {education.degree}
      </figcaption>
    </>
  );
}

export function Education() {
  const [active, setActive] = useState<number | null>(null);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [motion, setMotion] = useState<Motion>("open");
  const busy = useRef(false);
  const clearOut = useRef<number | null>(null);

  const close = useCallback(() => {
    setActive(null);
    setOutgoing(null);
    busy.current = false;
    if (clearOut.current) window.clearTimeout(clearOut.current);
  }, []);

  const go = useCallback(
    (next: number, dir: 1 | -1) => {
      const wrapped = (next + certificates.length) % certificates.length;
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
    [active],
  );

  const openAt = useCallback((index: number) => {
    setOutgoing(null);
    setMotion("open");
    setActive(index);
  }, []);

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

  const current = active === null ? null : certificates[active];
  const leaving = outgoing === null ? null : certificates[outgoing];
  const enterClass =
    motion === "open" ? "from-open" : motion === "next" ? "from-next" : "from-prev";
  const leaveClass = motion === "prev" ? "to-prev" : "to-next";

  return (
    <section id="education" className="scroll-mt-24 px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <SectionHeading index="06" title="Education & publications" />
        </Reveal>

        <div className="mt-4 divide-y divide-border">
          <Reveal>
            <article className="grid gap-4 py-10 sm:grid-cols-[180px_1fr]">
              <p className="section-label pt-1">Degree</p>
              <div>
                <h3 className="text-lg font-medium tracking-tight">{education.degree}</h3>
                <p className="mt-2 text-[15px] text-muted">
                  {education.school}, {education.location}
                </p>
                <p className="mt-4 text-[15px] text-foreground/80">
                  Graduated {education.graduated} · GPA {education.gpa} · {education.rating}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {certificates.map((certificate, index) => (
                    <figure key={certificate.src}>
                      <button
                        type="button"
                        onClick={() => openAt(index)}
                        className="group block w-full cursor-pointer text-left"
                        aria-label={`Open ${certificate.label} certificate`}
                      >
                        <p className="mb-3 text-[13px] text-muted">{certificate.label}</p>
                        <img
                          src={certificate.src}
                          alt={certificate.alt}
                          className="w-full border border-border object-contain transition-[border-color,opacity] duration-300 group-hover:border-foreground/30 group-hover:opacity-90"
                        />
                      </button>
                    </figure>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delayMs={80}>
            <article id="publications" className="grid gap-4 py-10 sm:grid-cols-[180px_1fr]">
              <p className="section-label pt-1">Publication</p>
              <div>
                <h3 className="text-lg font-medium tracking-tight">{publication.title}</h3>
                <p className="mt-2 text-[15px] text-muted">
                  {publication.venue}, {publication.date}
                </p>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-foreground/80">
                  {publication.summary}
                </p>
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line mt-5 inline-block pb-0.5 text-[14px]"
                >
                  {publication.hrefLabel}
                </a>

                <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <dt className="section-label">Research Interest</dt>
                    <dd className="mt-2 text-xl font-medium tracking-tight">
                      <CountUp
                        end={publication.metrics.interestScore}
                        format="decimal"
                        decimals={1}
                      />
                    </dd>
                  </div>
                  <div>
                    <dt className="section-label">Reads</dt>
                    <dd className="mt-2 text-xl font-medium tracking-tight">
                      <CountUp end={publication.metrics.reads} />
                    </dd>
                    <p className="mt-1 text-[13px] text-muted">{publication.metrics.readsDelta}</p>
                  </div>
                  <div>
                    <dt className="section-label">Citations</dt>
                    <dd className="mt-2 text-xl font-medium tracking-tight">
                      <CountUp end={publication.metrics.citations} />
                    </dd>
                  </div>
                  <div>
                    <dt className="section-label">Recommendations</dt>
                    <dd className="mt-2 text-xl font-medium tracking-tight">
                      <CountUp end={publication.metrics.recommendations} />
                    </dd>
                  </div>
                </dl>

                <div className="mt-10 grid gap-10 lg:grid-cols-2">
                  <div>
                    <p className="section-label">Score breakdown</p>
                    <ul className="mt-4 space-y-3">
                      {publication.metrics.breakdown.map((item) => (
                        <li key={item.label} className="flex items-baseline justify-between gap-4">
                          <span className="text-[15px] text-foreground/80">{item.label}</span>
                          <span className="shrink-0 text-[15px] tabular-nums text-muted">
                            {item.percent.toFixed(2)}%
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex h-2 w-full overflow-hidden bg-border">
                      {publication.metrics.breakdown.map((item, index) => (
                        <span
                          key={item.label}
                          className="h-full"
                          style={{
                            width: `${item.percent}%`,
                            backgroundColor: [
                              "#c5d4dc",
                              "#7fa3b3",
                              "#3d6b7d",
                              "#1c2b3a",
                            ][index],
                          }}
                          title={`${item.label}: ${item.percent.toFixed(2)}%`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="section-label">Compared on ResearchGate</p>
                    <ul className="mt-4 space-y-5">
                      {publication.metrics.comparisons.map((item) => (
                        <li key={item.label}>
                          <p className="text-[15px] leading-7 text-foreground/80">{item.label}</p>
                          <div className="relative mt-3 h-px bg-border">
                            <span
                              className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
                              style={{ left: `${item.percent}%` }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>

      {current ? (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.label}
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
                <CertificateFrame certificate={leaving} />
              </figure>
            ) : null}
            <figure key={current.src} className={`photo-lightbox-slide is-in ${enterClass}`}>
              <CertificateFrame certificate={current} />
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
