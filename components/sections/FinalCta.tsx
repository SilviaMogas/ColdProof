import Reveal from "../Reveal";
import ContactForm from "../ContactForm";

export default function FinalCta() {
  return (
    <section
      id="request-a-pilot"
      className="scroll-mt-20 bg-navy-900 py-20 sm:py-28"
    >
      {/* Ambient */}
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <Reveal>
            <p className="eyebrow">Request a pilot</p>
            <h2 className="mt-4 font-sora text-3xl font-bold leading-tight text-white sm:text-4xl">
              Make every cold-chain handover accountable.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ice/70">
              Explore how ColdProof could help your organisation verify shipment
              conditions, investigate incidents and build greater confidence
              across temperature-sensitive supply chains.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#request-a-pilot" className="btn-primary">
                Request a pilot
              </a>
              <a href="#live-demo" className="btn-ghost-dark">
                View the live demo
              </a>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[
                ["Every shipment", "Continuously monitored"],
                ["Every handover", "Verified custody"],
                ["Every condition", "On the record"],
              ].map(([h, s]) => (
                <div key={h}>
                  <dt className="font-sora text-sm font-semibold text-mint">
                    {h}
                  </dt>
                  <dd className="mt-1 text-xs text-ice/50">{s}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
