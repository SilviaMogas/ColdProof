import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const cases = [
  {
    title: "Pharmaceuticals",
    tag: "Primary use case",
    body: "Vaccines, insulin, biological products and other temperature-sensitive medicines.",
    primary: true,
    icon: (
      <path
        d="M9 3h6v4l3 3v8a3 3 0 01-3 3H9a3 3 0 01-3-3v-8l3-3V3ZM6 13h12"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Healthcare logistics",
    body: "Hospital deliveries, clinical samples and specialist medical transport.",
    icon: (
      <path
        d="M3 13h4l2 3 3-9 2 6 2-3h4M3 17h18"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Humanitarian supply chains",
    body: "Temperature-sensitive products distributed across complex or low-connectivity environments.",
    icon: (
      <path
        d="M12 3a9 9 0 100 18 9 9 0 000-18ZM3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "High-value controlled goods",
    body: "Products requiring verifiable temperature, humidity, opening or custody conditions.",
    icon: (
      <path
        d="M12 3l8 4v5c0 4.4-3.3 7.9-8 9-4.7-1.1-8-4.6-8-9V7l8-4ZM9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-20 bg-softwhite py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Use cases"
          title="Where verifiable cold chains matter most."
          intro={
            <p>
              ColdProof supports any operation where proof of condition — not
              just proof of arrival — is essential.
            </p>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 80}
              className={`group relative flex flex-col rounded-2xl border p-6 shadow-card transition-shadow duration-300 hover:shadow-cardHover ${
                c.primary
                  ? "border-cyan/30 bg-navy-900 text-white"
                  : "border-navy-900/8 bg-white"
              }`}
            >
              {c.tag && (
                <span className="mb-3 inline-flex w-max items-center rounded-full bg-cyan/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan">
                  {c.tag}
                </span>
              )}
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  c.primary
                    ? "bg-cyan/15 text-cyan"
                    : "bg-navy-900/5 text-ink/70 group-hover:bg-cyan/10 group-hover:text-cyan"
                } transition-colors`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  {c.icon}
                </svg>
              </span>
              <h3
                className={`mt-4 font-sora text-lg font-semibold ${
                  c.primary ? "text-white" : "text-ink"
                }`}
              >
                {c.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  c.primary ? "text-ice/70" : "text-ink/60"
                }`}
              >
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
