<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Sua Segurança é Nossa Prioridade
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Garantimos total proteção dos seus dados e transparência em todo o processo
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div v-for="(security, index) in securities" :key="index" class="text-center group">
          <div class="flex justify-center mb-4">
            <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
              <component :is="security.icon" :class="`h-8 w-8 ${security.color}`" />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            {{ security.title }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ security.description }}
          </p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
        <div class="text-center">
          <div class="flex justify-center mb-4">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Shield class="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Garantia de Satisfação Total
          </h3>
          <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
            Estamos tão confiantes na qualidade do nosso serviço que oferecemos 
            <strong> garantia de reembolso integral</strong> caso você não fique 
            completamente satisfeito com o resultado da sua consulta.
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Reembolso em até 7 dias</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Sem burocracia</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100% do valor devolvido</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, Lock, RefreshCw, Award } from 'lucide-vue-next'

const securities = [
  {
    icon: Shield,
    title: 'Conformidade LGPD',
    description: 'Seus dados são protegidos conforme a Lei Geral de Proteção de Dados',
    color: 'text-green-600'
  },
  {
    icon: Lock,
    title: 'Pagamento Seguro',
    description: 'Transações criptografadas com certificado SSL de 256 bits',
    color: 'text-blue-600'
  },
  {
    icon: RefreshCw,
    title: 'Garantia de Reembolso',
    description: 'Se não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias',
    color: 'text-purple-600'
  },
  {
    icon: Award,
    title: 'Dados Oficiais',
    description: 'Informações extraídas diretamente dos órgãos governamentais competentes',
    color: 'text-orange-600'
  }
]
</script>