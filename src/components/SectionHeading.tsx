type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="grid gap-4 border-b border-border pb-8 sm:grid-cols-[88px_1fr] sm:items-end">
      <p className="section-label">{index}</p>
      <div>
        <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted">{description}</p>
        ) : null}
      </div>
    </div>
  );
}