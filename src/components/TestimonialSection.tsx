import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Valentina",
    role: "Madre de familia",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
    content: "Sentía que había perdido a mi hijo por la pantalla… hoy volvimos a jugar y a hablar sin pelear.",
  },
  {
    name: "Natalia",
    role: "Madre de familia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    content: "Mi casa se siente más liviana. Mi hijo está más presente y yo mucho más tranquila.",
  },
  {
    name: "Carolina",
    role: "Madre de familia",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces",
    content: "Probé de todo, pero nada funcionaba hasta ahora. Las herramientas cambiaron todo.",
  },
  {
    name: "Andrea",
    role: "Madre de adolescente",
    image: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=150&h=150&fit=crop&crop=faces",
    content: "Me sentía muy sola en esto. Gracias a la comunidad y a Elizabeth, recuperé la confianza en mi rol como mamá.",
  },
  {
    name: "Sofía",
    role: "Madre de dos niños",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    content: "Increíble cómo pequeños cambios en mi comunicación hicieron una diferencia tan grande. ¡Super recomendada!",
  },
];

const TestimonialSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Historias reales de conexión
          </h2>
          <p className="text-lg text-muted-foreground">
            Madres que eligieron actuar… y hoy disfrutan una relación más tranquila y cercana con sus hijos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-20 relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full pt-4">
                    <Card className="h-full border-none shadow-card hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm hover:-translate-y-1">
                      <CardContent className="flex flex-col p-6 h-full">
                        <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />

                        <p className="text-foreground/80 leading-relaxed mb-6 flex-grow italic">
                          "{testimonial.content}"
                        </p>

                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                          <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback className="bg-primary/20 text-primary-dark font-bold">
                              {testimonial.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 hover:bg-primary hover:text-white" />
          </Carousel>
        </div>

        {/* Statistic */}
        <div className="bg-card/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-soft max-w-4xl mx-auto border border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20" />
              <Users className="w-10 h-10 text-primary" />
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-3xl md:text-5xl font-bold text-foreground mb-1">
                +1.000 mamás
              </p>
              <p className="text-muted-foreground text-lg">
                ya están transformando su relación con sus hijos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
