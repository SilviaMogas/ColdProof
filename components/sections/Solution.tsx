import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const pillars = [
  {
    step: "01",
    title: "Monitor",
    body: "IoT sensors record temperature, opening events and shipment conditions throughout the journey.",
    accent: "cyan",
    icon: (
      <path
        d="M12 3v6m0 0a3 3 0 013 3v5a3 3 0 01-6 0v-5a3 3 0 013-3Zm-6 6h2m10 0h2M6 13h1m10 0h1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    step: "02",
    title: "Verify",
    body: "Each handover and critical event becomes a traceable checkpoint, creating an accountable chain of custody.",
    accent: "mint",
    icon: (
      <path
        d="M5 7l4-4 4 4M9 3v10M19 17l-4 4-4-4M15 21V11M6 13l2 2 4-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    step: "03",
    title: "Act",
    body: "Alerts, review workflows and conditional settlement allow teams to respond when agreed conditions are not met.",
    accent: "cyan",
    icon: (
      <path
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export default function Solution() {
  return (
    <section id="product" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeading
          eyebrow="The solution"
          title="Continuous evidence across the cold chain."
          intro={
            <p>
              ColdProof turns fragmented cold-chain information into a single
              operational record that teams can inspect, verify and use.
            </p>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              className="relative overflow-hidden rounded-2xl border border-navy-900/8 bg-softwhite p-7 shadow-card"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-3 font-sora text-6xl font-bold text-navy-900/5"
              >
                {p.step}
              </span>
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  p.accent === "mint"
                    ? "bg-mint/15 text-[#0c7a5f]"
                    : "bg-cyan/12 text-[#0784a0]"
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </span>
              <h3 className="mt-5 font-sora text-xl font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Connecting flow line under pillars */}
        <Reveal className="mt-8 hidden items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider text-ink/40 md:flex">
          <span>Monitor</span>
          <Arrow />
          <span>Verify</span>
          <Arrow />
          <span>Act</span>
        </Reveal>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="28" height="10" viewBox="0 0 28 10" aria-hidden>
      <path
        d="M0 5h24m0 0l-4-4m4 4l-4 4"
        stroke="#00B8D9"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
