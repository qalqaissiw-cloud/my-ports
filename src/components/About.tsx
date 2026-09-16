import { profile } from "../lib/content";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  { label: "Billing records audited", end: 5_000_000, suffix: "+", format: "millions" as const },
  {
    label: "Saved per week on FedEx billing",
    end: 20,
    prefix: "$",
    suffix: "K+",
    format: "plain" as const,
  },
  { label: "Open-source security tools", end: 3, suffix: "", format: "plain" as const },
  { label: "US aftermarket parts seller — Detroit Axle", display: "Largest" },
  { label: "Internal platform (FAST)", display: "Company-wide" },
] as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <SectionHeading
            index="01"
            title="Overview"
            description="R&D leadership, security analysis, full-stack work, and photography."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <Reveal>
            <p className="text-[16px] leading-8 text-foreground/85">{profile.summary}</p>
          </Reveal>
          <dl className="space-y-8 border-l border-border pl-8">
            {highlights.map((item, index) => (
              <Reveal key={item.label} delayMs={index * 80}>
                <dt className="section-label">{item.label}</dt>
                <dd className="mt-2 text-xl font-medium tracking-tight">
                  {"end" in item ? (
                    <CountUp
                      end={item.end}
                      prefix={"prefix" in item ? item.prefix : ""}
                      suffix={item.suffix}
                      format={item.format}
                    />
                  ) : (
                    item.display
                  )}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}