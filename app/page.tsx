import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedSlider from "@/components/FeaturedSlider";
import ResultsSection from "@/components/ResultsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <AboutSection />
      <FeaturedSlider />
      <ResultsSection />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  );
}