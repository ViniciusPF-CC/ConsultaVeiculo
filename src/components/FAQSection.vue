<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Perguntas Frequentes
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Esclarecemos as principais dúvidas sobre nosso serviço de consulta veicular
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            @click="toggleFAQ(index)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 class="text-lg font-semibold text-gray-900">
              {{ faq.question }}
            </h3>
            <ChevronUp v-if="openFAQ === index" class="h-5 w-5 text-gray-500" />
            <ChevronDown v-else class="h-5 w-5 text-gray-500" />
          </button>
          
          <div v-if="openFAQ === index" class="px-6 pb-4">
            <p class="text-gray-600 leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">Ainda tem dúvidas?</p>
        <a
          href="mailto:suporte@consultaveiculo.com"
          class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
        >
          Entre em contato conosco
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

const openFAQ = ref<number | null>(null)

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
  openFAQ.value = openFAQ.value === index ? null : index
}
</script>