
import { motion } from 'framer-motion';
import { Shield, Home, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePerformance } from '@/hooks/usePerformance';

const HomeHero = () => {
  const { reduceAnimations } = usePerformance();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20automação%20e%20segurança%20residencial.', '_blank');
  };

  // Simplified animation variants for better performance
  const fadeInVariant = reduceAnimations ? {} : {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const MotionWrapper = reduceAnimations ? 'div' : motion.div;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#163313',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='561' height='561' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%2305440C' stroke-width='7.3'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%232D5505'%3E%3Ccircle cx='769' cy='229' r='12'/%3E%3Ccircle cx='539' cy='269' r='12'/%3E%3Ccircle cx='603' cy='493' r='12'/%3E%3Ccircle cx='731' cy='737' r='12'/%3E%3Ccircle cx='520' cy='660' r='12'/%3E%3Ccircle cx='309' cy='538' r='12'/%3E%3Ccircle cx='295' cy='764' r='12'/%3E%3Ccircle cx='40' cy='599' r='12'/%3E%3Ccircle cx='102' cy='382' r='12'/%3E%3Ccircle cx='127' cy='80' r='12'/%3E%3Ccircle cx='370' cy='105' r='12'/%3E%3Ccircle cx='578' cy='42' r='12'/%3E%3Ccircle cx='237' cy='261' r='12'/%3E%3Ccircle cx='390' cy='382' r='12'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="relative z-10 section-container text-center">
        <MotionWrapper
          {...(!reduceAnimations && fadeInVariant)}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full border border-green-400/30 bg-green-400/10 mb-4 sm:mb-6">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
            <span className="text-green-400 text-xs sm:text-sm font-medium">Automação & Segurança Residencial</span>
          </div>
        </MotionWrapper>

        <MotionWrapper
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0"
          {...(!reduceAnimations && { ...fadeInVariant, transition: { duration: 0.4, delay: 0.05 } })}
        >
          Sua Casa <span className="text-green-400">Inteligente</span><br />
          e <span className="text-blue-400">Segura</span>
        </MotionWrapper>

        <MotionWrapper
          className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0"
          {...(!reduceAnimations && { ...fadeInVariant, transition: { duration: 0.4, delay: 0.1 } })}
        >
          Transforme seu lar em um ambiente de <strong>conforto</strong>, <strong>eficiência</strong> e <strong>tranquilidade</strong> com nossas soluções personalizadas
        </MotionWrapper>

        <MotionWrapper
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0"
          {...(!reduceAnimations && { ...fadeInVariant, transition: { duration: 0.4, delay: 0.15 } })}
        >
          <Button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <img src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" alt="WhatsApp" className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Solicite seu Orçamento Grátis</span>
          </Button>
          
          <Button
            variant="outline"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Nossos Serviços
          </Button>
        </MotionWrapper>

        <MotionWrapper
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto px-4 sm:px-0"
          {...(!reduceAnimations && { ...fadeInVariant, transition: { duration: 0.4, delay: 0.2 } })}
        >
          {[
            { icon: Home, title: 'Automação', desc: 'Controle total' },
            { icon: Shield, title: 'Segurança', desc: 'Proteção 24/7' },
            { icon: Zap, title: 'Eficiência', desc: 'Economia de energia' },
            { icon: () => <img src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" alt="WhatsApp" className="h-6 w-6 sm:h-8 sm:w-8 mx-auto" />, title: 'Suporte', desc: 'Atendimento completo' }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm sm:text-base">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm">{item.desc}</p>
              </div>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
};

export default HomeHero;
