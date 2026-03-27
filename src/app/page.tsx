import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { Features } from "@/components/landing/Features";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Hardware } from "@/components/landing/Hardware";
import { Timeline } from "@/components/landing/Timeline";
import { Workflow } from "@/components/landing/Workflow";
import { TeamSection } from "@/components/landing/TeamSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ROICalculator } from "@/components/landing/ROICalculator";
import { Pricing } from "@/components/landing/Pricing";
import { Support } from "@/components/landing/Support";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Contact } from "@/components/landing/Contact";
import { SmoothScroll } from "@/components/landing/SmoothScroll";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="pt-16">
        <Hero />
        {/* <TrustedBy /> */}
        <Features />
        <WhyChooseUs />
        {/* <Hardware /> */}
        {/* <Timeline /> */}
        <Workflow />
        {/* <TeamSection /> */}
        {/* <HowItWorks /> */}
        {/* <ROICalculator /> */}
        <Pricing />
        <Support />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
