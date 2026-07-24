import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const stages = [
  {
    n: 1,
    title: "Create shipment",
    body: "Define the product, shipment ID, approved range, origin, destination and delivery conditions.",
  },
  {
    n: 2,
    title: "Verify custody",
    body: "Record each collection, transfer and delivery checkpoint.",
  },
  {
    n: 3,
    title: "Monitor conditions",
    body: "Capture temperature and opening events continuously throughout the journey.",
  },
  {
    n: 4,
    title: "Detect excursions",
    body: "Identify warnings or critical deviations and send the shipment for review.",
  },
  {
    n: 5,
    title: "Confirm or review",
    body: "Confirm compliant delivery or provide the evidence required for operational review and conditional settlement.",
  },
];

const journey = [
  "Create shipment",
  "Verify custody",
  "Monitor conditions",
  "Detect excursion",
  "Confirm or review",
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-navy-900 py-20 sm:py-28"
    >
      <div className="container-pad">
        <SectionHeading
          dark
          eyebrow="How it works"
          title="One record, from origin to destination."
          intro={
            <p>
              Every shipment moves through five stages. Each one adds evidence to
              a single operational record.
            </p>
          }
        />

        {/* Simplified journey strip */}
        <Reveal className="mt-10 overflow-x-auto scroll-x">
          <div className="flex min-w-max items-center gap-2 rounded-2xl border border-white/10 bg-navy-800/60 p-3">
            {journey.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <span className="whitespace-nowrap rounded-lg bg-white/5 px-3.5 py-2 font-sora text-sm font-semibold text-ice">
                  {label}
                </span>
                {i < journey.length - 1 && (
                  <svg width="26" height="10" viewBox="0 0 26 10" aria-hidden>
                    <path
                      d="M0 5h22m0 0l-4-4m4 4l-4 4"
                      stroke="#00B8D9"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Five-stage detail */}
        <div className="mt-8 overflow-x-auto scroll-x pb-2">
          <ol className="grid min-w-max grid-cols-5 gap-4 lg:min-w-0">
            {stages.map((s, i) => (
              <Reveal
                key={s.n}
                as="li"
                delay={i * 90}
                className="relative w-64 lg:w-auto"
              >
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-800/50 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-cyan font-sora text-sm font-bold text-navy-900">
                      {s.n}
                    </span>
                    {i < stages.length - 1 && (
                      <span className="hidden h-px flex-1 bg-gradient-to-r from-cyan/50 to-transparent lg:block" />
                    )}
                  </div>
                  <h3 className="mt-4 font-sora text-base font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ice/60">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
