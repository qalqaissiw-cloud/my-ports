import type { CSSProperties, ReactNode } from "react";
import { profile, socials } from "../lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

type Social = "email" | "linkedin" | "github";

const links: Record<
  Social,
  { label: string; href: string; brand: string; external: boolean; icon: ReactNode }
> = {
  email: {
    label: "Email",
    href: `mailto:${profile.email}`,
    brand: "#1c2b3a",
    external: false,
    icon: <MailIcon className="h-[18px] w-[18px]" />,
  },
  linkedin: {
    label: "LinkedIn",
    href: socials.linkedin,
    brand: "#0a66c2",
    external: true,
    icon: <LinkedInIcon className="h-4 w-4" />,
  },
  github: {
    label: "GitHub",
    href: socials.github,
    brand: "#24292f",
    external: true,
    icon: <GitHubIcon className="h-[18px] w-[18px]" />,
  },
};

export function SocialLinks({ items, className = "" }: { items: Social[]; className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map((key) => {
        const { label, href, brand, external, icon } = links[key];
        return (
          <li key={key} className="social" style={{ "--brand": brand } as CSSProperties}>
            <a
              href={href}
              aria-label={label}
              className="social-link"
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {icon}
            </a>
            <span className="social-tip" aria-hidden>
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
