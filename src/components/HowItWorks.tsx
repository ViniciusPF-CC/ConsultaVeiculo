import { Search, CreditCard, FileText } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Digite a Placa',
      description: 'Insira a placa do veículo que você quer consultar',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Pague com Segurança',
      description: 'Efetue o pagamento de R$ 14,99 de forma 100% segura',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FileText,
      title: 'Receba o Laudo',
      description: 'Obtenha o relatório completo em menos de 30 segundos',
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const scrollToConsulta = () => {
    document.getElementById('consulta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Como Funciona? É Simples!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Em apenas 3 passos você tem acesso a todas as informações oficiais do veículo
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection 
              key={index} 
              animation="fadeInUp" 
              delay={index * 0.2}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                  <step.icon className="h-10 w-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.8} className="text-center mt-12">
          <button
            onClick={scrollToConsulta}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Começar Consulta Agora
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}