import { Brain, MessageSquare, Download, Target, GraduationCap, Users } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    text: "Herramientas claras, prácticas y basadas en psicología infantil para que puedas reconectar con tu hijo desde el amor y la calma.",
  },
  {
    icon: Target,
    text: "Estrategias simples para reducir el tiempo de pantallas sin gritos ni discusiones.",
  },
  {
    icon: MessageSquare,
    text: "Palabras exactas que podés usar cuando tu hijo te ignora, reacciona con enojo o se frustra.",
  },
  {
    icon: GraduationCap,
    text: "Una guía paso a paso para recuperar la conexión emocional en solo 10 minutos al día.",
  },
  {
    icon: Download,
    text: "Material descargable y ejercicios prácticos para aplicar desde el primer día.",
  },
  {
    icon: Users, // Need to make sure Users is imported or existing icon used
    text: "Charla 100% en vivo, participativa y con espacio para hacerle preguntas a la especialista.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que vas a recibir
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Herramientas prácticas diseñadas por profesionales para transformar tu relación familiar
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card gradient-card shadow-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-secondary" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
