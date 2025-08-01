
import { useEffect, useRef, useState } from 'react';
import { Home, Shield, Wrench, Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const NogueiraServices = () => {
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551985500738?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20esquadrias%20de%20alumínio%20e%20vidro.', '_blank');
  };

  const services = [
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: 'Esquadrias Sob Medida',
      description: 'Fabricação personalizada de portões, portas, janelas e sacadas em alumínio, desenvolvidas especialmente para seu projeto.',
      features: ['Portões residenciais', 'Portas e janelas', 'Sacadas e varandas', 'Guarda-corpos']
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Vidros Temperados',
      description: 'Instalação de vidros temperados de alta qualidade, incluindo box para banheiro e aplicações diversas.',
      features: ['Box para banheiro', 'Vidros de segurança', 'Fechamento de áreas', 'Divisórias de vidro']
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: 'Manutenção Especializada',
      description: 'Serviços de manutenção e reparo em esquadrias de alumínio e box de vidro temperado, garantindo durabilidade.',
      features: ['Reparo de esquadrias', 'Manutenção preventiva', 'Troca de componentes', 'Ajustes e regulagens']
    }
  ];

  return (
    <section ref={sectionRef} id="servicos" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="section-container">
        <div className={`text-center max-w-4xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Nossos Serviços
          </div>
          <h2 className="section-title">
            Soluções Completas em <span className="text-primary">Alumínio e Vidro</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Oferecemos uma ampla gama de serviços especializados em esquadrias de alumínio e vidro temperado, 
            sempre com foco na qualidade e satisfação do cliente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`card-hover border-border/50 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Services */}
        <div className={`bg-gradient-subtle rounded-2xl p-8 sm:p-12 text-center ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Produtos de Alta Qualidade
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Todos os nossos produtos são desenvolvidos com materiais de primeira qualidade, 
            seguindo rigorosos padrões de segurança e durabilidade.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {[
              'Alumínio Premium',
              'Vidro Temperado',
              'Ferragens de Qualidade',
              'Acabamento Perfeito'
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-subtle">
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-elevation hover:shadow-lg transition-all duration-300 group"
            aria-label="Solicitar orçamento personalizado via WhatsApp"
          >
            <Phone className="mr-2 h-5 w-5" />
            Solicite seu Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NogueiraServices;
