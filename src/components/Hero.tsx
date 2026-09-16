import { cv, profile, socials } from "../lib/content";

export function Hero() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <p className="hero-in hero-in-1 section-label">Amman, Jordan</p>
        <h1
          id="hero-name"
          className="hero-in hero-in-2 mt-6 max-w-3xl text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
        >
          {profile.name}
        </h1>
        <p className="hero-in hero-in-3 mt-6 max-w-2xl text-[17px] leading-8 text-muted">
          {profile.title}
        </p>
        <p className="hero-in hero-in-4 mt-6 max-w-2xl text-[16px] leading-8 text-foreground/85">
          {profile.pitch}
        </p>
        <p className="hero-in hero-in-4 mt-3 max-w-2xl text-[14px] leading-7 text-muted">
          {profile.availability}
        </p>

        <div
          id="hero-links"
          className="hero-in hero-in-5 mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px]"
        >
          <a href="#projects" className="link-line pb-0.5 text-foreground">
            Selected work
          </a>
          <a href="#photography" className="link-line text-muted">
            Photography
          </a>
          <a href="#contact" className="link-line text-muted">
            Contact
          </a>
          <a href={cv.href} download={cv.filename} className="link-line text-muted">
            {cv.label}
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line text-muted"
          >
            LinkedIn
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line text-muted"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
