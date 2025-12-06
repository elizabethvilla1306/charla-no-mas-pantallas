import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { RegistrationModal } from "@/components/RegistrationModal";
import { useEffect, useState } from "react";

const StickyFooterCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approximately 100vh)
      const scrollY = window.scrollY;
      setIsVisible(scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-soft transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"
        }`}
    >
      <div className="container py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm md:text-base text-foreground font-medium text-center sm:text-left">
            <span className="hidden sm:inline">¿Lista para reconectar con tu hijo? </span>
            <span className="text-muted-foreground">Cupos limitados</span>
          </p>
          <RegistrationModal>
            <Button
              variant="ctaWhatsApp"
              size="default"
            >
              <MessageCircle className="w-4 h-4" />
              Únete gratis
            </Button>
          </RegistrationModal>
        </div>
      </div>
    </div>
  );
};

export default StickyFooterCTA;
