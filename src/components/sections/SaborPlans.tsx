
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const SaborPlans = () => {
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

  const plans = [
    {
      name: 'Básico',
      price: 'R$ 50',
      description: 'Perfeito para ocasiões simples',
      features: [
        '1 bolo pequeno (15cm)',
        '12 docinhos variados',
        'Embalagem simples',
        'Entrega local'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: 'R$ 120',
      description: 'Ideal para comemorações especiais',
      features: [
        '1 bolo médio (20cm)',
        '30 docinhos gourmet',
        '6 pães de mel',
        'Embalagem personalizada',
        'Entrega grátis',
        'Cartão personalizado'
      ],
      popular: true
    },
    {
      name: 'Deluxe',
      price: 'R$ 200',
      description: 'Para eventos inesquecíveis',
      features: [
        '1 bolo grande (25cm)',
        '50 docinhos variados',
        '12 pães de mel',
        'Mini bolos (6 unidades)',
        'Decoração temática',
        'Entrega e montagem',
        'Atendimento personalizado'
      ],
      popular: false
    }
  ];

  return (
    <section ref={sectionRef} id="planos" className="py-16 lg:py-24 bg-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center">Nossos Planos</h2>
          <p className="section-subtitle text-center mx-auto">
            Escolha o plano perfeito para sua ocasião especial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-xl p-8 border-2 transition-all duration-300 card-hover ${
                plan.popular 
                  ? 'border-pink-400 shadow-xl scale-105' 
                  : 'border-gray-200 shadow-lg hover:border-pink-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-pink-500 mb-2">{plan.price}</div>
                <p className="text-gray-500">por pedido</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={`https://wa.me/5511991455137?text=Olá!%20Gostaria%20de%20contratar%20o%20plano%20${plan.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-400 to-blue-400 text-white hover:from-pink-500 hover:to-blue-500'
                    : 'bg-gray-100 text-gray-800 hover:bg-pink-100 hover:text-pink-600'
                }`}
              >
                Escolher Plano
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaborPlans;
