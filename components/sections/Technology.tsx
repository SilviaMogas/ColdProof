import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const layers = [
  {
    title: "IoT monitoring",
    body: "Sensors capture temperature and opening events during the shipment.",
  },
  {
    title: "Data infrastructure",
    body: "Complete readings are stored securely and remain available for operational analysis.",
  },
  {
    title: "Tamper-evident verification",
    body: "Critical events and data fingerprints can be recorded through verifiable infrastructure, making later modifications detectable.",
  },
  {
    title: "Human accountability",
    body: "Custody checkpoints can confirm that a verified person performed a handover.",
  },
  {
    title: "Conditional settlement",
    body: "Shipment status can support escrow, payment release or review workflows.",
  },
];

const integrations = [
  { name: "Hedera", role: "Tamper-evident events and checkpoints" },
  { name: "World", role: "Human verification during custody changes" },
  { name: "The Graph", role: "Indexing shipment and operational data" },
];

export default function Technology() {
  return (
    <section id="technology" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Technology"
          title="Built for verifiable operations."
          intro={
            <p>
              The technology supports the proposition — verifiable proof of
              condition. It is designed to be dependable, auditable and quiet in
              the background.
            </p>
          }
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Architecture layers */}
          <div className="lg:col-span-3">
            <ol className="space-y-3">
              {layers.map((l, i) => (
                <Reveal
                  key={l.title}
                  as="li"
                  delay={i * 70}
                  className="flex gap-4 rounded-2xl border border-navy-900/8 bg-softwhite p-5"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-navy-900 font-sora text-sm font-bold text-cyan">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-sora text-base font-semibold text-ink">
                      {l.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      {l.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Integrations + prototype note */}
          <div className="lg:col-span-2">
            <Reveal className="rounded-2xl border border-navy-900/8 bg-navy-900 p-6 text-white">
              <p className="eyebrow">Verifiable infrastructure</p>
              <p className="mt-3 text-sm leading-relaxed text-ice/70">
                ColdProof integrates specialist infrastructure to make records
                verifiable and accountable — supporting the product, never
                replacing it.
              </p>
              <ul className="mt-5 space-y-3">
                {integrations.map((it) => (
                  <li
                    key={it.name}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md bg-cyan/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    </span>
                    <div>
                      <p className="font-sora text-sm font-semibold text-white">
                        {it.name}
                      </p>
                      <p className="text-xs text-ice/55">{it.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              delay={120}
              className="mt-4 flex gap-3 rounded-2xl border border-alert/25 bg-alert/5 p-5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="mt-0.5 flex-none text-alert"
                aria-hidden
              >
                <path
                  d="M12 9v4m0 4h.01M10.3 3.9l-8 13.9A2 2 0 004 21h16a2 2 0 001.7-3.2l-8-13.9a2 2 0 00-3.4 0Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xs leading-relaxed text-ink/70">
                ColdProof is currently being developed as a proof of concept.
                Product functionality, integrations and commercial availability
                are under development.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
