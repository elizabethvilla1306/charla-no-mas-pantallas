import { Award } from "lucide-react";

const AuthorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-white/20 overflow-hidden shadow-card">
                  <img
                    src="/elizabeth-villa.jpg"
                    alt="Elizabeth Villa"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-2 -right-2 bg-teal-dark rounded-full p-3 shadow-cta">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-teal-dark uppercase tracking-wide mb-2">
                Tu guía en esta charla
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Elizabeth Villa
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Psicóloga clínica – Especialista en salud mental infantil
              </p>
              <p className="text-foreground leading-relaxed text-lg">
                Con más de 9 años acompañando a niños y familias, he tenido el privilegio de ayudar a cientos de madres a volver a sentirse cerca de sus hijos y recuperar la calma en casa.
                Creo profundamente que ninguna mamá debería criar desde la culpa o la frustración. Estoy acá para caminar contigo, con empatía, claridad y herramientas reales que funcionan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
