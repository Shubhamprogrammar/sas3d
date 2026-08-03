import { AboutSection } from "@/components/sections/about-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { PricingCards } from "@/components/sections/pricing-cards";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStack } from "@/components/sections/tech-stack";
import { TeamGrid } from "@/components/sections/team-grid";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <AboutSection />
      <ServicesSection />
      <PortfolioGrid limit={3} />
      <ProcessSteps />
      <TechStack />
      <Testimonials />
      <TeamGrid limit={3} />
      <PricingCards />
      <Faq />
      <CtaSection />
    </>
  );
}
