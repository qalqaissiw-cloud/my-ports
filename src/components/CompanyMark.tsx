import type { CSSProperties, ReactNode } from "react";
import type { CompanyLogo } from "../lib/content";

const marks: Record<CompanyLogo, { brand: string; svg: ReactNode }> = {
  "detroit-axle": {
    brand: "#006098",
    svg: (
      <svg viewBox="-3.1 12.5 40 40" fill="currentColor">
        <path d="M0 17.613H6.32C11.103 17.613 13.779 20.52 13.779 25.308V39.273C13.779 44.802 10.932 47.424 5.922 47.424H0V17.613ZM4.27 43.434H6.263C8.655 43.434 9.566 42.237 9.566 39.729V25.308C9.566 22.971 8.768 21.603 6.263 21.603H4.27V43.434Z" />
        <path
          transform="translate(-112.36 0)"
          d="M135.967 17.613H139.497L146.159 47.424H141.889L140.693 41.04H134.885L133.633 47.424H129.362L135.967 17.613ZM137.789 26.22H137.732L135.625 36.993H139.896L137.789 26.22Z"
        />
      </svg>
    ),
  },
  ncsc: {
    brand: "#ce1126",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M12 1.3 14.69 6.91 20.76 5.52 18.04 11.12 22.92 14.99 16.85 16.37 16.86 22.59 12 18.7 7.14 22.59 7.15 16.37 1.08 14.99 5.96 11.12 3.24 5.52 9.31 6.91ZM12.95 10.52 14.14 12.01 13.72 13.87 12 14.7 10.28 13.87 9.86 12.01 11.05 10.52Z"
        />
      </svg>
    ),
  },
  fibertechjo: {
    brand: "#d5242f",
    svg: (
      <svg viewBox="0 0 655 655" fill="currentColor">
        <path d="M630.6 113.6c-24.8-51.7-85-69.9-139.8-44-139.5 66.4-279 133-418.1 200-41.1 19.8-60.5 53.6-58.6 99.2 1.9 43.4 24.8 73.4 64 90.3 27.1 11.5 55.4 21.1 83.1 31.6 86.9 32.9 173.6 65.7 260.5 98.6 48.4 18.2 100 4.5 124.8-38.3 13.4-23 19.4-50.1 28.3-76.2l-220.4-62.8c-7.3 9.3-19.1 15.3-31.8 15.3-22.6 0-40.8-18.2-40.8-40.8s18.2-40.8 40.8-40.8 39.2 16.6 40.8 38l218.5 62.2 8-36-331.5-94.4c-7.3 9.3-19.1 15.3-31.8 15.3-22.6 0-40.8-18.2-40.8-40.8s18.2-40.8 40.8-40.8 39.2 16.6 40.8 38l329.3 93.8 8.9-40.5-145.5-41.5c-7.3 10.5-19.4 17.2-33.1 17.2-22.6 0-40.8-18.2-40.8-40.8s18.2-40.8 40.8-40.8 37.9 15.6 40.4 35.7l144.6 41.2 8-36.7-20.7-6.1c-6.1 6.1-14.6 10.2-24.2 10.2-18.5 0-33.4-15-33.4-33.5s15-33.5 33.4-33.5 30.3 12.1 32.8 28.4l18.5 5.1 4.1-18.8c1.9-8.6 3.8-16.6 5.4-23.6v-1c3.2-14.7 5.1-24.9 5.1-29 1-19.8-2.2-42.1-10.8-59.7l.6.6Z" />
      </svg>
    ),
  },
  amazon: {
    brand: "#ff9900",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9.5c6 4.8 14.2 5.2 20 .9" />
        <path d="M17.6 8.8 22 10.4l-1.2 4.4" />
      </svg>
    ),
  },
  qbits: {
    brand: "#22b893",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M16.5 18.5H8a5 5 0 0 1-5-5v-3a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3" />
        <circle cx="20.2" cy="18.3" r="1.7" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  weavers: {
    brand: "#dc143c",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 27 34 75 50 46 66 75 82 27" />
      </svg>
    ),
  },
};

export function CompanyMark({ logo }: { logo: CompanyLogo }) {
  const { brand, svg } = marks[logo];

  return (
    <span className="company-mark" style={{ "--brand": brand } as CSSProperties} aria-hidden>
      {svg}
    </span>
  );
}
