import { Shield, CheckCircle, AlertTriangle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function HeroSection() {
  const scrollToConsulta = () => {
    document.getElementById('consulta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatedSection animation="fadeInLeft" className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>100% Oficial e Confiável</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Descubra a <span className="text-blue-600">Verdade</span> sobre Qualquer Veículo
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Evite fraudes e tome decisões seguras com nosso laudo oficial completo. 
                Informações direto dos órgãos competentes em segundos.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={0.2} className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Dados 100% Oficiais</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Sem Mensalidade</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Resultado Instantâneo</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={0.4} className="space-y-4">
              <button
                onClick={scrollToConsulta}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Consultar a partir de R$ 14,99
              </button>
              
              <p className="text-sm text-gray-500 flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>Pagamento 100% seguro • Garantia de reembolso</span>
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeInRight" delay={0.3} className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-lg">Laudo Veicular Completo</h3>
                <p className="text-blue-100">ABC-1234 • Toyota Corolla 2020</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Situação do Documento:</span>
                  <span className="text-green-600 font-semibold flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Regular
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-t">
                  <span className="text-gray-600">Restrições:</span>
                  <span className="text-green-600 font-semibold">Nenhuma</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t">
                  <span className="text-gray-600">Débitos:</span>
                  <span className="text-green-600 font-semibold">R$ 0,00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t">
                  <span className="text-gray-600">Recalls:</span>
                  <span className="text-yellow-600 font-semibold flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    2 Pendentes
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}