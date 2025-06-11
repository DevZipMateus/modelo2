
import { motion } from 'framer-motion';
import { MessageCircle, Shield, Home, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeHero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20automação%20e%20segurança%20residencial.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-400/10 mb-6">
            <Shield className="h-4 w-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Automação & Segurança Residencial</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Sua Casa <span className="text-green-400">Inteligente</span><br />
          e <span className="text-blue-400">Segura</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transforme seu lar em um ambiente de <strong>conforto</strong>, <strong>eficiência</strong> e <strong>tranquilidade</strong> com nossas soluções personalizadas
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Solicite seu Orçamento Grátis</span>
          </Button>
          
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Nossos Serviços
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: Home, title: 'Automação', desc: 'Controle total' },
            { icon: Shield, title: 'Segurança', desc: 'Proteção 24/7' },
            { icon: Zap, title: 'Eficiência', desc: 'Economia de energia' },
            { icon: MessageCircle, title: 'Suporte', desc: 'Atendimento completo' }
          ].map((item, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <item.icon className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
        <p className="text-sm mt-2">Role para descobrir</p>
      </motion.div>
    </section>
  );
};

export default HomeHero;
