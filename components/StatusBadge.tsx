type Tone = "verified" | "alert" | "neutral" | "info";

const styles: Record<Tone, string> = {
  verified: "bg-mint/15 text-[#0c7a5f] ring-1 ring-inset ring-mint/40",
  alert: "bg-alert/12 text-[#c2410c] ring-1 ring-inset ring-alert/35",
  neutral: "bg-navy-900/5 text-ink/70 ring-1 ring-inset ring-navy-900/10",
  info: "bg-cyan/12 text-[#0784a0] ring-1 ring-inset ring-cyan/35",
};

const dotColor: Record<Tone, string> = {
  verified: "bg-mint",
  alert: "bg-alert",
  neutral: "bg-ink/40",
  info: "bg-cyan",
};

export default function StatusBadge({
  tone = "neutral",
  children,
  dot = true,
  className = "",
}: {
  tone?: Tone;
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${styles[tone]} ${className}`}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${dotColor[tone]} ${
            tone === "alert" ? "animate-pulse-soft" : ""
          }`}
        />
      )}
      {children}
    </span>
  );
}
