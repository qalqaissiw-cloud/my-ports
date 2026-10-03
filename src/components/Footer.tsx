import { profile, socials } from "../lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border px-6 py-8 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            title={profile.email}
            className="transition-colors duration-200 hover:text-foreground"
          >
            <MailIcon className="h-[19px] w-[19px]" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="transition-colors duration-200 hover:text-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="transition-colors duration-200 hover:text-foreground"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
