
import { useEffect, useRef, useState } from 'react';
import { Users, MapPin, Award, Wrench } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const NogueiraAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: '30 Anos de Experiência',
      description: 'Três décadas de dedicação e aperfeiçoamento em esquadrias de alumínio e vidro temperado, consolidando nossa expertise no mercado.'
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: 'Atuação Regional',
      description: 'Atendemos todo o Rio Grande do Sul e Santa Catarina, levando qualidade e profissionalismo até você.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Satisfação do Cliente',
      description: 'Nosso compromisso é com a satisfação total de nossos clientes, garantindo qualidade em cada projeto entregue.'
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: 'Qualidade e Segurança',
      description: 'Trabalhamos sempre com foco na qualidade, responsabilidade e segurança, garantindo resultados excepcionais.'
    }
  ];

  return (
    <section ref={sectionRef} id="sobre" className="py-16 sm:py-20 md:py-24 bg-secondary/50">
      <div className="section-container">
        <div className={`text-center max-w-4xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Sobre a Nogueira Esquadrias
          </div>
          <h2 className="section-title">
            Tradição e <span className="text-primary">Excelência</span> em Alumínio e Vidro
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Com 30 anos de experiência no mercado, a Nogueira Esquadrias se consolidou como referência 
            em esquadrias de alumínio e vidro temperado no Rio Grande do Sul e Santa Catarina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Company Story */}
          <div className={`${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
              Nossa História
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Há <strong className="text-foreground">30 anos</strong> atuando no mercado de trabalho com 
                <strong className="text-foreground"> esquadrias de alumínio e vidro temperado</strong>, 
                sempre buscando a satisfação dos clientes a cada serviço entregue.
              </p>
              <p>
                Nossa trajetória é marcada pelo compromisso com a <strong className="text-foreground">qualidade</strong>, 
                <strong className="text-foreground"> responsabilidade</strong> e 
                <strong className="text-foreground"> segurança</strong> em cada projeto realizado.
              </p>
              <p>
                Atendemos clientes em todo o <strong className="text-foreground">Rio Grande do Sul</strong> e 
                <strong className="text-foreground"> Santa Catarina</strong>, levando soluções personalizadas 
                para cada necessidade.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <blockquote className="text-lg italic text-foreground text-center font-display">
                "Sua casa merece o melhor em alumínio e vidro."
              </blockquote>
              <p className="text-center text-sm text-muted-foreground mt-2">
                - Filosofia Nogueira Esquadrias
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-subtle overflow-hidden shadow-elevation">
                <div 
                  className="w-full h-full bg-cover bg-center opacity-90 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                  }}
                  aria-label="Trabalhos em esquadrias de alumínio"
                ></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-elevation">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Anos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-responsive-2 lg:grid-cols-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`text-center card-hover border-border/50 transition-all duration-300 ${
                isVisible ? `animate-fade-in` : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NogueiraAbout;
