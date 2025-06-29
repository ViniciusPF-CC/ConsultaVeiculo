<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Como Funciona? É Simples!
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Em apenas 3 passos você tem acesso a todas as informações oficiais do veículo
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div v-for="(step, index) in steps" :key="index" class="text-center group">
          <div class="relative mb-6">
            <div :class="`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`">
              <component :is="step.icon" class="h-10 w-10" />
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {{ index + 1 }}
            </div>
          </div>
          
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            {{ step.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ step.description }}
          </p>
        </div>
      </div>

      <div class="text-center mt-12">
        <button
          @click="scrollToConsulta"
          class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Começar Consulta Agora
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Search, CreditCard, FileText } from 'lucide-vue-next'

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
</script>