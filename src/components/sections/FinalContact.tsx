import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePerformance } from '@/hooks/usePerformance';
const FinalContact = () => {
  const {
    reduceAnimations
  } = usePerformance();
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Estou%20pronto%20para%20transformar%20minha%20casa%20com%20automação%20e%20segurança.%20Gostaria%20de%20agendar%20uma%20visita!', '_blank');
  };
  const MotionWrapper = reduceAnimations ? 'div' : motion.div;
  const fadeInVariant = reduceAnimations ? {} : {
    initial: {
      opacity: 0,
      y: 20
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5
    },
    viewport: {
      once: true,
      margin: '-50px'
    }
  };
  return <section className="relative py-20 bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm">
      <div className="section-container">
        <MotionWrapper className="text-center mb-16" {...!reduceAnimations && fadeInVariant}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pronto para <span className="text-green-400">Transformar</span><br />
            Sua Casa?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Não perca mais tempo! Transforme sua casa em um lar inteligente e seguro hoje mesmo.
          </p>
          
          <MotionWrapper className="inline-block" {...!reduceAnimations && {
          whileHover: {
            scale: 1.02
          },
          whileTap: {
            scale: 0.98
          }
        }}>
            <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white py-8 text-2xl font-bold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 px-0">
              <img src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" alt="WhatsApp" className="h-8 w-8 mr-4" />
              Fale Conosco Via WhatsApp!
            </Button>
          </MotionWrapper>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[{
          icon: Phone,
          title: 'Telefone',
          info: '(21) 99999-9999'
        }, {
          icon: Mail,
          title: 'Email',
          info: 'contato@smartsecure.com'
        }, {
          icon: MapPin,
          title: 'Localização',
          info: 'Rio de Janeiro - RJ'
        }, {
          icon: Clock,
          title: 'Atendimento',
          info: '24h - Todos os dias'
        }].map((item, index) => <MotionWrapper key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" {...!reduceAnimations && {
          ...fadeInVariant,
          transition: {
            duration: 0.5,
            delay: 0.1 + index * 0.1
          }
        }}>
              <item.icon className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.info}</p>
            </MotionWrapper>)}
        </div>
      </div>
    </section>;
};
export default FinalContact;