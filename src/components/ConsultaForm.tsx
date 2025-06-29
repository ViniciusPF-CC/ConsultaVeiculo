import { useState } from 'react'
import { Search, Shield, CreditCard, Check } from 'lucide-react'

export default function ConsultaForm() {
  const [placa, setPlaca] = useState('')
  const [email, setEmail] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('completa')
  const [isLoading, setIsLoading] = useState(false)

  const plans = {
    basica: { name: 'Básica', price: 14.99, originalPrice: 29.99 },
    simples: { name: 'Simples', price: 24.99, originalPrice: 44.99 },
    completa: { name: 'Completa', price: 39.99, originalPrice: 54.99 }
  }

  const formatPlaca = (value: string) => {
    // Remove tudo que não é letra ou número
    const cleaned = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase()
    
    // Aplica formato ABC-1234 ou ABC1D23
    if (cleaned.length <= 3) {
      return cleaned
    } else if (cleaned.length <= 7) {
      return cleaned.slice(0, 3) + '-' + cleaned.slice(3)
    } else {
      return cleaned.slice(0, 3) + '-' + cleaned.slice(3, 7)
    }
  }

  const handlePlacaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPlaca(e.target.value)
    setPlaca(formatted)
  }

  const isValidPlaca = (placa: string) => {
    // Remove hífen para validação
    const cleaned = placa.replace('-', '')
    
    // Formato antigo: ABC1234 (3 letras + 4 números)
    const oldFormat = /^[A-Z]{3}[0-9]{4}$/.test(cleaned)
    
    // Formato Mercosul: ABC1D23 (3 letras + 1 número + 1 letra + 2 números)
    const mercosulFormat = /^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$/.test(cleaned)
    
    return oldFormat || mercosulFormat
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isValidPlaca(placa)) {
      alert('Por favor, digite uma placa válida (ex: ABC-1234 ou ABC-1D23)')
      return
    }
    
    if (!isValidEmail(email)) {
      alert('Por favor, digite um email válido')
      return
    }

    setIsLoading(true)
    
    // Simula processamento
    setTimeout(() => {
      alert(`Consulta ${plans[selectedPlan as keyof typeof plans].name} iniciada para a placa ${placa}. Você será redirecionado para o pagamento.`)
      setIsLoading(false)
    }, 2000)
  }

  const currentPlan = plans[selectedPlan as keyof typeof plans]

  return (
    <section id="consulta-form" className="py-16 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Faça Sua Consulta Agora
            </h2>
            <p className="text-blue-100 text-lg">
              Digite a placa do veículo e escolha seu plano para receber o laudo completo
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Seleção de Plano */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Escolha seu Plano
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.entries(plans).map(([key, plan]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedPlan(key)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        selectedPlan === key
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{plan.name}</span>
                        {selectedPlan === key && (
                          <Check className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        R$ {plan.originalPrice.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        R$ {plan.price.toFixed(2).replace('.', ',')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="placa" className="block text-sm font-medium text-gray-700 mb-2">
                  Placa do Veículo
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="placa"
                    value={placa}
                    onChange={handlePlacaChange}
                    placeholder="ABC-1234 ou ABC-1D23"
                    maxLength={8}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-mono"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Formato aceito: ABC-1234 (antigo) ou ABC-1D23 (Mercosul)
                </p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  O laudo será enviado para este email
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">
                    Consulta Veicular {currentPlan.name}
                  </span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">
                      R$ {currentPlan.originalPrice.toFixed(2).replace('.', ',')}
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      R$ {currentPlan.price.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Pagamento único • Sem mensalidade • Resultado em 30 segundos
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading || !isValidPlaca(placa) || !isValidEmail(email)}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processando...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Consultar por R$ {currentPlan.price.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
              </button>

              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Pagamento Seguro</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>SSL 256 bits</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Garantia de Reembolso</span>
              </div>
            </form>
          </div>

          <div className="text-center mt-8">
            <p className="text-blue-100 text-sm">
              Ao continuar, você concorda com nossos{' '}
              <a href="#" className="underline hover:text-white">Termos de Uso</a> e{' '}
              <a href="#" className="underline hover:text-white">Política de Privacidade</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}