import { Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { RegistrationModal } from "@/components/RegistrationModal";

const includes = [
  "Ingreso a una charla en vivo con estrategias fáciles de aplicar.",
  "Recursos descargables exclusivos creados por profesionales.",
  "Comunidad privada y exclusiva para madres como contigo, con apoyo y acompañamiento profesional.",
  "Seguimiento para que no tengas que hacerlo sola.",
];

const OfferSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Gift className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">100% Gratuito</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tu acceso incluye
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
            <ul className="space-y-5 mb-10">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Price badge */}
            <div className="text-center p-6 bg-primary/10 rounded-2xl mb-8">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">🎁 100% gratuito – Cupos limitados</p>
              <p className="text-3xl font-bold text-primary">Gratis hoy</p>
            </div>

            {/* Guarantee */}
            <div className="text-center mb-8">
              <p className="text-lg text-foreground font-medium">
                En solo <span className="text-primary font-bold">45 minutos</span> vas a tener claridad, alivio y una hoja de ruta para empezar a recuperar a tu hijo...
                <br /> sin pelear, sin castigar y sin sentir culpa.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <RegistrationModal>
                <Button
                  variant="ctaWhatsApp"
                  size="xl"
                  className="w-full md:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Reservar mi lugar gratis
                </Button>
              </RegistrationModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
