import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿La charla queda grabada?",
    answer: "No. La charla no queda grabada ni se comparte al público. Es un espacio íntimo, seguro y pensado para participar en vivo. Tendrás la oportunidad de hacerle preguntas directamente a la especialista y recibir orientación personalizada.",
  },
  {
    question: "¿Qué pasa si no puedo asistir en vivo?",
    answer: "Al ser un espacio privado y no grabado, te recomendamos asistir. Es una oportunidad única para recibir acompañamiento directo.",
  },
  {
    question: "¿Es seguro unirme al grupo?",
    answer: "Sí. No enviamos spam ni compartimos tus datos. Es una comunidad exclusiva para madres que buscan apoyo profesional.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[url('/bg-clouds.png')] bg-cover bg-center relative">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-teal-dark mb-4 drop-shadow-sm">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-foreground/80 font-medium">
              Resolvemos tus dudas antes de que des el paso
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/80 backdrop-blur-sm rounded-2xl px-6 border-2 border-primary/10 shadow-soft hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-teal-dark hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
