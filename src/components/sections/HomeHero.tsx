
import { motion } from 'framer-motion';
import { Shield, Home, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePerformance } from '@/hooks/usePerformance';
import { useVantaEffect } from '@/hooks/useVantaEffect';

const HomeHero = () => {
  const { reduceAnimations } = usePerformance();
  
  const { vantaRef, isLoaded } = useVantaEffect({
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x66f51b,
    backgroundColor: 0x90728,
    points: 4.00,
    maxDistance: 23.00,
    spacing: 18.00
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20automação%20e%20segurança%20residencial.', '_blank');
  };

  // Optimized animation variants
  const fadeInVariant = reduceAnimations ? {} : {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: 'easeOut' }
  };

  const MotionWrapper = reduceAnimations ? 'div' : motion.div;

  return (
    <section 
      ref={vantaRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#090728'
      }}
    >
      {/* Fallback background for when Vanta is loading */}
      {!isLoaded && !reduceAnimations && (
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #66f51b 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #61b3dc 0%, transparent 50%)`
          }}
        />
      )}
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
        <MotionWrapper
          {...(!reduceAnimations && fadeInVariant)}
          className="mb-4 sm:mb-6 lg:mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full border border-green-400/30 bg-green-400/10 mb-4 sm:mb-6">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
            <span className="text-green-400 text-xs sm:text-sm font-medium whitespace-nowrap">Automação & Segurança Residencial</span>
          </div>
        </MotionWrapper>

        <MotionWrapper
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight"
          {...(!reduceAnimations && { ...fadeInVariant, transition: { duration: 0.4, delay: 0.05, ease: 'easeOut' } })}
        >
          Sua Casa <span className="text-green-400">Inteligente</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          e <span className="text-blue-400">Segura</span>
        </MotionWrapper>

        <MotionWrapper
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed"
          {...(!reduceAnimations && { ...fadeInVariant, transition: { duration: 0.4, delay: 0.1, ease: 'easeOut' } })}
        >
          Transforme seu lar em um ambiente de <strong className="text-green-400">conforto</strong>, <strong className="text-blue-400">eficiência</strong> e <strong className="text-white">tranquilidade</strong> com nossas soluções personalizadas
        </MotionWrapper>

        <MotionWrapper
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-stretch sm:items-center mb-8 sm:mb-12 lg:mb-16"
          {...(!reduceAnimations && { ...fadeInVariant, transition: { duration: 0.4, delay: 0.15, ease: 'easeOut' } })}
        >
          <Button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 min-h-[3rem] sm:min-h-[3.5rem]"
          >
            <img src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" alt="WhatsApp" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span className="text-center">Solicite seu Orçamento Grátis</span>
          </Button>
          
          <Button
            variant="outline"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-semibold rounded-lg transition-all duration-300 min-h-[3rem] sm:min-h-[3.5rem]"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Nossos Serviços
          </Button>
        </MotionWrapper>

        <MotionWrapper
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto"
          {...(!reduceAnimations && { ...fadeInVariant, transition: { duration: 0.4, delay: 0.2, ease: 'easeOut' } })}
        >
          {[
            { icon: Home, title: 'Automação', desc: 'Controle total' },
            { icon: Shield, title: 'Segurança', desc: 'Proteção 24/7' },
            { icon: Zap, title: 'Eficiência', desc: 'Economia de energia' },
            { icon: () => <img src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" alt="WhatsApp" className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 mx-auto" />, title: 'Suporte', desc: 'Atendimento completo' }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center p-3 sm:p-4 lg:p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-green-400 mx-auto mb-2 sm:mb-3 flex-shrink-0" />
                <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
};

export default HomeHero;
