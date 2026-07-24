import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 font-sora text-3xl font-bold leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <div
          className={`mt-4 space-y-3 text-base leading-relaxed sm:text-lg ${
            dark ? "text-ice/70" : "text-ink/65"
          }`}
        >
          {intro}
        </div>
      )}
    </Reveal>
  );
}
