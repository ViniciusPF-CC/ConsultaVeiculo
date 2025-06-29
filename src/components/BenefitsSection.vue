<template>
  <section class="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Por Que Consultar Antes de Comprar?
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Proteja seu investimento e sua família com informações precisas e atualizadas
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(benefit, index) in benefits" :key="index" class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
          <div class="flex items-start space-x-4">
            <div :class="`flex-shrink-0 w-12 h-12 ${benefit.color} bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300`">
              <component :is="benefit.icon" :class="`h-6 w-6 ${benefit.color}`" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ benefit.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ benefit.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <div class="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Não Deixe para Depois!
          </h3>
          <p class="text-gray-600 mb-6">
            Cada dia de atraso pode significar um prejuízo maior. 
            Consulte agora e tome a decisão certa.
          </p>
          <button
            @click="scrollToConsulta"
            class="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Consultar por R$ 14,99
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, AlertTriangle, DollarSign, FileCheck, Clock, Users } from 'lucide-vue-next'

const benefits = [
  {
    icon: Shield,
    title: 'Evite Fraudes',
    description: 'Descubra se o veículo tem documento adulterado, está roubado ou com restrições judiciais',
    color: 'text-red-600'
  },
  {
    icon: DollarSign,
    title: 'Economize Dinheiro',
    description: 'Saiba sobre multas, IPVA em atraso e outros débitos antes de fechar o negócio',
    color: 'text-green-600'
  },
  {
    icon: FileCheck,
    title: 'Dados Oficiais',
    description: 'Informações direto do DETRAN, Polícia Civil e órgãos competentes',
    color: 'text-blue-600'
  },
  {
    icon: AlertTriangle,
    title: 'Recalls e Segurança',
    description: 'Verifique se o veículo possui recalls pendentes que podem afetar sua segurança',
    color: 'text-yellow-600'
  },
  {
    icon: Clock,
    title: 'Resultado Instantâneo',
    description: 'Receba o laudo completo em menos de 30 segundos após o pagamento',
    color: 'text-purple-600'
  },
  {
    icon: Users,
    title: 'Suporte Especializado',
    description: 'Equipe especializada pronta para esclarecer suas dúvidas sobre o laudo',
    color: 'text-indigo-600'
  }
]

const scrollToConsulta = () => {
  document.getElementById('consulta-form')?.scrollIntoView({ behavior: 'smooth' })
}
</script>