import { Users, Star, Shield, Clock } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: '+25.000',
      label: 'Consultas Realizadas',
      color: 'text-blue-600'
    },
    {
      icon: Star,
      number: '4,9/5',
      label: 'Avaliação dos Clientes',
      color: 'text-yellow-500'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Segurança Garantida',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      number: '< 30s',
      label: 'Tempo de Resposta',
      color: 'text-purple-600'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mais de 25 mil brasileiros já confiam em nós
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Números que comprovam nossa credibilidade e qualidade no mercado
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={index} 
              animation="scaleIn" 
              delay={index * 0.1}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.5} className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 italic text-lg mb-4">
              "Serviço excelente! Salvou minha compra de um carro com problemas ocultos. 
              Recomendo para todos que vão comprar veículos usados."
            </p>
            <p className="text-gray-800 font-semibold">- Maria Silva, São Paulo</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}