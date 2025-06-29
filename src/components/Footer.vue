<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Logo e Descrição -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
              <Car class="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">ConsultaVeículo</h3>
              <p class="text-xs text-gray-400">.com</p>
            </div>
          </div>
          <p class="text-sm leading-relaxed">
            Protegendo brasileiros na compra de veículos desde 2020. 
            Informações oficiais, seguras e instantâneas.
          </p>
        </div>

        <!-- Links Úteis -->
        <div>
          <h4 class="font-semibold text-white mb-4">Links Úteis</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-blue-400 transition-colors">Como Funciona</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Preços</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Exemplos de Laudo</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Blog</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Afiliados</a></li>
          </ul>
        </div>

        <!-- Suporte -->
        <div>
          <h4 class="font-semibold text-white mb-4">Suporte</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-blue-400 transition-colors">Central de Ajuda</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Perguntas Frequentes</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Política de Privacidade</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">LGPD</a></li>
          </ul>
        </div>

        <!-- Contato -->
        <div>
          <h4 class="font-semibold text-white mb-4">Contato</h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-center space-x-2">
              <Mail class="h-4 w-4 text-blue-400" />
              <span>suporte@consultaveiculo.com</span>
            </div>
            <div class="flex items-center space-x-2">
              <Phone class="h-4 w-4 text-blue-400" />
              <span>(11) 3000-0000</span>
            </div>
            <div class="flex items-center space-x-2">
              <MapPin class="h-4 w-4 text-blue-400" />
              <span>São Paulo - SP</span>
            </div>
            <div class="flex items-center space-x-2">
              <Clock class="h-4 w-4 text-blue-400" />
              <span>Seg-Sex: 8h às 18h</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-sm text-gray-400">
            © 2024 ConsultaVeículo.com - Todos os direitos reservados
          </div>
          <div class="text-sm text-gray-400">
            CNPJ: 12.345.678/0001-90 | Desenvolvido com ❤️ no Brasil
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Car, Mail, Phone, MapPin, Clock } from 'lucide-vue-next'
</script>