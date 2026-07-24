"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TemperatureGraph from "./TemperatureGraph";
import StatusBadge from "./StatusBadge";

// Sample series. CP-2048 drifts out of range; CP-2049 stays compliant.
const CP2048_FULL = [
  4.1, 4.0, 4.3, 4.2, 4.5, 5.0, 5.8, 6.7, 7.6, 8.4, 9.1, 9.3,
];
const CP2049_FULL = [
  4.2, 4.4, 4.1, 3.9, 4.3, 4.5, 4.2, 4.0, 4.4, 4.3, 4.1, 4.2,
];

type Phase = "idle" | "playing" | "done";

export default function ShipmentComparison() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [step, setStep] = useState(CP2048_FULL.length); // visible points
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const replay = useCallback(() => {
    clear();
    setPhase("playing");
    setStep(1);
    let i = 1;
    timer.current = setInterval(() => {
      i += 1;
      setStep(i);
      if (i >= CP2048_FULL.length) {
        clear();
        setPhase("done");
      }
    }, 240);
  }, []);

  useEffect(() => () => clear(), []);

  const visible2048 = CP2048_FULL.slice(0, Math.max(1, step));
  const current2048 = visible2048[visible2048.length - 1];
  const breached = current2048 > 8;

  // Before the first replay we present CP-2048 in its final at-risk state so
  // the comparison reads clearly; replay re-animates the excursion.
  const showAlert = phase === "idle" ? true : breached;

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-2">
        {/* CP-2048 — non-compliant */}
        <ShipmentCard
          id="CP-2048"
          tone="alert"
          data={visible2048}
          currentTemp={phase === "idle" ? CP2048_FULL[CP2048_FULL.length - 1] : current2048}
          rows={[
            { label: "Product", value: "Insulin" },
            { label: "Safe range", value: "2°C – 8°C" },
            { label: "Custody", value: "Verified", tone: "verified" },
            {
              label: "Temperature",
              value: showAlert ? "Outside approved range" : "Within range",
              tone: showAlert ? "alert" : "verified",
            },
            {
              label: "Status",
              value: showAlert ? "Batch at risk" : "Monitoring",
              tone: showAlert ? "alert" : "info",
            },
            {
              label: "Settlement",
              value: showAlert ? "Payment blocked" : "Pending",
              tone: showAlert ? "alert" : "neutral",
            },
          ]}
          action={showAlert ? "Manual review required" : "Monitoring in progress"}
          actionTone={showAlert ? "alert" : "info"}
          playing={phase === "playing"}
        />

        {/* CP-2049 — compliant */}
        <ShipmentCard
          id="CP-2049"
          tone="verified"
          data={CP2049_FULL}
          currentTemp={CP2049_FULL[CP2049_FULL.length - 1]}
          rows={[
            { label: "Product", value: "Insulin" },
            { label: "Safe range", value: "2°C – 8°C" },
            { label: "Custody", value: "Verified", tone: "verified" },
            {
              label: "Temperature",
              value: "Within approved range",
              tone: "verified",
            },
            { label: "Status", value: "Delivery verified", tone: "verified" },
            { label: "Settlement", value: "Payment released", tone: "verified" },
          ]}
          action="Cold chain confirmed"
          actionTone="verified"
        />
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button onClick={replay} className="btn-primary" disabled={phase === "playing"}>
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M4 4v6h6M20 20v-6h-6M20 9a8 8 0 00-14.9-3M4 15a8 8 0 0014.9 3"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {phase === "playing" ? "Replaying…" : "Replay temperature event"}
        </button>
        <p className="text-center text-xs text-ink/50">
          Watch CP-2048's sensor reading cross 8°C and the shipment move from
          safe to alert.
        </p>
      </div>
    </div>
  );
}

type Row = {
  label: string;
  value: string;
  tone?: "verified" | "alert" | "info" | "neutral";
};

function ShipmentCard({
  id,
  tone,
  data,
  currentTemp,
  rows,
  action,
  actionTone,
  playing = false,
}: {
  id: string;
  tone: "alert" | "verified";
  data: number[];
  currentTemp: number;
  rows: Row[];
  action: string;
  actionTone: "verified" | "alert" | "info";
  playing?: boolean;
}) {
  const isAlert = tone === "alert";
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white shadow-card transition-shadow ${
        isAlert ? "border-alert/25" : "border-mint/30"
      }`}
    >
      <div
        className={`flex items-center justify-between px-5 py-4 ${
          isAlert ? "bg-alert/6" : "bg-mint/8"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-lg font-sora text-[11px] font-bold ${
              isAlert ? "bg-alert/15 text-[#c2410c]" : "bg-mint/20 text-[#0c7a5f]"
            }`}
          >
            {id.split("-")[1]}
          </span>
          <div>
            <p className="font-sora text-sm font-semibold text-ink">
              Shipment {id}
            </p>
            <p className="text-[11px] text-ink/50">Insulin · 2°C – 8°C</p>
          </div>
        </div>
        <StatusBadge tone={actionTone}>{action}</StatusBadge>
      </div>

      <div className="px-5 pt-4">
        <div className="mb-3 flex items-end justify-between">
          <span className="text-[11px] uppercase tracking-wider text-ink/45">
            Temperature history
          </span>
          <span
            className={`font-sora text-2xl font-bold tabular-nums ${
              isAlert ? "text-alert" : "text-[#0c7a5f]"
            }`}
          >
            {currentTemp.toFixed(1)}°C
          </span>
        </div>
        <TemperatureGraph
          data={data}
          safeMin={2}
          safeMax={8}
          axisMin={0}
          axisMax={12}
          height={140}
          lineColor={isAlert ? "#FF6B35" : "#7FE0C3"}
          showHead={playing || isAlert}
          ariaLabel={`Temperature history for shipment ${id}`}
        />
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 px-5 py-5">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-1">
            <dt className="text-[11px] uppercase tracking-wide text-ink/45">
              {r.label}
            </dt>
            <dd>
              {r.tone ? (
                <StatusBadge tone={r.tone}>{r.value}</StatusBadge>
              ) : (
                <span className="text-sm font-medium text-ink">{r.value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
