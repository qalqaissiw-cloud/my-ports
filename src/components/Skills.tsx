import { certifications, memberships, skillGroups } from "../lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <SectionHeading index="05" title="Capabilities" />
        </Reveal>

        <div className="mt-4 divide-y divide-border">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delayMs={index * 60}>
              <div className="grid gap-4 py-8 sm:grid-cols-[180px_1fr]">
                <h3 className="section-label pt-1">{group.title}</h3>
                <p className="text-[15px] leading-8 text-foreground/85">{group.items.join("  ·  ")}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delayMs={180}>
            <div className="grid gap-4 py-8 sm:grid-cols-[180px_1fr]">
              <h3 className="section-label pt-1">Also certified</h3>
              <ul className="space-y-2 text-[15px] leading-7 text-foreground/85">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={240}>
            <div className="grid gap-4 py-8 sm:grid-cols-[180px_1fr]">
              <h3 className="section-label pt-1">Memberships</h3>
              <p className="text-[15px] leading-8 text-foreground/85">
                {memberships.join("  ·  ")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
