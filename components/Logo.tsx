type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  /** When true, renders in a single ink colour for footers / mono contexts */
  mono?: boolean;
};

/**
 * ColdProof mark.
 * A continuous "C" (the cold chain) opening from origin to destination,
 * a verification checkpoint node where it closes, and a temperature/data
 * line threading through it. Works in monochrome and at small sizes.
 */
export function LogoMark({
  className = "h-8 w-8",
  mono = false,
}: {
  className?: string;
  mono?: boolean;
}) {
  const chain = mono ? "currentColor" : "#00B8D9";
  const check = mono ? "currentColor" : "#7FE0C3";
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="ColdProof"
    >
      {/* Continuous C — the cold chain, origin to destination */}
      <path
        d="M31 11.5A13 13 0 1 0 31 28.5"
        stroke={chain}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Temperature / data line threading through the chain */}
      <path
        d="M9.5 20h4.5l2.4-5 3.2 10 2.4-5H27"
        stroke={mono ? "currentColor" : "#DFF6FF"}
        strokeOpacity={mono ? 0.55 : 0.9}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Verification checkpoint node at the destination */}
      <circle cx="31" cy="20" r="5.4" fill={check} />
      <path
        d="M28.7 20.1l1.7 1.7 3-3.4"
        stroke={mono ? "#000" : "#071A2B"}
        strokeOpacity={mono ? 0.9 : 1}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  showWordmark = true,
  mono = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8" mono={mono} />
      {showWordmark && (
        <span className="font-sora text-lg font-700 font-bold tracking-tight">
          Cold<span className={mono ? "" : "text-cyan"}>Proof</span>
        </span>
      )}
    </span>
  );
}
