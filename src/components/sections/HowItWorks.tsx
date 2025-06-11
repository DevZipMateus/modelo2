
import { motion } from 'framer-motion';
import { MessageCircle, Search, Wrench, Headphones } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Contato e Avaliação',
      description: 'Entre em contato via WhatsApp e agendamos uma visita técnica gratuita para avaliar suas necessidades.'
    },
    {
      icon: Search,
      number: '02',
      title: 'Projeto Personalizado',
      description: 'Desenvolvemos um projeto sob medida com as melhores soluções para sua casa e seu orçamento.'
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Instalação e Configuração',
      description: 'Nossa equipe especializada realiza a instalação com total cuidado e configura tudo para você.'
    },
    {
      icon: Headphones,
      number: '04',
      title: 'Suporte Contínuo',
      description: 'Oferecemos treinamento completo e suporte técnico 24/7 para garantir seu total conforto.'
    }
  ];

  return (
    <section className="relative py-20 bg-slate-900/30 backdrop-blur-sm">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como <span className="text-green-400">Funciona</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Um processo simples e transparente para transformar sua casa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-black">{step.number}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
