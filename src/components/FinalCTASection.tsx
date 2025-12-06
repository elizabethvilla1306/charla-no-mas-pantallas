import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Clock } from "lucide-react";
import { RegistrationModal } from "@/components/RegistrationModal";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-teal-medium/30 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-soft/40 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-dark/10 px-4 py-2 rounded-full mb-8">
            <Heart className="w-5 h-5 text-teal-dark" />
            <span className="font-semibold text-teal-dark">El mejor momento es ahora</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance max-w-4xl mx-auto leading-tight">
            Tu hijo no necesita una lucha… <br className="hidden md:block" />
            <span className="text-teal-dark"> necesita un puente para volver contigo.</span>
            <br className="block mt-2" />
            Y juntas, vamos a construirlo.
          </h2>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <Clock className="w-5 h-5" />
            <p className="font-medium">
              Únete hoy. Los cupos son limitados.
            </p>
          </div>

          <RegistrationModal>
            <Button
              variant="ctaWhatsApp"
              size="xl"
              className="group !whitespace-normal !h-auto py-5 px-6 text-center leading-tight w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-3"
            >
              <MessageCircle className="group-hover:scale-110 transition-transform flex-shrink-0 size-6" />
              <span className="break-words max-w-[90%] block">Quiero entrar a la comunidad y empezar a reconectar</span>
            </Button>
          </RegistrationModal>

          <p className="text-sm text-muted-foreground mt-4">
            Es gratis, privado y sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
