<template>
  <section class="bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-16">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="space-y-4">
            <div class="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Shield class="h-4 w-4" />
              <span>100% Oficial e Confiável</span>
            </div>
            
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Descubra a <span class="text-blue-600">Verdade</span> sobre Qualquer Veículo
            </h1>
            
            <p class="text-xl text-gray-600 leading-relaxed">
              Evite fraudes e tome decisões seguras com nosso laudo oficial completo. 
              Informações direto dos órgãos competentes em segundos.
            </p>
          </div>

          <div class="flex flex-wrap gap-4">
            <div class="flex items-center space-x-2 text-gray-700">
              <CheckCircle class="h-5 w-5 text-green-600" />
              <span>Dados 100% Oficiais</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-700">
              <CheckCircle class="h-5 w-5 text-green-600" />
              <span>Sem Mensalidade</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-700">
              <CheckCircle class="h-5 w-5 text-green-600" />
              <span>Resultado Instantâneo</span>
            </div>
          </div>

          <div class="space-y-4">
            <button
              @click="scrollToConsulta"
              class="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Consultar por Apenas R$ 14,99
            </button>
            
            <p class="text-sm text-gray-500 flex items-center space-x-1">
              <Shield class="h-4 w-4" />
              <span>Pagamento 100% seguro • Garantia de reembolso</span>
            </p>
          </div>
        </div>

        <div class="relative">
          <div class="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div class="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-lg mb-4">
              <h3 class="font-semibold text-lg">Laudo Veicular Completo</h3>
              <p class="text-blue-100">ABC-1234 • Toyota Corolla 2020</p>
            </div>
            
            <div class="space-y-3">
              <div class="flex justify-between items-center py-2">
                <span class="text-gray-600">Situação do Documento:</span>
                <span class="text-green-600 font-semibold flex items-center">
                  <CheckCircle class="h-4 w-4 mr-1" />
                  Regular
                </span>
              </div>
              <div class="flex justify-between items-center py-2 border-t">
                <span class="text-gray-600">Restrições:</span>
                <span class="text-green-600 font-semibold">Nenhuma</span>
              </div>
              <div class="flex justify-between items-center py-2 border-t">
                <span class="text-gray-600">Débitos:</span>
                <span class="text-green-600 font-semibold">R$ 0,00</span>
              </div>
              <div class="flex justify-between items-center py-2 border-t">
                <span class="text-gray-600">Recalls:</span>
                <span class="text-yellow-600 font-semibold flex items-center">
                  <AlertTriangle class="h-4 w-4 mr-1" />
                  2 Pendentes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, CheckCircle, AlertTriangle } from 'lucide-vue-next'

const scrollToConsulta = () => {
  document.getElementById('consulta-form')?.scrollIntoView({ behavior: 'smooth' })
}
</script>