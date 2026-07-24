import HeroDashboard from "../HeroDashboard";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 pt-[104px]"
    >
      {/* Subtle background grid + glow, no crypto imagery */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,rgba(0,184,217,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_20%,rgba(127,224,195,0.10),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(223,246,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(223,246,255,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(80% 60% at 50% 0%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="container-pad relative grid gap-12 pb-20 pt-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-28 lg:pt-14">
        <div className="max-w-xl">
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            Cold-chain assurance infrastructure
          </p>
          <h1 className="mt-5 font-sora text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            The product arrived.{" "}
            <span className="text-cyan">Can you prove it stayed safe?</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ice/75">
            ColdProof monitors temperature, opening events and custody changes
            throughout the journey, creating a verifiable record of whether a
            temperature-sensitive shipment remained within its required
            conditions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#live-demo" className="btn-primary">
              View the live demo
            </a>
            <a href="#request-a-pilot" className="btn-ghost-dark">
              Request a pilot
            </a>
          </div>
          <p className="mt-8 font-sora text-sm font-medium tracking-wide text-ice/50">
            Every shipment. Every handover.{" "}
            <span className="text-mint">Verifiable.</span>
          </p>
        </div>

        <div className="lg:pl-4">
          <HeroDashboard />
        </div>
      </div>

      {/* Curved transition into light sections */}
      <div className="relative">
        <svg
          className="block h-[40px] w-full text-softwhite sm:h-[64px]"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 64V24C240 4 480 44 720 44S1200 4 1440 24V64Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
