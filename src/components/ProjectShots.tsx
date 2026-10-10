"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "../lib/content";

type Shot = NonNullable<Project["shots"]>[number];
type Motion = "open" | "next" | "prev";

const SLIDE_MS = 480;

function ShotFrame({ shot, index, total }: { shot: Shot; index: number; total: number }) {
  return (
    <>
      <img
        src={shot.src}
        alt={shot.title}
        width={shot.width}
        height={shot.height}
        className="max-h-[68vh] w-auto max-w-full object-contain"
      />
      <figcaption className="project-shot-caption">
        <p>
          {shot.title}
          <span>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </p>
        <p>{shot.text}</p>
      </figcaption>
    </>
  );
}

export function ProjectShots({ shots, name }: { shots: Shot[]; name: string }) {
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
      const wrapped = (next + shots.length) % shots.length;
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
    [active, shots.length],
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

  const shot = active === null ? null : shots[active];
  const leaving = outgoing === null ? null : shots[outgoing];
  const enterClass = motion === "open" ? "from-open" : motion === "next" ? "from-next" : "from-prev";
  const leaveClass = motion === "prev" ? "to-prev" : "to-next";

  return (
    <>
      <button
        type="button"
        className="project-shot-button link-line inline-block pb-0.5 text-[14px]"
        onClick={() => {
          setOutgoing(null);
          setMotion("open");
          setActive(0);
        }}
      >
        View screens
      </button>
      {shot ? (
        <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label={`${name} screens`} onClick={close}>
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
            aria-label="Previous screen"
          >
            Prev
          </button>
          <div className="photo-lightbox-stage" onClick={(event) => event.stopPropagation()}>
            {leaving ? (
              <figure className={`photo-lightbox-slide is-out ${leaveClass}`} aria-hidden>
                <ShotFrame shot={leaving} index={outgoing ?? 0} total={shots.length} />
              </figure>
            ) : null}
            <figure key={shot.src} className={`photo-lightbox-slide is-in ${enterClass}`}>
              <ShotFrame shot={shot} index={active ?? 0} total={shots.length} />
            </figure>
          </div>
          <button
            type="button"
            className="photo-lightbox-nav photo-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              go((active ?? 0) + 1, 1);
            }}
            aria-label="Next screen"
          >
            Next
          </button>
        </div>
      ) : null}
    </>
  );
}
