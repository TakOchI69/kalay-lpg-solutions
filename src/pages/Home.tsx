import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesPreview } from "@/components/ServicesPreview";
import { CTASection } from "@/components/CTASection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <CTASection />
    </>
  );
};

export default Home;
