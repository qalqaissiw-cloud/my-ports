type BrandPaintProps = {
  colors: [string, string, string];
  label: string;
};

export function BrandPaint({ colors, label }: BrandPaintProps) {
  const [first, second, third] = colors;

  return (
    <div
      role="img"
      aria-label={`${label} brand colors`}
      className="paint-stroke h-7 w-40 shrink-0 sm:h-8 sm:w-48 [filter:drop-shadow(0_0_0.6px_rgba(22,22,22,0.28))]"
      style={{
        backgroundImage: `linear-gradient(90deg, ${first} 0%, ${first} 33.3%, ${second} 33.3%, ${second} 66.6%, ${third} 66.6%, ${third} 100%)`,
        WebkitMaskImage: "url(/brush-stroke.png)",
        maskImage: "url(/brush-stroke.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}