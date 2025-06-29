<template>
  <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
            <Car class="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 class="text-xl font-bold text-gray-900">ConsultaVeículo</h1>
            <p class="text-xs text-gray-600">.com</p>
          </div>
        </div>
        
        <button
          @click="scrollToConsulta"
          class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span class="hidden sm:inline">Consultar Agora</span>
          <span class="sm:hidden">Consultar</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Car } from 'lucide-vue-next'

const scrollToConsulta = () => {
  document.getElementById('consulta-form')?.scrollIntoView({ behavior: 'smooth' })
}
</script>