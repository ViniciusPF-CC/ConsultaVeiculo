import { Check, X, Star, FileText, Package } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

export default function PricingSection() {
  const [consultationType, setConsultationType] = useState<'single' | 'package'>('single')

  const singlePlans = [
    {
      id: 'basica',
      name: 'Básica',
      originalPrice: 29.99,
      price: 14.99,
      popular: false,
      features: [
        'Informações Cadastrais',
        'Identificação Técnica'
      ],
      notIncluded: [
        'Passagem por Leilão',
        'Débitos',
        'Restrições Judiciais',
        'Roubo e Furto',
        'Gravame',
        'Recalls Pendentes',
        'Restrições e Alienações',
        'Indício de Sinistros',
        'Carro de Locadora/Frota',
        'Aceitação em Seguradoras'
      ]
    },
    {
      id: 'simples',
      name: 'Simples',
      originalPrice: 44.99,
      price: 24.99,
      popular: false,
      features: [
        'Informações Cadastrais',
        'Identificação Técnica',
        'Débitos'
      ],
      notIncluded: [
        'Passagem por Leilão',
        'Restrições Judiciais',
        'Roubo e Furto',
        'Gravame',
        'Recalls Pendentes',
        'Restrições e Alienações',
        'Indício de Sinistros',
        'Carro de Locadora/Frota',
        'Aceitação em Seguradoras'
      ]
    },
    {
      id: 'completa',
      name: 'Completa',
      originalPrice: 54.99,
      price: 39.99,
      popular: true,
      features: [
        'Informações Cadastrais',
        'Identificação Técnica',
        'Passagem por Leilão',
        'Débitos',
        'Restrições Judiciais',
        'Roubo e Furto',
        'Gravame',
        'Restrições e Alienações',
        'Indício de Sinistros',
        'Recalls Pendentes',
        'Carro de Locadora/Frota',
        'Aceitação em Seguradoras'
      ],
      notIncluded: []
    }
  ]

  const packagePlans = [
    {
      id: 'pack-3',
      name: '3 consultas',
      originalPrice: 136.5,
      price: 99.99,
      popular: false,
      savings: 19.99,
      features: [
        '3 Consultas Completas',
        'Sem validade',
        'Economia garantida',
        'Histórico de consultas',
        'Relatórios em PDF',
        'Notificações por email'
      ]
    },
    {
      id: 'pack-5',
      name: '5 consultas',
      originalPrice: 199.99,
      price: 159.99,
      popular: true,
      savings: 39.99,
      features: [
        '5 Consultas Completas',
        'Sem validade',
        'Economia garantida',
        'Histórico de consultas',
        'Relatórios em PDF',
        'Alertas por email',
        'Dashboard personalizado',
        'Consultoria especializada'
      ]
    },
    {
      id: 'pack-10',
      name: '10 consultas',
      originalPrice: 360,
      price: 299.99,
      popular: false,
      savings: 100.00,
      features: [
        '10 Consultas Completas',
        'Sem validade',
        'Economia garantida',
        'Histórico de consultas',
        'Relatórios em PDF',
        'API de integração',
        'Gerente de conta',
        'Treinamento personalizado'
      ]
    }
  ]

  const handleSelectPlan = (planId: string) => {
    // Scroll to form
    document.getElementById('consulta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleConsultationTypeChange = (type: 'single' | 'package') => {
    setConsultationType(type)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Selecione a melhor consulta para você:
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Escolha o tipo de consulta que melhor atende suas necessidades
          </p>

          {/* Toggle between single and package - Ajustado para mobile */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-lg w-full max-w-md">
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={() => handleConsultationTypeChange('single')}
                  className={`flex items-center justify-center space-x-1 px-2 py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${
                    consultationType === 'single'
                      ? 'bg-blue-600 text-white shadow-md transform scale-105'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="font-medium">Consulta Avulsa</span>
                </button>
                <button
                  onClick={() => handleConsultationTypeChange('package')}
                  className={`flex items-center justify-center space-x-1 px-2 py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${
                    consultationType === 'package'
                      ? 'bg-blue-600 text-white shadow-md transform scale-105'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Package className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="font-medium">Pacote de Consultas</span>
                </button>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm transition-all duration-300">
            {consultationType === 'single' 
              ? 'Verificação pontual para um único veículo'
              : 'Economize com múltiplas consultas'
            }
          </p>
        </AnimatedSection>

        {/* Content with smooth transition */}
        <div className="transition-all duration-500 ease-in-out">
          {consultationType === 'single' ? (
            <div className="max-w-6xl mx-auto">
              {/* Todos os 3 planos em uma linha - responsivo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {singlePlans.map((plan, index) => (
                  <AnimatedSection 
                    key={plan.id} 
                    animation="fadeInUp" 
                    delay={index * 0.1}
                    className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                      plan.popular ? 'ring-2 ring-blue-500 md:scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
                          <Star className="h-3 w-3 fill-current" />
                          <span>Mais Popular</span>
                        </div>
                      </div>
                    )}

                    <div className={`p-6 text-center ${plan.popular ? 'pt-8' : ''}`}>
                      <div className="mb-6">
                        <h3 className={`font-bold text-gray-900 mb-2 ${plan.popular ? 'text-2xl' : 'text-xl'}`}>
                          Consulta {plan.name}
                        </h3>
                        <div className="mb-2">
                          <span className="text-sm text-gray-500 line-through">
                            De R$ {plan.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                          <span className="text-sm text-gray-600 ml-1">por</span>
                        </div>
                        <div className={`font-bold text-gray-900 ${plan.popular ? 'text-4xl text-blue-600' : 'text-3xl'}`}>
                          R$ {plan.price.toFixed(2).replace('.', ',')}
                        </div>
                        {plan.popular && (
                          <p className="text-gray-600 text-sm mt-2">
                            Verificação completa e detalhada
                          </p>
                        )}
                      </div>

                      <div className="space-y-3 mb-6 text-left">
                        {/* Features incluídas */}
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className={`flex-shrink-0 rounded-full flex items-center justify-center ${
                              plan.popular ? 'w-6 h-6 bg-blue-100' : 'w-5 h-5 bg-blue-100'
                            }`}>
                              <Check className={`text-blue-600 ${plan.popular ? 'h-4 w-4' : 'h-3 w-3'}`} />
                            </div>
                            <span className={`text-gray-700 ${plan.popular ? 'text-base' : 'text-sm'}`}>
                              {feature}
                            </span>
                          </div>
                        ))}

                        {/* Features não incluídas - mostrar TODAS */}
                        {plan.notIncluded.length > 0 && (
                          <>
                            <div className="pt-3 pb-1">
                              <p className="text-gray-600 font-medium text-xs">Itens não incluídos:</p>
                            </div>
                            
                            {plan.notIncluded.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                                  <X className="h-3 w-3 text-red-600" />
                                </div>
                                <span className="text-gray-500 text-sm">{feature}</span>
                              </div>
                            ))}
                          </>
                        )}
                      </div>

                      <button
                        onClick={() => handleSelectPlan(plan.id)}
                        className={`w-full rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                          plan.popular
                            ? 'py-4 text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                            : 'py-3 bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
                        }`}
                      >
                        {plan.popular ? 'Selecionar Consulta Completa' : 'Selecionar Consulta'}
                      </button>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {packagePlans.map((pack, index) => (
                <AnimatedSection 
                  key={pack.id} 
                  animation="fadeInUp" 
                  delay={index * 0.1}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    pack.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {pack.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Mais Popular</span>
                      </div>
                    </div>
                  )}

                  <div className="p-5">
                    <div className="text-center mb-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Pacote
                      </h3>
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {pack.name}
                      </div>
                      <div className="mb-1">
                        <span className="text-xs text-gray-500 line-through">
                          De R$ {pack.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                        <span className="text-xs text-gray-600 ml-1">por</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        R$ {pack.price.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-green-600 text-xs font-medium mt-1">
                        Economize R$ {pack.savings.toFixed(2).replace('.', ',')}
                      </div>
                    </div>

                    <div className="space-y-2 mb-5">
                      {pack.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="flex-shrink-0 w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <Check className="h-2.5 w-2.5 text-blue-600" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleSelectPlan(pack.id)}
                      className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                        pack.popular
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                          : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
                      }`}
                    >
                      Selecionar Pacote
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>

        <AnimatedSection animation="scaleIn" delay={0.5} className="text-center mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              💡 Não sabe qual escolher?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {consultationType === 'single' ? (
                <>A <strong>Consulta Completa</strong> é nossa recomendação para quem quer máxima segurança. 
                Ela inclui todas as verificações necessárias para uma compra 100% segura.</>
              ) : (
                <>O <strong>Pacote de 5 consultas</strong> oferece o melhor custo-benefício. 
                Ideal para quem pretende consultar múltiplos veículos ou quer ter consultas disponíveis.</>
              )}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Check className="h-3 w-3 text-green-600" />
                <span>Sem mensalidade</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <Check className="h-3 w-3 text-green-600" />
                <span>Resultado em 30s</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <Check className="h-3 w-3 text-green-600" />
                <span>Garantia de reembolso</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}