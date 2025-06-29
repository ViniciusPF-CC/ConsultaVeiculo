import { Car, Briefcase, Home, Truck } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function TargetAudience() {
  const audiences = [
    {
      icon: Car,
      title: 'Compradores de Carros Usados',
      description: 'Pessoas físicas que querem comprar um veículo usado com segurança e tranquilidade',
      color: 'bg-blue-500'
    },
    {
      icon: Briefcase,
      title: 'Empresários e Revendedores',
      description: 'Profissionais do ramo automotivo que precisam verificar veículos antes da compra/venda',
      color: 'bg-green-500'
    },
    {
      icon: Home,
      title: 'Famílias Precavidas',
      description: 'Famílias que querem garantir a segurança antes de investir em um novo veículo',
      color: 'bg-purple-500'
    },
    {
      icon: Truck,
      title: 'Compradores de Utilitários',
      description: 'Quem busca caminhões, vans ou outros veículos comerciais sem surpresas desagradáveis',
      color: 'bg-orange-500'
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
            Para Quem é Este Serviço?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa consulta é ideal para qualquer pessoa que preza pela segurança e quer evitar prejuízos
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <AnimatedSection 
              key={index} 
              animation="scaleIn" 
              delay={index * 0.1}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${audience.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                  <audience.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {audience.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.6} className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Independente do Seu Perfil...
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nossa consulta veicular oferece a proteção e informações que você precisa 
            para tomar a melhor decisão na compra do seu veículo.
          </p>
          <button
            onClick={scrollToConsulta}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Fazer Minha Consulta Agora
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}