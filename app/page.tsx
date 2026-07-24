import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import LiveDemo from "@/components/sections/LiveDemo";
import BusinessValue from "@/components/sections/BusinessValue";
import ProductInterface from "@/components/sections/ProductInterface";
import UseCases from "@/components/sections/UseCases";
import Technology from "@/components/sections/Technology";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <BusinessValue />
        <LiveDemo />
        <ProductInterface />
        <UseCases />
        <Technology />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
