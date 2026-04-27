import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import ServicesDetailPage from "@/components/sections/ServicesDetailPage";

export const metadata = {
  title: "Our Services | Spotless Exterior Co.",
  description:
    "Professional window cleaning, pressure washing, and gutter cleaning in Westchester, NY. Pure water systems, soft wash, and full debris removal.",
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesDetailPage />
      <CTASection />
      <Footer />
    </main>
  );
}
