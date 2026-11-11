import Image from "next/image";
import { badges, cv, profile } from "../lib/content";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section className="hero-section overflow-x-clip px-5 pt-12 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8 lg:pt-16 lg:pb-24">
      <div className="page-shell">
        <div className="hero-layout">
          <p className="hero-in hero-in-1 hero-kicker section-label">Amman, Jordan</p>
          <h1
            id="hero-name"
            className="hero-in hero-in-2 hero-name text-[2rem] font-medium tracking-tight text-foreground sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            {profile.name}
          </h1>

          <div className="hero-in hero-in-3 hero-portrait">
            <Image
              src="/qais-portrait.png"
              alt={`${profile.name} sitting cross-legged with a laptop`}
              width={880}
              height={1062}
              priority
              sizes="(min-width: 1024px) 480px, min(70vw, 280px)"
            />
          </div>

          <div className="hero-body">
            <p className="hero-in hero-in-3 text-[15px] leading-7 text-muted sm:text-[17px] sm:leading-8">
              {profile.title}
            </p>
            <p className="hero-in hero-in-4 mt-5 text-[15px] leading-7 text-foreground/85 sm:mt-6 sm:text-[16px] sm:leading-8">
              {profile.pitch}
            </p>
            <p className="hero-in hero-in-4 mt-3 text-[13px] leading-6 text-muted sm:text-[14px] sm:leading-7">
              {profile.availability}
            </p>

            <div
              id="hero-links"
              className="hero-in hero-in-5 mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] sm:mt-10 sm:gap-x-8"
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
              <SocialLinks items={["linkedin", "github"]} />
            </div>
          </div>
        </div>

        <div className="hero-in hero-in-6 relative z-10 mt-10 sm:mt-12">
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
                      className="h-12 w-12 object-contain sm:h-16 sm:w-16"
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
