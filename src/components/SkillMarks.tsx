import type { CSSProperties, ReactNode } from "react";
import { brandIcons } from "./skillIconPaths";

type Mark = { brand: string; icon: ReactNode };

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}

function Word({ children, size = 8 }: { children: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <text x="12" y="16" textAnchor="middle" fill="currentColor" fontSize={size} fontWeight="700" fontFamily="ui-sans-serif, system-ui, sans-serif">
        {children}
      </text>
    </svg>
  );
}

function BrandLogo({ paths }: { paths: string[] }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {paths.map((d, index) => (
        <path key={index} d={d} />
      ))}
    </svg>
  );
}

const glyphs: Record<string, Mark> = {
  Splunk: {
    brand: "#4B8B1F",
    icon: (
      <Glyph>
        <path d="M5 6.5 13.5 12 5 17.5" />
        <path d="M11 6.5 19.5 12 11 17.5" />
      </Glyph>
    ),
  },
  Redline: {
    brand: "#E31937",
    icon: (
      <Glyph>
        <path d="M7 4.5h6.2L18 9.2V19.5H7Z" />
        <path d="M13.2 4.5V9.2H18" />
        <path d="M4.5 14.2h15" />
      </Glyph>
    ),
  },
  Autopsy: {
    brand: "#3D4F5F",
    icon: (
      <Glyph>
        <circle cx="10.5" cy="10.5" r="5.2" />
        <path d="m14.4 14.4 5.1 5.1" />
      </Glyph>
    ),
  },
  TCPdump: {
    brand: "#1F6F4A",
    icon: (
      <Glyph>
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="M7 10h3.5M7 14h6.5" />
      </Glyph>
    ),
  },
  OSINT: {
    brand: "#6B4C9A",
    icon: (
      <Glyph>
        <path d="M2.8 12S6.2 6.8 12 6.8 21.2 12 21.2 12 17.8 17.2 12 17.2 2.8 12 2.8 12Z" />
        <circle cx="12" cy="12" r="2.1" />
      </Glyph>
    ),
  },
  "Penetration testing": {
    brand: "#C0392B",
    icon: (
      <Glyph>
        <circle cx="12" cy="12" r="6.5" />
        <path d="M12 3.2v2.6M12 18.2v2.6M3.2 12h2.6M18.2 12h2.6" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
      </Glyph>
    ),
  },
  "Blue team": {
    brand: "#1D4E89",
    icon: (
      <Glyph>
        <path d="M12 3.4 19 6.4v5.1c0 4.1-2.7 7-7 8.6-4.3-1.6-7-4.5-7-8.6V6.4Z" />
      </Glyph>
    ),
  },
  "CMD / Batch": {
    brand: "#1C2B3A",
    icon: (
      <Glyph>
        <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
        <path d="M7 9.2 10 12 7 14.8M12 15h5" />
      </Glyph>
    ),
  },
  "Full-stack web": {
    brand: "#0F6E6E",
    icon: (
      <Glyph>
        <path d="m12 4 8 4-8 4-8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </Glyph>
    ),
  },
  "Internal tooling": {
    brand: "#8A5A2B",
    icon: (
      <Glyph>
        <path d="M14.6 6.2a3.1 3.1 0 0 0-4.3 4L4.6 16.1 7.9 19.4l5.7-5.9a3.1 3.1 0 0 0 4.3-4.1L15.6 11.7l-2.3-2.3Z" />
      </Glyph>
    ),
  },
  "Production & development workflows": {
    brand: "#6E56CF",
    icon: (
      <Glyph>
        <circle cx="6" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="11" r="2" />
        <path d="M6 8v8" />
        <path d="M6 11h8a4 4 0 0 1 4 0" />
      </Glyph>
    ),
  },
  "Arabic (fluent)": { brand: "#1C6B4A", icon: <Word size={13}>ع</Word> },
  "English (fluent)": { brand: "#1D4E89", icon: <Word size={9}>En</Word> },
  "IEEE Member": {
    brand: "#00629B",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.8 21.2 12 12 21.2 2.8 12Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <text x="12" y="14.6" textAnchor="middle" fill="currentColor" fontSize="4.4" fontWeight="700" fontFamily="ui-sans-serif, system-ui, sans-serif">
          IEEE
        </text>
      </svg>
    ),
  },
};

function markFor(name: string): Mark {
  const brand = brandIcons[name];
  if (brand) return { brand: brand.brand, icon: <BrandLogo paths={brand.paths} /> };
  return glyphs[name] ?? { brand: "var(--foreground)", icon: <Word size={7}>{name.slice(0, 2)}</Word> };
}

export function SkillMarks({ items }: { items: readonly string[] }) {
  return (
    <ul className="skill-row">
      {items.map((name) => {
        const { brand, icon } = markFor(name);
        return (
          <li key={name} className="skill" style={{ "--brand": brand } as CSSProperties}>
            <button type="button" className="skill-mark" aria-label={name}>
              {icon}
            </button>
            <span className="skill-tip" role="tooltip">
              {name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
