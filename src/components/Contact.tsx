import { cv, profile, socials } from "../lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const rows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { label: "Location", value: profile.location },
  { label: "CV", value: cv.label, href: cv.href, download: cv.filename },
  { label: "LinkedIn", value: "linkedin.com/in/qais-alqaissi", href: socials.linkedin },
  { label: "GitHub", value: "github.com/Cipher-Red", href: socials.github },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <SectionHeading
            index="07"
            title="Contact"
            description="For roles, collaborations, or project inquiries."
          />
        </Reveal>

        <dl className="mt-4 divide-y divide-border">
          {rows.map((row, index) => (
            <Reveal key={row.label} delayMs={index * 50}>
              <div className="grid gap-2 py-6 sm:grid-cols-[180px_1fr] sm:items-baseline">
                <dt className="section-label">{row.label}</dt>
                <dd className="text-[16px]">
                  {row.href ? (
                    <a
                      href={row.href}
                      download={"download" in row ? row.download : undefined}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="link-line"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
