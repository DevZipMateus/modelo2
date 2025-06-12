
import { motion } from 'framer-motion';
import { Shield, Home, Zap, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeHero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20automação%20e%20segurança%20residencial.', '_blank');
  };

  const WhatsAppIcon = () => (
    <img 
      src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" 
      alt="WhatsApp" 
      className="h-6 w-6 sm:h-8 sm:w-8 mx-auto" 
    />
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-black">
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full border border-green-400/30 bg-green-400/10 mb-4 sm:mb-6">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
            <span className="text-green-400 text-xs sm:text-sm font-medium">Automação & Segurança Residencial</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Sua Casa <span className="text-green-400">Inteligente</span><br />
          e <span className="text-blue-400">Segura</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transforme seu lar em um ambiente de <strong>conforto</strong>, <strong>eficiência</strong> e <strong>tranquilidade</strong> com nossas soluções personalizadas
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: Home, title: 'Automação', desc: 'Controle total' },
            { icon: Shield, title: 'Segurança', desc: 'Proteção 24/7' },
            { icon: Zap, title: 'Eficiência', desc: 'Economia de energia' },
            { icon: WhatsAppIcon, title: 'Suporte', desc: 'Atendimento completo' }
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
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
