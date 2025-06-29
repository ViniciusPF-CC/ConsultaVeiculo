import { Check, X, Info } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function ComparisonSection() {
  const plans = [
    {
      name: 'Completa',
      price: 'R$ 39,99',
      originalPrice: 'R$ 54,99',
      popular: true,
      color: 'blue',
      description: 'Verificação completa e detalhada'
    },
    {
      name: 'Simples',
      price: 'R$ 24,99',
      originalPrice: 'R$ 44,99',
      popular: false,
      color: 'green',
      description: 'Informações essenciais'
    },
    {
      name: 'Básica',
      price: 'R$ 14,99',
      originalPrice: 'R$ 29,99',
      popular: false,
      color: 'gray',
      description: 'Dados fundamentais'
    }
  ]

  const features = [
    {
      name: 'Informações Cadastrais',
      completa: true,
      simples: true,
      basica: true
    },
    {
      name: 'Identificação Técnica',
      completa: true,
      simples: true,
      basica: true
    },
    {
      name: 'Ficha Técnica',
      completa: true,
      simples: true,
      basica: true
    },
    {
      name: 'Débitos (Multas, IPVA, Licenciamento...)',
      completa: true,
      simples: true,
      basica: false
    },
    {
      name: 'Passagem por Leilão',
      completa: true,
      simples: false,
      basica: false
    },
    {
      name: 'Roubo e Furto',
      completa: true,
      simples: false,
      basica: false
    },
    {
      name: 'Restrições Judiciais',
      completa: true,
      simples: false,
      basica: false
    },
    {
      name: 'Gravame',
      completa: true,
      simples: false,
      basica: false
    },
    {
      name: 'Restrições e Alienações',
      completa: true,
      simples: false,
      basica: false
    },
    {
      name: 'Aviso de Sinistros',
      completa: true,
      simples: false,
      basica: false
    },
    {
      name: 'Recall Pendentes',
      completa: true,
      simples: false,
      basica: false
    },
    {
      name: 'Aceitação em Seguradoras',
      completa: true,
      simples: false,
      basica: false
    },
    {
      name: 'Carro de Locadora/Frota',
      completa: true,
      simples: false,
      basica: false
    }
  ]

  const scrollToConsulta = () => {
    document.getElementById('consulta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const getColorClasses = (color: string, isPopular: boolean = false) => {
    const colors = {
      blue: isPopular 
        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
        : 'bg-blue-50 text-blue-700 border-blue-200',
      green: 'bg-green-50 text-green-700 border-green-200',
      gray: 'bg-gray-50 text-gray-700 border-gray-200'
    }
    return colors[color as keyof typeof colors] || colors.gray
  }

  const getCheckColor = (planIndex: number) => {
    const colors = ['text-blue-600', 'text-green-600', 'text-gray-600']
    return colors[planIndex] || 'text-gray-600'
  }

  const getButtonClasses = (plan: any) => {
    if (plan.popular) {
      return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
    }
    return 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Compare nossos planos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lista completa de recursos disponíveis em nossos planos de preços
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          {/* Mobile View - Clean Cards without icons */}
          <div className="block lg:hidden">
            {/* Mobile Plan Selector */}
            <div className="grid grid-cols-3 gap-2 mb-8 bg-gray-100 p-2 rounded-xl">
              {plans.map((plan) => (
                <div key={plan.name} className="relative">
                  <div className={`p-4 rounded-lg text-center transition-all duration-300 ${getColorClasses(plan.color, plan.popular)}`}>
                    <div className="font-bold text-sm mb-1">{plan.name}</div>
                    <div className="text-lg font-bold">{plan.price}</div>
                    <div className="text-xs opacity-75 line-through">{plan.originalPrice}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Feature Comparison */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900 text-center">Recursos Incluídos</h3>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {features.map((feature, index) => (
                    <div key={index} className="p-4">
                      <div className="font-medium text-gray-900 mb-3 text-sm text-center">
                        {feature.name}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {plans.map((plan, planIndex) => {
                          const hasFeature = feature[plan.name.toLowerCase() as keyof typeof feature] as boolean
                          return (
                            <div key={planIndex} className="text-center">
                              <div className="text-xs text-gray-600 mb-1">{plan.name}</div>
                              <div className={`text-sm font-semibold ${
                                hasFeature 
                                  ? planIndex === 0 ? 'text-blue-600' :
                                    planIndex === 1 ? 'text-green-600' : 'text-gray-600'
                                  : 'text-gray-400'
                              }`}>
                                {hasFeature ? 'Sim' : 'Não'}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                {plans.map((plan) => (
                  <button
                    key={plan.name}
                    onClick={scrollToConsulta}
                    className={`py-3 px-2 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 ${getButtonClasses(plan)}`}
                  >
                    Escolher {plan.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop View - Table without badges */}
          <AnimatedSection 
            animation="scaleIn" 
            delay={0.2}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left p-6 font-bold text-gray-900 w-1/4">
                        Tipo
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.name} className={`p-6 text-center w-1/4 ${getColorClasses(plan.color, plan.popular)}`}>
                          <div className="font-bold text-lg mb-1">{plan.name}</div>
                          <div className="text-2xl font-bold mb-1">{plan.price}</div>
                          {plan.originalPrice && (
                            <div className="text-sm opacity-75 line-through">{plan.originalPrice}</div>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {/* Features */}
                    {features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className={featureIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-700 w-1/4">
                          {feature.name}
                        </td>
                        {plans.map((plan, planIndex) => {
                          const hasFeature = feature[plan.name.toLowerCase() as keyof typeof feature] as boolean
                          return (
                            <td key={planIndex} className="p-4 text-center w-1/4">
                              {hasFeature ? (
                                <div className={`w-8 h-8 rounded-full bg-opacity-20 flex items-center justify-center mx-auto ${
                                  planIndex === 0 ? 'bg-blue-500' :
                                  planIndex === 1 ? 'bg-green-500' : 'bg-gray-500'
                                }`}>
                                  <Check className={`h-5 w-5 ${getCheckColor(planIndex)}`} />
                                </div>
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                                  <X className="h-5 w-5 text-gray-400" />
                                </div>
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    ))}

                    {/* Footer with buttons */}
                    <tr className="bg-gray-50 border-t border-gray-200">
                      <td className="p-6"></td>
                      {plans.map((plan) => (
                        <td key={plan.name} className="p-6 text-center">
                          <button
                            onClick={scrollToConsulta}
                            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                              plan.popular
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md'
                            }`}
                          >
                            <Info className="h-4 w-4" />
                            <span>Ver detalhes</span>
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Call to action */}
        <AnimatedSection animation="fadeInUp" delay={0.4} className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas sobre qual plano escolher?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa <strong>Consulta Completa</strong> oferece todas as verificações necessárias 
              para uma compra 100% segura. É a escolha mais popular entre nossos clientes.
            </p>
            <button
              onClick={scrollToConsulta}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Fazer consulta completa agora
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}