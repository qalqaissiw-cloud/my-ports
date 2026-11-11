import { memberships, skillGroups } from "../lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SkillMarks } from "./SkillMarks";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 overflow-x-clip px-5 py-20 sm:px-6 lg:px-8">
      <div className="page-shell">
        <Reveal>
          <SectionHeading index="06" title="Capabilities" />
        </Reveal>

        <div className="mt-4 divide-y divide-border">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delayMs={index * 60}>
              <div className="grid gap-4 py-8 sm:grid-cols-[180px_1fr]">
                <h3 className="section-label pt-1">{group.title}</h3>
                <SkillMarks items={group.items} />
              </div>
            </Reveal>
          ))}

          <Reveal delayMs={180}>
            <div className="grid gap-4 py-8 sm:grid-cols-[180px_1fr]">
              <h3 className="section-label pt-1">Memberships</h3>
              <SkillMarks items={memberships} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
