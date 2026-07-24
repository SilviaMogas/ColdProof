import StatusBadge from "./StatusBadge";

export type CustodyStep = {
  label: string;
  actor: string;
  time: string;
  state: "done" | "current" | "pending" | "flag";
  note?: string;
};

const nodeStyles: Record<CustodyStep["state"], string> = {
  done: "bg-mint border-mint",
  current: "bg-cyan border-cyan",
  pending: "bg-white border-navy-900/20",
  flag: "bg-alert border-alert",
};

/**
 * Vertical chain-of-custody timeline. Each handover is a verifiable
 * checkpoint node with actor and timestamp.
 */
export default function CustodyTimeline({
  steps,
  className = "",
}: {
  steps: CustodyStep[];
  className?: string;
}) {
  return (
    <ol className={`relative ${className}`}>
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li key={step.label} className="relative flex gap-4 pb-6 last:pb-0">
            {!isLast && (
              <span
                aria-hidden
                className="absolute left-[7px] top-5 h-full w-px bg-navy-900/12"
              />
            )}
            <span
              className={`relative z-10 mt-1 h-4 w-4 flex-none rounded-full border-2 ${
                nodeStyles[step.state]
              } ${step.state === "current" ? "ring-4 ring-cyan/20" : ""}`}
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-sora text-sm font-semibold text-ink">
                  {step.label}
                </p>
                <span className="font-inter text-xs tabular-nums text-ink/50">
                  {step.time}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-ink/60">{step.actor}</p>
              {step.note && (
                <div className="mt-1.5">
                  <StatusBadge tone={step.state === "flag" ? "alert" : "info"}>
                    {step.note}
                  </StatusBadge>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
