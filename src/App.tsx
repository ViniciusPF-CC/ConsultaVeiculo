import Header from './components/Header'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import HowItWorks from './components/HowItWorks'
import BenefitsSection from './components/BenefitsSection'
import PricingSection from './components/PricingSection'
import ComparisonSection from './components/ComparisonSection'
import TargetAudience from './components/TargetAudience'
import TestimonialsSection from './components/TestimonialsSection'
import SecuritySection from './components/SecuritySection'
import FAQSection from './components/FAQSection'
import ConsultaForm from './components/ConsultaForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <HowItWorks />
      <BenefitsSection />
      <PricingSection />
      <ComparisonSection />
      <TargetAudience />
      <TestimonialsSection />
      <SecuritySection />
      <FAQSection />
      <ConsultaForm />
      <Footer />
    </div>
  )
}

export default App