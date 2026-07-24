type Props = {
  /** Sample temperature readings, evenly spaced across time. */
  data: number[];
  /** Approved lower/upper bound, e.g. 2 and 8. */
  safeMin: number;
  safeMax: number;
  /** Vertical axis extents for drawing. */
  axisMin?: number;
  axisMax?: number;
  height?: number;
  className?: string;
  /** Colour of the reading line. Defaults to cyan. */
  lineColor?: string;
  /** Show the last reading as a moving dot. */
  showHead?: boolean;
  /** Compact mode drops axis labels. */
  compact?: boolean;
  ariaLabel?: string;
};

/**
 * Reusable temperature line chart. Draws a shaded safe-range band and a
 * reading line; any point outside the band is marked in Alert Orange.
 * Uses sample data only — no live feed.
 */
export default function TemperatureGraph({
  data,
  safeMin,
  safeMax,
  axisMin = 0,
  axisMax = 14,
  height = 180,
  className = "",
  lineColor = "#00B8D9",
  showHead = true,
  compact = false,
  ariaLabel,
}: Props) {
  const width = 640;
  const padL = compact ? 8 : 34;
  const padR = 8;
  const padT = 12;
  const padB = compact ? 10 : 22;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;

  const x = (i: number) =>
    padL + (data.length <= 1 ? 0 : (i / (data.length - 1)) * innerW);
  const y = (v: number) =>
    padT + innerH - ((v - axisMin) / (axisMax - axisMin)) * innerH;

  const bandTop = y(safeMax);
  const bandBottom = y(safeMin);

  const linePath = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`)
    .join(" ");

  const areaPath =
    `M ${x(0)} ${y(data[0])} ` +
    data.map((v, i) => `L ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ") +
    ` L ${x(data.length - 1)} ${padT + innerH} L ${x(0)} ${padT + innerH} Z`;

  const gradId = `tg-${lineColor.replace("#", "")}`;
  const last = data[data.length - 1];
  const outOfRange = (v: number) => v > safeMax || v < safeMin;

  const yTicks = compact ? [] : [axisMin, safeMin, safeMax, axisMax];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`w-full ${className}`}
      role="img"
      aria-label={ariaLabel ?? "Temperature over time chart with safe range band"}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={lineColor} stopOpacity="0.22" />
          <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Safe range band */}
      <rect
        x={padL}
        y={bandTop}
        width={innerW}
        height={Math.max(0, bandBottom - bandTop)}
        fill="#7FE0C3"
        fillOpacity="0.14"
      />
      <line
        x1={padL}
        x2={width - padR}
        y1={bandTop}
        y2={bandTop}
        stroke="#7FE0C3"
        strokeOpacity="0.55"
        strokeDasharray="4 4"
        strokeWidth="1"
      />
      <line
        x1={padL}
        x2={width - padR}
        y1={bandBottom}
        y2={bandBottom}
        stroke="#7FE0C3"
        strokeOpacity="0.55"
        strokeDasharray="4 4"
        strokeWidth="1"
      />

      {/* Axis labels */}
      {yTicks.map((t) => (
        <text
          key={t}
          x={4}
          y={y(t) + 3}
          fontSize="9"
          fill="#102332"
          fillOpacity="0.5"
          fontFamily="var(--font-inter)"
        >
          {t}°
        </text>
      ))}

      {/* Area + line */}
      <path d={areaPath} fill={`url(#${gradId})`} />
      <path
        d={linePath}
        fill="none"
        stroke={lineColor}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Out-of-range markers */}
      {data.map((v, i) =>
        outOfRange(v) ? (
          <circle
            key={i}
            cx={x(i)}
            cy={y(v)}
            r="2.6"
            fill="#FF6B35"
          />
        ) : null
      )}

      {/* Moving head */}
      {showHead && (
        <g>
          <circle
            cx={x(data.length - 1)}
            cy={y(last)}
            r="8"
            fill={outOfRange(last) ? "#FF6B35" : lineColor}
            fillOpacity="0.18"
            className="animate-blip"
          />
          <circle
            cx={x(data.length - 1)}
            cy={y(last)}
            r="3.4"
            fill={outOfRange(last) ? "#FF6B35" : lineColor}
          />
        </g>
      )}
    </svg>
  );
}
