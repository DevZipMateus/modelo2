import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalContact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Estou%20pronto%20para%20transformar%20minha%20casa%20com%20automação%20e%20segurança.%20Gostaria%20de%20agendar%20uma%20visita!', '_blank');
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pronto para <span className="text-green-400">Transformar</span><br />
            Sua Casa?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Não perca mais tempo! Transforme sua casa em um lar inteligente e seguro hoje mesmo.
          </p>
          
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-8 text-2xl font-bold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
            >
              <img src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" alt="WhatsApp" className="h-8 w-8 mr-4" />
              Fale Conosco Via WhatsApp!
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <motion.div
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Telefone</h3>
            <p className="text-slate-400">(21) 99999-9999</p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Mail className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-slate-400">contato@smartsecure.com</p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <MapPin className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Localização</h3>
            <p className="text-slate-400">Rio de Janeiro - RJ</p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Clock className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Atendimento</h3>
            <p className="text-slate-400">24h - Todos os dias</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalContact;
