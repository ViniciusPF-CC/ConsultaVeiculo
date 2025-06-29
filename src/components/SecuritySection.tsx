import { Shield, Lock, RefreshCw, Award } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function SecuritySection() {
  const securities = [
    {
      icon: Shield,
      title: 'Conformidade LGPD',
      description: 'Seus dados são protegidos conforme a Lei Geral de Proteção de Dados',
      color: 'text-green-600'
    },
    {
      icon: Lock,
      title: 'Pagamento Seguro',
      description: 'Transações criptografadas com certificado SSL de 256 bits',
      color: 'text-blue-600'
    },
    {
      icon: RefreshCw,
      title: 'Garantia de Reembolso',
      description: 'Se não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      title: 'Dados Oficiais',
      description: 'Informações extraídas diretamente dos órgãos governamentais competentes',
      color: 'text-orange-600'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sua Segurança é Nossa Prioridade
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Garantimos total proteção dos seus dados e transparência em todo o processo
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {securities.map((security, index) => (
            <AnimatedSection 
              key={index} 
              animation="scaleIn" 
              delay={index * 0.1}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <security.icon className={`h-8 w-8 ${security.color}`} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {security.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {security.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.6} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Garantia de Satisfação Total
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Estamos tão confiantes na qualidade do nosso serviço que oferecemos 
              <strong> garantia de reembolso integral</strong> caso você não fique 
              completamente satisfeito com o resultado da sua consulta.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Reembolso em até 7 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Sem burocracia</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% do valor devolvido</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}