<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Mais de 25 mil brasileiros já confiam em nós
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Números que comprovam nossa credibilidade e qualidade no mercado
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(stat, index) in stats" :key="index" class="text-center group">
          <div class="flex justify-center mb-4">
            <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
              <component :is="stat.icon" :class="`h-8 w-8 ${stat.color}`" />
            </div>
          </div>
          <h3 class="text-3xl font-bold text-gray-900 mb-2">{{ stat.number }}</h3>
          <p class="text-gray-600 font-medium">{{ stat.label }}</p>
        </div>
      </div>

      <div class="mt-12 bg-white rounded-2xl p-8 shadow-lg">
        <div class="text-center">
          <div class="flex justify-center space-x-1 mb-4">
            <Star v-for="i in 5" :key="i" class="h-6 w-6 text-yellow-400 fill-current" />
          </div>
          <p class="text-gray-600 italic text-lg mb-4">
            "Serviço excelente! Salvou minha compra de um carro com problemas ocultos. 
            Recomendo para todos que vão comprar veículos usados."
          </p>
          <p class="text-gray-800 font-semibold">- Maria Silva, São Paulo</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Users, Star, Shield, Clock } from 'lucide-vue-next'

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
</script>