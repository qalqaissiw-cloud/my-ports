import Image from "next/image";
import type { CSSProperties } from "react";
import { projects, type Project } from "../lib/content";
import { ProjectShots } from "./ProjectShots";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ProjectCover({ project, index }: { project: Project; index: number }) {
  const { cover } = project;

  return (
    <div className="project-cover" style={{ "--brand": cover.brand } as CSSProperties}>
      {cover.image ? (
        <Image
          src={cover.image.src}
          alt=""
          width={cover.image.width}
          height={cover.image.height}
          sizes="(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw"
          quality={90}
          className="project-banner"
        />
      ) : null}
      {cover.logo ? (
        <span className="project-logo" data-shape={cover.logoShape ?? "square"}>
          <Image src={cover.logo} alt="" fill unoptimized className="object-contain" />
        </span>
      ) : null}
      {cover.mark ? (
        <span className="project-mark" data-long={cover.mark.length > 4 || undefined}>
          {cover.mark}
        </span>
      ) : null}
      <div className="project-cover-meta">
        <span className="text-[12px] tracking-[0.16em]">{String(index + 1).padStart(2, "0")}</span>
        <span className="text-2xl font-medium tracking-tight">{project.name}</span>
      </div>
    </div>
  );
}

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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delayMs={Math.min(index * 50, 150)} className="h-full">
              <article className="project-card h-full">
                <ProjectCover project={project} index={index} />
                <div className="project-body">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <p className="section-label">{project.category}</p>
                    {project.stats ? <p className="text-[12px] text-muted">{project.stats}</p> : null}
                  </div>
                  <h3 className="mt-2 text-lg font-medium tracking-tight">{project.name}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-foreground/80">{project.description}</p>
                  <p className="mt-3 text-[12px] text-muted">{project.tags.join("  ·  ")}</p>
                  {project.href || project.links?.length || project.shots?.length ? (
                    <div className="mt-auto flex flex-wrap items-baseline gap-x-5 gap-y-2 pt-5">
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
                      {project.shots?.length ? <ProjectShots shots={project.shots} name={project.name} /> : null}
                    </div>
                  ) : (
                    <p className="mt-auto pt-5 text-[13px] text-muted">Internal case study</p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
