
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

const NogueiraFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Nogueira Esquadrias</h3>
                <p className="text-slate-300 text-sm">Alumínio & Vidros</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              30 anos de experiência em esquadrias de alumínio e vidro temperado, 
              oferecendo qualidade, responsabilidade e segurança.
            </p>
            <div className="italic text-primary text-sm font-medium">
              "Sua casa merece o melhor em alumínio e vidro."
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Esquadrias sob medida</li>
              <li>Portões de alumínio</li>
              <li>Portas e janelas</li>
              <li>Vidros temperados</li>
              <li>Box para banheiro</li>
              <li>Manutenção especializada</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-slate-300">
                  <a href="tel:+5551985500738" className="hover:text-white transition-colors">
                    (51) 98550-0738
                  </a><br/>
                  <a href="tel:+55513022528" className="hover:text-white transition-colors">
                    (51) 3022-5280
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="mailto:nogueiraesquadriasdealuminio@gmail.com"
                  className="text-sm text-slate-300 hover:text-white transition-colors break-all"
                >
                  nogueiraesquadriasdealuminio@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Instagram className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/nogueira_esquadrias.vidros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  @nogueira_esquadrias.vidros
                </a>
              </div>
            </div>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Localização</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-slate-300">
                  <p>AV DA SERRARIA, 1151</p>
                  <p>ESPÍRITO SANTO</p>
                  <p>Porto Alegre - RS</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-slate-300">
                  <p>Segunda à Sexta: 8h às 18h</p>
                  <p>Sábados: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Area */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">Área de Atendimento</h4>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Atendemos todo o <span className="text-white font-medium">Rio Grande do Sul</span> e 
              <span className="text-white font-medium"> Santa Catarina</span> com equipe especializada 
              e produtos de alta qualidade.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} Nogueira Esquadrias em Alumínio & Vidros. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <span>Desenvolvido com qualidade</span>
              <span>|</span>
              <span>30 anos de experiência</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NogueiraFooter;
