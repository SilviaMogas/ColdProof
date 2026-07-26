"use client";

import { useEffect, useState } from "react";
import TemperatureGraph from "./TemperatureGraph";
import StatusBadge from "./StatusBadge";

// Sample readings — a stable in-range journey vs one that drifts out of range.
const SAFE_SERIES = [4.2, 4.0, 4.5, 4.3, 3.9, 4.1, 4.6, 4.4, 4.2, 4.0, 4.3, 4.1];
const EXCURSION_SERIES = [4.1, 4.3, 4.6, 5.2, 6.1, 7.0, 7.8, 8.6, 9.4, 9.1, 8.9, 9.2];

type State = "confirmed" | "excursion";

export default function HeroDashboard() {
  const [state, setState] = useState<State>("confirmed");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      setState((s) => (s === "confirmed" ? "excursion" : "confirmed"));
    }, 5200);
    return () => clearInterval(id);
  }, []);

  const isSafe = state === "confirmed";
  const series = isSafe ? SAFE_SERIES : EXCURSION_SERIES;
  const currentTemp = series[series.length - 1];

  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className={`absolute -inset-6 -z-10 rounded-[2rem] blur-2xl transition-colors duration-700 ${
          isSafe ? "bg-mint/20" : "bg-alert/20"
        }`}
      />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-panel">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan/15 font-mono text-xs font-bold text-cyan">
              CP
            </span>
            <div>
              <p className="font-mono text-sm font-medium text-white">
                Batch CP-2048
              </p>
              <p className="text-[11px] text-ice/50">Insulin · 2 pallets</p>
            </div>
          </div>
          <StatusBadge tone={isSafe ? "verified" : "alert"}>
            {isSafe ? "COLD CHAIN CONFIRMED" : "TEMPERATURE EXCURSION"}
          </StatusBadge>
        </div>

        {/* Body */}
        <div className="grid gap-4 p-5 sm:grid-cols-5">
          {/* Left: live readout */}
          <div className="sm:col-span-2 space-y-3">
            <div
              className={`rounded-xl border p-4 transition-colors duration-500 ${
                isSafe
                  ? "border-mint/25 bg-mint/8"
                  : "border-alert/30 bg-alert/10"
              }`}
            >
              <p className="text-[11px] uppercase tracking-wider text-ice/55">
                Current temperature
              </p>
              <div className="mt-1 flex items-baseline gap-2">
                <span
                  className={`font-mono text-4xl font-bold tabular-nums transition-colors duration-500 ${
                    isSafe ? "text-cyan" : "text-alert"
                  }`}
                >
                  {currentTemp.toFixed(1)}
                </span>
                <span className="font-mono text-lg text-ice/70">°C</span>
              </div>
              <p className="mt-1 text-[11px] text-ice/50">
                Safe range&nbsp;·&nbsp;2°C – 8°C
              </p>
            </div>

            <dl className="space-y-2.5 rounded-xl border border-white/8 bg-navy-900/40 p-4">
              <Row label="Custody" value="Verified" tone="verified" />
              <Row
                label="Shipment"
                value={isSafe ? "Delivery verified" : "Batch at risk"}
                tone={isSafe ? "verified" : "alert"}
              />
              <Row
                label="Payment"
                value={isSafe ? "Released" : "Blocked"}
                tone={isSafe ? "verified" : "alert"}
              />
            </dl>
          </div>

          {/* Right: live line */}
          <div className="sm:col-span-3">
            <div className="flex h-full flex-col rounded-xl border border-white/8 bg-navy-900/40 p-4">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-wider text-ice/55">
                  Live temperature
                </p>
                <span className="flex items-center gap-1.5 text-[11px] text-ice/50">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isSafe ? "bg-mint" : "bg-alert"
                    } animate-pulse-soft`}
                  />
                  Streaming
                </span>
              </div>
              <div className="flex-1">
                <TemperatureGraph
                  key={state}
                  data={series}
                  safeMin={2}
                  safeMax={8}
                  axisMin={0}
                  axisMax={12}
                  height={150}
                  lineColor={isSafe ? "#0FB5D6" : "#F08C1E"}
                  ariaLabel="Live temperature readings for batch CP-2048"
                />
              </div>
              <p
                className={`mt-2 text-center font-sora text-xs font-semibold tracking-wide transition-colors duration-500 ${
                  isSafe ? "text-mint" : "text-alert"
                }`}
              >
                {isSafe
                  ? "COLD CHAIN CONFIRMED"
                  : "TEMPERATURE EXCURSION — REVIEW REQUIRED"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "verified" | "alert";
}) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-xs text-ice/55">{label}</dt>
      <dd>
        <StatusBadge tone={tone}>{value}</StatusBadge>
      </dd>
    </div>
  );
}
