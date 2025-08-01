
import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const NogueiraLocation = () => {
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

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Endereço',
      details: 'AV DA SERRARIA, 1151 - ESPÍRITO SANTO',
      subtitle: 'Porto Alegre - RS',
      action: 'https://maps.app.goo.gl/hLdibTTKfMA6TpZB9',
      actionText: 'Ver no Google Maps'
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Telefones',
      details: '(51) 98550-0738',
      subtitle: '(51) 3022-5280',
      action: 'tel:+5551985500738',
      actionText: 'Ligar Agora'
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      details: 'nogueiraesquadriasdealuminio@gmail.com',
      subtitle: 'Resposta rápida garantida',
      action: 'mailto:nogueiraesquadriasdealuminio@gmail.com',
      actionText: 'Enviar Email'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Atendimento',
      details: 'Segunda à Sexta: 8h às 18h',
      subtitle: 'Sábados: 8h às 12h',
      action: null,
      actionText: null
    }
  ];

  return (
    <section ref={sectionRef} id="localizacao" className="py-16 sm:py-20 md:py-24 bg-secondary/50">
      <div className="section-container">
        <div className={`text-center max-w-4xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Localização e Contato
          </div>
          <h2 className="section-title">
            Onde nos <span className="text-primary">Encontrar</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Estamos localizados em Porto Alegre - RS, atendendo toda a região Sul com qualidade e agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-hover border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground mb-1">
                          {item.details}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.subtitle}
                        </p>
                        {item.action && item.actionText && (
                          <a 
                            href={item.action}
                            target={item.action.startsWith('http') ? '_blank' : undefined}
                            rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="inline-block text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
                          >
                            {item.actionText}
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Área de Atendimento</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Atendemos todo o <strong className="text-foreground">Rio Grande do Sul</strong> e 
                <strong className="text-foreground"> Santa Catarina</strong>. 
                Entre em contato para verificar disponibilidade em sua região.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-elevation border border-border/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.8234567891234!2d-51.1234567!3d-30.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%20da%20Serraria%2C%201151%20-%20Esp%C3%ADrito%20Santo%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Nogueira Esquadrias - AV DA SERRARIA, 1151 - ESPÍRITO SANTO - PORTO ALEGRE - RS"
                  aria-label="Mapa mostrando a localização da Nogueira Esquadrias em Porto Alegre"
                ></iframe>
              </div>
              
              {/* Map overlay with company info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border/50">
                <h5 className="font-semibold text-foreground text-sm mb-1">
                  Nogueira Esquadrias
                </h5>
                <p className="text-xs text-muted-foreground">
                  AV DA SERRARIA, 1151 - ESPÍRITO SANTO<br/>
                  Porto Alegre - RS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NogueiraLocation;
