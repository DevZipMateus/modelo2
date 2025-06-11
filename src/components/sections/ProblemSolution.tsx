
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Shield, Zap, Smartphone, Eye } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Sua casa é realmente segura?',
      description: 'Invasões, roubos e falta de monitoramento constante'
    },
    {
      icon: Zap,
      title: 'Tempo é dinheiro, sua casa trabalha para você?',
      description: 'Desperdício de energia e falta de automação'
    },
    {
      icon: Eye,
      title: 'Preocupado com quem entra e sai?',
      description: 'Falta de controle de acesso e monitoramento'
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Monitoramento 24/7, alarmes inteligentes e câmeras de alta definição'
    },
    {
      icon: Smartphone,
      title: 'Controle Total',
      description: 'Automação completa controlada pelo seu smartphone, de qualquer lugar'
    },
    {
      icon: CheckCircle,
      title: 'Tranquilidade',
      description: 'Sistema integrado que protege sua família e otimiza seu lar'
    }
  ];

  return (
    <section className="relative py-20 bg-slate-900/50 backdrop-blur-sm">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Problemas que <span className="text-red-400">Preocupam</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Você já se perguntou sobre esses desafios em sua casa?
          </p>
        </motion.div>

        {/* Problems */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-red-500/10 border border-red-500/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <problem.icon className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-slate-400">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-green-400">Soluções</span> que Transformam
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Acabamos com suas preocupações com tecnologia de ponta
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <solution.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
              <p className="text-slate-400">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
