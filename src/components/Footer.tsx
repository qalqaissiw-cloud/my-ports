import { profile, socials } from "../lib/content";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border px-6 py-8 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${profile.email}`} className="link-line">
            Email
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="link-line">
            LinkedIn
          </a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="link-line">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}