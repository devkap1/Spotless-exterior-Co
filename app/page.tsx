import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import VideoScrollSection from "@/components/sections/VideoScrollSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import StatsSection from "@/components/sections/StatsSection";
import MapSection from "@/components/sections/MapSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <VideoScrollSection />
      <BeforeAfterSection />
      <ServicesSection />
      <ReviewsSection />
      <StatsSection />
      <MapSection />
      <CTASection />
      <Footer />
    </main>
  );
}
