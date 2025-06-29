export default function Header() {
  const scrollToConsulta = () => {
    document.getElementById('consulta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-14 h-14">
              <img 
                src="/ChatGPT Image 29 de jun. de 2025, 10_48_04.png" 
                alt="ConsultaVeículo Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Consulta<span className="text-blue-600">Veículo</span>
              </h1>
            </div>
          </div>
          
          <button
            onClick={scrollToConsulta}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="hidden sm:inline">Consultar Agora</span>
            <span className="sm:hidden">Consultar</span>
          </button>
        </div>
      </div>
    </header>
  )
}