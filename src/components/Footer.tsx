import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-14 h-14">
                <img 
                  src="/ChatGPT Image 29 de jun. de 2025, 10_48_04.png" 
                  alt="ConsultaVeículo Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Consulta<span className="text-blue-400">Veículo</span>
                </h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Protegendo brasileiros na compra de veículos desde 2020. 
              Informações oficiais, seguras e instantâneas.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Exemplos de Laudo</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Afiliados</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">LGPD</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>suporte@consultaveiculo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>(11) 3000-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 ConsultaVeículo.com - Todos os direitos reservados
            </div>
            <div className="text-sm text-gray-400">
              CNPJ: 12.345.678/0001-90 | Desenvolvido com ❤️ no Brasil
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}