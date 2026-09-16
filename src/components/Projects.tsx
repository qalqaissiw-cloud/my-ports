import { projects } from "../lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <SectionHeading
            index="03"
            title="Selected work"
            description="Open-source security tools, internal platforms, and client systems."
          />
        </Reveal>

        <div className="mt-4">
          {projects.map((project, index) => (
            <Reveal key={project.name} delayMs={Math.min(index * 50, 150)}>
              <article className="border-b border-border py-10">
                <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
                  <p className="section-label pt-1">{project.category}</p>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-lg font-medium tracking-tight">{project.name}</h3>
                      {project.stats ? <p className="text-[13px] text-muted">{project.stats}</p> : null}
                    </div>
                    <p className="mt-3 max-w-2xl text-[15px] leading-7 text-foreground/80">
                      {project.description}
                    </p>
                    <p className="mt-4 text-[13px] text-muted">{project.tags.join("  ·  ")}</p>
                    {project.href || project.links?.length ? (
                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-line inline-block pb-0.5 text-[14px]"
                          >
                            {project.hrefLabel ?? "Open"}
                          </a>
                        ) : null}
                        {project.links?.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-line inline-block pb-0.5 text-[14px]"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-5 text-[13px] text-muted">Internal case study</p>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}