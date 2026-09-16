import { experience } from "../lib/content";
import { BrandPaint } from "./BrandPaint";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <SectionHeading index="02" title="Experience" />
        </Reveal>

        <ol className="mt-12 divide-y divide-border">
          {experience.map((role, index) => (
            <li key={`${role.company}-${role.role}`} className="bg-background py-10 first:pt-2">
              <Reveal delayMs={Math.min(index * 60, 180)}>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-baseline">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      {role.href ? (
                        <a
                          href={role.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-line text-lg font-medium tracking-tight"
                        >
                          {role.company}
                        </a>
                      ) : (
                        <h3 className="text-lg font-medium tracking-tight">{role.company}</h3>
                      )}
                      <BrandPaint colors={role.colors} label={role.company} />
                    </div>
                    <p className="mt-1 text-[15px] text-muted">{role.role}</p>
                  </div>
                  <p className="section-label sm:text-right">
                    {role.period}
                    {role.current ? " · Current" : ""}
                  </p>
                </div>
                <ul className="mt-6 max-w-3xl space-y-2 text-[15px] leading-7 text-foreground/85">
                  {role.highlights.map((item) => (
                    <li key={item} className="grid grid-cols-[12px_1fr] gap-3">
                      <span className="mt-[11px] h-px w-2 bg-foreground/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}