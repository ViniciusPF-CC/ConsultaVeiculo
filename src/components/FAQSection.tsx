import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: 'As informações são realmente oficiais?',
      answer: 'Sim! Todas as informações são extraídas diretamente dos bancos de dados oficiais do DETRAN, Polícia Civil, SPC, Serasa e outros órgãos competentes. Não utilizamos dados de terceiros ou estimativas.'
    },
    {
      question: 'Quanto tempo demora para receber o laudo?',
      answer: 'O laudo é gerado automaticamente em menos de 30 segundos após a confirmação do pagamento. Você receberá por email e também poderá baixar diretamente na plataforma.'
    },
    {
      question: 'Posso consultar qualquer tipo de veículo?',
      answer: 'Sim! Nossa consulta funciona para carros, motos, caminhões, ônibus, tratores e qualquer veículo registrado no Brasil que possua placa oficial.'
    },
    {
      question: 'E se o veículo tiver problemas graves?',
      answer: 'Nosso laudo mostrará todos os problemas encontrados de forma clara e detalhada. Isso inclui restrições, débitos, histórico de sinistros, recalls e muito mais. Você terá todas as informações para tomar a melhor decisão.'
    },
    {
      question: 'Meus dados ficam seguros?',
      answer: 'Absolutamente! Seguimos rigorosamente a LGPD e utilizamos criptografia de ponta. Seus dados pessoais nunca são compartilhados e são automaticamente excluídos após o período legal obrigatório.'
    },
    {
      question: 'Posso pedir reembolso se não gostar?',
      answer: 'Sim! Oferecemos garantia de reembolso integral em até 7 dias corridos após a compra, sem necessidade de justificativa. É só entrar em contato conosco.'
    },
    {
      question: 'Preciso criar conta para fazer a consulta?',
      answer: 'Não é obrigatório! Você pode fazer a consulta informando apenas seu email para receber o laudo. Porém, criar uma conta permite acessar o histórico de todas as suas consultas.'
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos todas as principais formas: cartão de crédito (Visa, Master, Elo), débito, PIX, boleto bancário e carteiras digitais como PicPay e PayPal.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nosso serviço de consulta veicular
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection 
              key={index} 
              animation="fadeInUp" 
              delay={index * 0.05}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.5} className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a
            href="mailto:suporte@consultaveiculo.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Entre em contato conosco
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}