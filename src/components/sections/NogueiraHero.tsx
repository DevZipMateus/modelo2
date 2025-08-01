
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NogueiraHero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551985500738?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20esquadrias%20de%20alumínio%20e%20vidro.', '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 section-container">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Nogueira
              <span className="block text-accent">Esquadrias</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 text-blue-100">
              em Alumínio & Vidros
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-200 font-display italic">
              "Sua casa merece o melhor em alumínio e vidro."
            </p>
          </div>

          {/* Features */}
          <div className="animate-slide-in grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <Award className="h-8 w-8 mb-3 text-accent" aria-hidden="true" />
              <h3 className="font-semibold mb-1">30 Anos</h3>
              <p className="text-sm text-blue-200">de Experiência</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <Shield className="h-8 w-8 mb-3 text-accent" aria-hidden="true" />
              <h3 className="font-semibold mb-1">Qualidade</h3>
              <p className="text-sm text-blue-200">Garantida</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <Clock className="h-8 w-8 mb-3 text-accent" aria-hidden="true" />
              <h3 className="font-semibold mb-1">Atendimento</h3>
              <p className="text-sm text-blue-200">RS e SC</p>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in mb-12">
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Especialistas em <strong>esquadrias de alumínio</strong> e <strong>vidro temperado</strong>. 
              Fabricamos sob medida: portões, janelas, box para banheiro e muito mais, 
              sempre com <strong>qualidade, responsabilidade e segurança</strong>.
            </p>
          </div>

          {/* Call to Action */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-elevation hover:shadow-lg transition-all duration-300 group"
              aria-label="Solicitar orçamento via WhatsApp"
            >
              Solicite seu Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              aria-label="Ver nossos serviços"
            >
              Nossos Serviços
            </Button>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-blue-200">
              <a 
                href="tel:+5551985500738"
                className="hover:text-white transition-colors"
                aria-label="Ligar para (51) 98550-0738"
              >
                📞 (51) 98550-0738
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <a 
                href="tel:+55513022528"
                className="hover:text-white transition-colors"
                aria-label="Ligar para (51) 3022-5280"
              >
                📞 (51) 3022-5280
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <span>📍 Porto Alegre - RS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NogueiraHero;
