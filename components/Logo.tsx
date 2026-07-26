type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  /** When true, renders in a single ink colour for footers / mono contexts */
  mono?: boolean;
};

/**
 * ColdProof mark — Brand Book v1.0.
 * A six-arm crystal verification symbol. The inner void holds the cyan
 * check; nothing is stacked, contained or added. Built on a 96-unit grid,
 * one arm (radius 20→42) carrying two pairs of barbs, rotated six times by
 * 60° for perfect radial symmetry. The check never touches an arm.
 * The mark never carries breach amber and never changes colour to report
 * a state — Ink, white or safe cold only.
 */
export function LogoMark({
  className = "h-8 w-8",
  mono = false,
}: {
  className?: string;
  mono?: boolean;
}) {
  // Cyan check on colour marks; single-colour check in mono contexts.
  const check = mono ? "currentColor" : "#0FB5D6";
  const arm =
    "M48 28 V6 M40.64 17.15 L48 21.4 L55.36 17.15 M42.37 9.75 L48 13 L53.63 9.75";
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      fill="none"
      role="img"
      aria-label="ColdProof"
    >
      {/* Six-arm crystal — arms + barbs in the current text colour */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={arm} />
        <path transform="rotate(60 48 48)" d={arm} />
        <path transform="rotate(120 48 48)" d={arm} />
        <path transform="rotate(180 48 48)" d={arm} />
        <path transform="rotate(240 48 48)" d={arm} />
        <path transform="rotate(300 48 48)" d={arm} />
      </g>
      {/* Verification check, held inside the inner void */}
      <path
        d="M39.7 47.8 L44.8 53.8 L56.3 42.3"
        fill="none"
        stroke={check}
        strokeWidth="5"
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
        <span className="font-sora text-lg tracking-tight">
          <span className="font-normal">Cold</span>
          <span className="font-bold">Proof</span>
        </span>
      )}
    </span>
  );
}
