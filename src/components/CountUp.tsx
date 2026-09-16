"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  format?: "plain" | "millions" | "decimal";
  decimals?: number;
};

export function CountUp({
  end,
  prefix = "",
  suffix = "",
  durationMs = 1400,
  format = "plain",
  decimals = 1,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(end);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / durationMs);
          const eased = 1 - (1 - progress) ** 3;
          const next =
            format === "decimal"
              ? Number((end * eased).toFixed(decimals))
              : Math.round(end * eased);
          setValue(next);
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          } else {
            setValue(end);
          }
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, durationMs, format, decimals]);

  const display =
    format === "millions"
      ? value >= end
        ? `${prefix}${Math.round(end / 1_000_000)}M${suffix}`
        : `${prefix}${(value / 1_000_000).toFixed(value < 1_000_000 ? 1 : 0)}M`
      : format === "decimal"
        ? `${prefix}${Number(value).toFixed(decimals)}${suffix}`
        : `${prefix}${value}${suffix}`;

  return <span ref={ref}>{display}</span>;
}
