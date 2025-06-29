import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Carlos Mendes',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      text: 'Descobri que o carro tinha R$ 3.500 em multas! O vendedor não havia mencionado. Economizei muito dinheiro com essa consulta.',
      avatar: 'CM'
    },
    {
      name: 'Ana Paula Santos',
      location: 'São Paulo, SP',
      rating: 5,
      text: 'Excelente serviço! O laudo mostrou que o veículo estava com restrição judicial. Evitei uma grande dor de cabeça.',
      avatar: 'AS'
    },
    {
      name: 'Roberto Silva',
      location: 'Belo Horizonte, MG',
      rating: 5,
      text: 'Rápido e confiável. Em menos de 1 minuto tinha todas as informações que precisava. Super recomendo!',
      avatar: 'RS'
    },
    {
      name: 'Mariana Costa',
      location: 'Porto Alegre, RS',
      rating: 5,
      text: 'Salvou minha compra! O carro que ia comprar tinha histórico de sinistro grave. Valeu cada centavo dos R$ 14,99.',
      avatar: 'MC'
    },
    {
      name: 'João Oliveira',
      location: 'Brasília, DF',
      rating: 5,
      text: 'Serviço impecável. Descobri que o documento estava irregular. Sem essa consulta, teria comprado um problema.',
      avatar: 'JO'
    },
    {
      name: 'Fernanda Lima',
      location: 'Salvador, BA',
      rating: 5,
      text: 'Muito prático e seguro. O laudo é bem detalhado e me deu total confiança para finalizar a compra.',
      avatar: 'FL'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mais de 25 mil pessoas já evitaram prejuízos com nossa consulta
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scaleIn" delay={0.3} className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center px-4 sm:px-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentTestimonial].avatar}
                </div>
              </div>

              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}