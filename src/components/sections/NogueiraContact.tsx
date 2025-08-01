
import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MessageCircle, Send, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";

const NogueiraContact = () => {
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
    window.open('https://wa.me/5551985500738?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20esquadrias%20de%20alumínio%20e%20vidro.', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/nogueira_esquadrias.vidros', '_blank');
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: 'WhatsApp',
      description: 'Resposta imediata pelo WhatsApp',
      details: '(51) 98550-0738',
      action: handleWhatsAppClick,
      buttonText: 'Conversar no WhatsApp',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      featured: true
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: 'Telefone',
      description: 'Ligue diretamente para nós',
      details: '(51) 98550-0738 / (51) 3022-5280',
      action: () => window.open('tel:+5551985500738'),
      buttonText: 'Ligar Agora',
      buttonColor: 'bg-primary hover:bg-primary/90',
      featured: false
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: 'Email',
      description: 'Envie sua mensagem por email',
      details: 'nogueiraesquadriasdealuminio@gmail.com',
      action: () => window.open('mailto:nogueiraesquadriasdealuminio@gmail.com'),
      buttonText: 'Enviar Email',
      buttonColor: 'bg-primary hover:bg-primary/90',
      featured: false
    },
    {
      icon: <Instagram className="h-8 w-8 text-pink-600" />,
      title: 'Instagram',
      description: 'Veja nossos trabalhos no Instagram',
      details: '@nogueira_esquadrias.vidros',
      action: handleInstagramClick,
      buttonText: 'Seguir no Instagram',
      buttonColor: 'bg-pink-600 hover:bg-pink-700',
      featured: false
    }
  ];

  return (
    <section ref={sectionRef} id="contato" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="section-container">
        <div className={`text-center max-w-4xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Entre em Contato
          </div>
          <h2 className="section-title">
            Fale <span className="text-primary">Conosco</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Estamos prontos para atender suas necessidades em esquadrias de alumínio e vidro. 
            Entre em contato através de qualquer um de nossos canais de atendimento.
          </p>
        </div>

        {/* Featured WhatsApp Section */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200 shadow-elevation max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Atendimento via WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                Converse conosco agora mesmo! Resposta rápida e atendimento personalizado.
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Iniciar Conversa no WhatsApp
              </Button>
              <p className="text-sm text-green-700 mt-4">
                📱 (51) 98550-0738 • Disponível durante horário comercial
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className={`card-hover border-border/50 ${method.featured ? 'ring-2 ring-green-200' : ''} ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    {method.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {method.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-foreground mb-4 min-h-[2.5rem] flex items-center justify-center">
                  {method.details}
                </p>
                <Button
                  onClick={method.action}
                  className={`w-full text-sm ${method.buttonColor} text-white rounded-lg transition-all duration-300`}
                  size="sm"
                >
                  {method.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Business Hours & Additional Info */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
          <Card className="border-border/50">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Horários de Atendimento
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Segunda à Sexta:</span>
                  <span className="font-medium text-foreground">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium text-foreground">8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-medium text-foreground">Fechado</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">WhatsApp disponível:</strong> Durante horário comercial 
                  com resposta rápida garantida!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Solicite seu Orçamento
              </h4>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Orçamento gratuito e sem compromisso</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Atendimento personalizado para seu projeto</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Visita técnica quando necessário</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Produtos sob medida com qualidade garantida</span>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Solicitar Orçamento
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NogueiraContact;
