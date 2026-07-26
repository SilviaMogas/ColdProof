import Reveal from "../Reveal";

const columns = [
  {
    label: "Infrastructure",
    title: "Backend",
    description:
      "Open the live ColdProof backend and inspect the project infrastructure.",
    links: [
      {
        label: "coldproof.pipe.com.ar",
        href: "https://coldproof.pipe.com.ar",
      },
    ],
  },
  {
    label: "Onchain identity",
    title: "ENS & Score Engine",
    description:
      "Explore the live reputation engine and ColdProof’s ENS profile.",
    links: [
      {
        label: "ENS Score Engine",
        href: "https://coldproof-score-engine.vercel.app/",
      },
      {
        label: "coldproof.eth",
        href: "https://app.ens.dev/coldproof.eth",
      },
    ],
  },
];

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6 14 14 6m0 0H8m6 0v6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectLinks() {
  return (
    <section
      aria-labelledby="project-links-title"
      className="bg-softwhite py-16 sm:py-20"
    >
      <div className="container-pad">
        <Reveal className="border-y border-line">
          <div className="grid lg:grid-cols-[0.62fr_1.38fr]">
            <div className="border-b border-line py-8 lg:border-b-0 lg:border-r lg:py-10 lg:pr-12">
              <p className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                Project access
              </p>
              <h2
                id="project-links-title"
                className="mt-4 max-w-sm font-sora text-3xl font-bold leading-tight text-ink sm:text-4xl"
              >
                Explore the live ColdProof stack.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
                Direct access to the infrastructure, reputation engine and
                onchain identity behind the project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2">
              {columns.map((column, index) => (
                <article
                  key={column.title}
                  className={`py-8 sm:py-10 ${
                    index === 0
                      ? "border-b border-line sm:border-b-0 sm:border-r sm:px-8 lg:px-10"
                      : "sm:pl-8 lg:pl-10"
                  }`}
                >
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-cyan">
                    {column.label}
                  </p>
                  <h3 className="mt-3 font-sora text-xl font-semibold text-ink">
                    {column.title}
                  </h3>
                  <p className="mt-2 min-h-12 text-sm leading-relaxed text-slate">
                    {column.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-2">
                    {column.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-4 py-3.5 font-mono text-xs font-medium text-ink shadow-[0_1px_2px_rgba(10,27,46,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                      >
                        <span className="min-w-0 truncate">{link.label}</span>
                        <ExternalArrow />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
