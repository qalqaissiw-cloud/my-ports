import Image from "next/image";
import { badges, cv, profile, socials } from "../lib/content";

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

        <div className="hero-in hero-in-6 relative z-10 mt-12">
          <p className="section-label">Verified credentials</p>
          <ul className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            {badges.map((badge) => {
              const external = !badge.href.startsWith("#");
              const cta = badge.cta ?? "Verify on Credly";
              return (
                <li key={badge.href} className="hero-badge">
                  <a
                    href={badge.href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    aria-label={`${badge.name}, ${badge.issuer}. ${cta}`}
                  >
                    <Image
                      src={badge.image}
                      alt=""
                      width={128}
                      height={128}
                      className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                    />
                  </a>
                  <span className="hero-badge-tip" aria-hidden>
                    <span className="block text-foreground">{badge.name}</span>
                    <span className="mt-0.5 block text-muted">
                      {badge.issuer} · {cta}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
