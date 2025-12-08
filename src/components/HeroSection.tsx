import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { RegistrationModal } from "@/components/RegistrationModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[url('/bg-clouds.png')] bg-cover bg-center">
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />

      {/* Gold decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-gold-light/20 rounded-full blur-2xl" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-rose/30 rounded-full blur-2xl" />

      {/* Subtle gold veins */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold-light to-transparent" />
      </div>

      <div className="container relative z-10 py-8 md:py-16">
        <div className="flex justify-center mb-8 md:mb-12">
          <img
            src="/logo.jpg"
            alt="Logo Elizabeth Villa"
            className="h-20 w-auto md:h-24 object-contain drop-shadow-lg animate-fade-in"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up opacity-0 inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-5 py-2.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gold-dark">Charla gratuita · Cupos limitados</span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up opacity-0 delay-100 font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight md:leading-[1.1] mb-6 max-w-6xl mx-auto px-4 md:px-0">
            ¿Sientes que tu hijo vive <br className="hidden md:block" />
            <span className="text-primary font-bold"> atrapado en la pantalla?</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up opacity-0 delay-200 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 text-balance font-body px-4 md:px-0">
            No es tu culpa… y sí existe una forma real de volver a conectarlo contigo. <br className="hidden md:block" />
            Accede a una charla gratuita, donde aprenderás estrategias profesionales para acompañar a tu hijo y recuperar la armonía en casa
            <strong className="text-foreground"> sin gritos, sin peleas y sin castigos.</strong>
          </p>

          {/* Video */}
          <div className="animate-fade-up opacity-0 delay-300 relative max-w-2xl mx-auto mb-10">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-gold/20">
              {/* Gold frame effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-gold/30 pointer-events-none z-10" />
              <video
                className="w-full aspect-video object-cover"
                controls
                poster="/video-poster.jpg"
                preload="metadata"
              >
                <source
                  src="https://storage.googleapis.com/msgsndr/TG9L6GT8ksI0UocZah3n/media/6930c4f37bbd8d48351665aa.mp4"
                  type="video/mp4"
                />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <p className="text-sm text-muted-foreground mt-4 font-body">
              Mira el mensaje de Elizabeth Villa, psicóloga clínica
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up opacity-0 delay-400">
            <RegistrationModal>
              <Button
                variant="ctaWhatsApp"
                size="xl"
                className="group animate-bounce !whitespace-normal !h-auto py-5 px-6 text-center leading-tight w-full md:w-auto inline-flex flex-col md:flex-row items-center justify-center gap-3"
              >
                <MessageCircle className="group-hover:scale-110 transition-transform flex-shrink-0 size-6" />
                <span className="break-words max-w-[90%] block">Quiero unirme al grupo de WhatsApp</span>
              </Button>
            </RegistrationModal>
            <p className="text-sm text-muted-foreground mt-3 font-body">
              Más de 1.000 mamás ya están transformando su relación con sus hijos.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave with gold tint */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;