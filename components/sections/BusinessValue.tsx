import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const benefits = [
  {
    title: "Reduce uncertainty",
    body: "Provide a shared record of shipment conditions and custody events.",
    icon: (
      <path
        d="M12 3l7 4v5c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V7l7-4Zm-2.5 8.5l2 2 4-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Accelerate investigations",
    body: "Help teams identify when and where an incident occurred.",
    icon: (
      <path
        d="M11 4a7 7 0 105.2 11.7L21 20M11 8v3l2 1"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Evaluate providers",
    body: "Compare routes, carriers and suppliers using consistent operational evidence.",
    icon: (
      <path
        d="M5 20V10M12 20V4M19 20v-7M3 20h18"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Support conditional settlement",
    body: "Connect verified delivery conditions with payment, insurance or claims workflows.",
    icon: (
      <path
        d="M4 7h16v10H4zM4 10h16M8 14h3M12 3v4M8 3l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function BusinessValue() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Business value"
          title="From temperature data to operational accountability."
          intro={
            <p>
              ColdProof helps reduce uncertainty, supports faster review and
              provides the evidence teams need to act with confidence.
            </p>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={i * 80}
              className="group flex gap-5 rounded-2xl border border-navy-900/8 bg-softwhite p-6 shadow-card transition-shadow duration-300 hover:shadow-cardHover"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-cyan/10 text-[#0784a0] transition-transform duration-300 group-hover:scale-105">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  {b.icon}
                </svg>
              </span>
              <div>
                <h3 className="font-sora text-lg font-semibold text-ink">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
