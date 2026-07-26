import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import TemperatureGraph from "../TemperatureGraph";
import CustodyTimeline, { CustodyStep } from "../CustodyTimeline";
import StatusBadge from "../StatusBadge";

const overview: { label: string; value: string; tone?: "verified" | "alert" | "info" | "neutral" }[] = [
  { label: "Batch ID", value: "CP-2048" },
  { label: "Product", value: "Insulin" },
  { label: "Origin", value: "Basel, CH" },
  { label: "Destination", value: "Nairobi, KE" },
  { label: "Transport provider", value: "NordCold Logistics" },
  { label: "Approved range", value: "2°C – 8°C" },
  { label: "Current condition", value: "9.3°C", tone: "alert" },
  { label: "Last custodian", value: "Airport transfer" },
  { label: "Shipment status", value: "Batch at risk", tone: "alert" },
  { label: "Settlement", value: "Payment blocked", tone: "alert" },
];

const history = [4.1, 4.0, 4.3, 4.2, 4.6, 5.3, 6.4, 7.5, 8.3, 9.0, 9.4, 9.2];

const custody: CustodyStep[] = [
  { label: "Warehouse release", actor: "Basel cold store", time: "08:12", state: "done" },
  { label: "Carrier pickup", actor: "NordCold Logistics", time: "09:40", state: "done" },
  {
    label: "Airport transfer",
    actor: "ZRH cargo terminal",
    time: "13:05",
    state: "flag",
    note: "Excursion detected during handover",
  },
  { label: "Local distributor", actor: "Nairobi depot", time: "—", state: "pending" },
  { label: "Hospital delivery", actor: "Kenyatta Hospital", time: "—", state: "pending" },
];

const alerts: { label: string; tone: "alert" | "info" | "verified"; time: string }[] = [
  { label: "Temperature warning", tone: "info", time: "12:48" },
  { label: "Critical excursion", tone: "alert", time: "13:05" },
  { label: "Unexpected opening", tone: "alert", time: "13:07" },
  { label: "Device disconnected", tone: "info", time: "13:22" },
  { label: "Review completed", tone: "verified", time: "—" },
];

const supplier = [
  { label: "Total shipments", value: "1,284" },
  { label: "Compliant deliveries", value: "97.4%" },
  { label: "Temperature excursions", value: "33" },
  { label: "Avg. response time", value: "14 min" },
];

export default function ProductInterface() {
  return (
    <section className="bg-navy-900 py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeading
          dark
          eyebrow="Product interface"
          title="Built for pharmaceutical and logistics operations."
          intro={
            <p>
              A single operational view of every shipment — conditions, custody,
              alerts and supplier performance, side by side.
            </p>
          }
        />

        <Reveal className="mt-12">
          <div className="rounded-2xl border border-white/10 bg-navy-800/70 p-3 shadow-panel sm:p-4">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-2 pb-3 pt-1">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <span className="font-inter text-[11px] text-ice/40">
                ColdProof · Operations
              </span>
              <StatusBadge tone="alert">Review required</StatusBadge>
            </div>

            <div className="grid gap-3 lg:grid-cols-12">
              {/* Shipment overview */}
              <Panel className="lg:col-span-5" title="Shipment overview">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-3.5">
                  {overview.map((o) => (
                    <div key={o.label}>
                      <dt className="text-[11px] uppercase tracking-wide text-ice/40">
                        {o.label}
                      </dt>
                      <dd className="mt-0.5">
                        {o.tone ? (
                          <StatusBadge tone={o.tone}>{o.value}</StatusBadge>
                        ) : (
                          <span className="font-sora text-sm font-semibold text-white">
                            {o.value}
                          </span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Panel>

              {/* Temperature history */}
              <Panel className="lg:col-span-7" title="Temperature history">
                <TemperatureGraph
                  data={history}
                  safeMin={2}
                  safeMax={8}
                  axisMin={0}
                  axisMax={12}
                  height={170}
                  lineColor="#F08C1E"
                  ariaLabel="Temperature history for batch CP-2048"
                />
              </Panel>

              {/* Custody timeline */}
              <Panel className="lg:col-span-4" title="Custody timeline">
                <CustodyTimeline steps={custody} />
              </Panel>

              {/* Alerts */}
              <Panel className="lg:col-span-4" title="Alerts">
                <ul className="space-y-2.5">
                  {alerts.map((a) => (
                    <li
                      key={a.label}
                      className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
                    >
                      <StatusBadge tone={a.tone}>{a.label}</StatusBadge>
                      <span className="font-inter text-[11px] tabular-nums text-ice/40">
                        {a.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </Panel>

              {/* Supplier performance */}
              <Panel className="lg:col-span-4" title="Supplier performance">
                <div className="grid grid-cols-2 gap-3">
                  {supplier.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-white/[0.03] p-3"
                    >
                      <p className="font-mono text-xl font-bold text-white">
                        {s.value}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-tight text-ice/45">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-xl border border-mint/20 bg-mint/8 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wide text-ice/50">
                      Reliability score
                    </span>
                    <span className="font-mono text-lg font-bold text-cyan">
                      A · 94
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <span className="block h-full w-[94%] rounded-full bg-mint" />
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/8 bg-navy-900/50 p-4 ${className}`}
    >
      <h3 className="mb-3 font-sora text-xs font-semibold uppercase tracking-wider text-ice/55">
        {title}
      </h3>
      {children}
    </div>
  );
}
