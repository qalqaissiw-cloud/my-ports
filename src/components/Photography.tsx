"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { photographs, photography, type Photograph } from "../lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SLIDE_MS = 480;

type Motion = "open" | "next" | "prev";

function PhotoFrame({ photo }: { photo: Photograph }) {
  return (
    <>
      {/* Native img so Next.js does not swap in a second optimized URL. */}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        draggable={false}
        className="max-h-[78vh] w-auto max-w-full object-contain"
      />
      <figcaption className="mt-4 text-center text-[13px] tracking-[0.12em] text-white/70 uppercase">
        {photo.caption}
        <span className="mx-2 text-white/35">·</span>
        {photography.place}
      </figcaption>
    </>
  );
}

export function Photography() {
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
      const wrapped = (next + photographs.length) % photographs.length;
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

  const current = active === null ? null : photographs[active];
  const leaving = outgoing === null ? null : photographs[outgoing];
  const enterClass =
    motion === "open" ? "from-open" : motion === "next" ? "from-next" : "from-prev";
  const leaveClass = motion === "prev" ? "to-prev" : "to-next";

  return (
    <section id="photography" className="scroll-mt-24 px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <SectionHeading
            index="04"
            title="Photography"
            description={`${photography.summary} ${photography.place} · ${photography.camera}.`}
          />
        </Reveal>

        <div className="hidden" aria-hidden>
          {photographs.map((photo) => (
            <img key={`warm-${photo.src}`} src={photo.src} alt="" />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
          {photographs.map((photo, index) => (
            <Reveal
              key={photo.src}
              delayMs={Math.min(index * 40, 160)}
              className={index === 0 ? "sm:col-span-2" : ""}
            >
              <figure>
                <button
                  type="button"
                  onClick={() => openAt(index)}
                  className="group block w-full cursor-pointer text-left"
                  aria-label={`Open ${photo.caption}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes={index === 0 ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                    className="h-auto w-full bg-card object-cover transition-opacity duration-300 group-hover:opacity-90"
                  />
                </button>
                <figcaption className="section-label mt-3">{photo.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {current ? (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
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
            aria-label="Previous photograph"
          >
            Prev
          </button>
          <div className="photo-lightbox-stage" onClick={(event) => event.stopPropagation()}>
            {leaving ? (
              <figure className={`photo-lightbox-slide is-out ${leaveClass}`} aria-hidden>
                <PhotoFrame photo={leaving} />
              </figure>
            ) : null}
            <figure key={current.src} className={`photo-lightbox-slide is-in ${enterClass}`}>
              <PhotoFrame photo={current} />
            </figure>
          </div>
          <button
            type="button"
            className="photo-lightbox-nav photo-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              go((active ?? 0) + 1, 1);
            }}
            aria-label="Next photograph"
          >
            Next
          </button>
        </div>
      ) : null}
    </section>
  );
}
