import Logo from "../Logo";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Overview", href: "#product" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Live demo", href: "#live-demo" },
    ],
  },
  {
    heading: "Technology",
    links: [
      { label: "Architecture", href: "#technology" },
      { label: "Verification", href: "#technology" },
      { label: "Conditional settlement", href: "#technology" },
    ],
  },
  {
    heading: "Use cases",
    links: [
      { label: "Pharmaceuticals", href: "#use-cases" },
      { label: "Healthcare logistics", href: "#use-cases" },
      { label: "Humanitarian", href: "#use-cases" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact", href: "#request-a-pilot" },
      { label: "Request a pilot", href: "#request-a-pilot" },
      { label: "Privacy", href: "#privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-ice/70">
      <div className="container-pad py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-white">
              <Logo />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ice/60">
              ColdProof provides verifiable evidence across temperature-sensitive
              supply chains.
            </p>
            <p className="mt-5 font-sora text-sm font-medium text-ice/45">
              Proof of safe delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-sora text-xs font-semibold uppercase tracking-wider text-ice/45">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-ice/65 transition-colors hover:text-cyan"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3">
            <p className="text-xs leading-relaxed text-ice/45">
              <span className="font-semibold text-ice/60">
                Prototype disclaimer:
              </span>{" "}
              ColdProof is currently being developed as a proof of concept.
              Product functionality, integrations and commercial availability are
              under development. Nothing on this site constitutes a claim of
              regulatory approval, medical certification, validated pharmaceutical
              compliance, production readiness or guaranteed product safety.
            </p>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-ice/40">
              © {2026} ColdProof. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-ice/40">
              <a href="#privacy" className="hover:text-cyan">
                Privacy
              </a>
              <a href="#request-a-pilot" className="hover:text-cyan">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
