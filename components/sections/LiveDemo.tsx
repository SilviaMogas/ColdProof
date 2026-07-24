import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import ShipmentComparison from "../ShipmentComparison";

export default function LiveDemo() {
  return (
    <section id="live-demo" className="scroll-mt-20 bg-softwhite py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Live demo"
          title="One compliant shipment. One at risk."
          intro={
            <p>
              The same product, the same route, two different outcomes. ColdProof
              makes the difference visible — and actionable — with sample data.
            </p>
          }
        />

        <Reveal className="mt-12">
          <ShipmentComparison />
        </Reveal>
      </div>
    </section>
  );
}
