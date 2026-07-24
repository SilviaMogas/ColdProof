import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const problems = [
  {
    title: "Limited visibility",
    body: "Teams cannot always see shipment conditions in real time.",
    icon: (
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z M12 9a3 3 0 100 6 3 3 0 000-6Z M4 4l16 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Fragmented accountability",
    body: "Custody changes may be recorded manually or across disconnected systems.",
    icon: (
      <path
        d="M9 12a3 3 0 013-3h1a3 3 0 010 6M15 12a3 3 0 01-3 3h-1a3 3 0 010-6M7 5v2M5 7h2M17 17v2M15 19h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Slow dispute resolution",
    body: "Suppliers, carriers and customers may hold different versions of the same event.",
    icon: (
      <path
        d="M8 10h8M8 14h5M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Reactive decision-making",
    body: "Problems may only become visible after the shipment has reached its destination.",
    icon: (
      <path
        d="M12 8v4l2.5 2.5M12 3a9 9 0 109 9M17 3l4 1-1 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export default function Problem() {
  return (
    <section className="bg-softwhite py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeading
          eyebrow="The problem"
          title="Arrival is not enough."
          intro={
            <>
              <p>
                A vaccine, insulin shipment or biological product can arrive on
                time and still become unsuitable if its required conditions were
                not maintained during transportation.
              </p>
              <p>
                Cold-chain records are often fragmented across sensors,
                spreadsheets, logistics providers and manual handovers. When an
                incident occurs, organisations may struggle to determine what
                happened, when it happened and who was responsible.
              </p>
            </>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="group rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-cardHover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900/5 text-ink/70 transition-colors group-hover:bg-cyan/10 group-hover:text-cyan">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </span>
              <h3 className="mt-4 font-sora text-lg font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
