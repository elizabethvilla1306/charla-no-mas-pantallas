import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import AuthorSection from "@/components/AuthorSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyFooterCTA from "@/components/StickyFooterCTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Charla gratuita para madres | Reconecta con tu hijo - Elizabeth Villa</title>
        <meta 
          name="description" 
          content="Accede a una charla gratuita con estrategias profesionales para reconectar con tu hijo y reducir el uso de pantallas. Sin gritos, castigos ni culpas." 
        />
        <meta property="og:title" content="Charla gratuita para madres | Reconecta con tu hijo" />
        <meta property="og:description" content="Estrategias profesionales para reconectar con tu hijo y reducir el uso de pantallas." />
      </Helmet>
      
      <main className="overflow-hidden">
        <HeroSection />
        <BenefitsSection />
        <TestimonialSection />
        <AuthorSection />
        <OfferSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
        <StickyFooterCTA />
      </main>
    </>
  );
};

export default Index;
