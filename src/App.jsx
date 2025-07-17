import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Phone,
  MessageCircle,
  Clock,
  Zap,
  Users,
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Bot,
  Calendar,
  Shield,
  Sparkles
} from 'lucide-react'
import logoIployee from './assets/logo-iployee.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Receptionists",
      description: "Virtual receptionists que agendam consultas, qualificam leads e proporcionam uma primeira impressão calorosa e personalizada aos visitantes do seu website."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "Chatbots alimentados por conhecimento que fornecem respostas instantâneas e precisas às consultas dos clientes usando informações do seu website e ficheiros."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Disponibilidade 24/7",
      description: "Nunca perca um lead ou consulta com assistência de IA 24 horas por dia que interage com visitantes mesmo quando a sua equipa está offline."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Integração Fácil",
      description: "Conecte-se perfeitamente com mais de 6.000 aplicações incluindo sistemas CRM, calendários e ferramentas de negócio sem conhecimento de programação."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Qualificação de Leads",
      description: "Deixe que os recepcionistas de IA capturem e qualifiquem leads, recolhendo informações essenciais antes de transferir para a sua equipa de vendas."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Personalização",
      description: "Adapte os seus assistentes de IA para corresponder à voz, estilo e personalidade da sua marca para uma experiência de cliente coesa."
    }
  ]

  const industries = [
    { name: "E-commerce", description: "Aumente conversões com recomendações de produtos e suporte instantâneo" },
    { name: "Restaurantes", description: "Gerencie reservas, consultas de menu e pedidos especiais" },
    { name: "Imobiliário", description: "Agende visualizações de propriedades e qualifique potenciais compradores" },
    { name: "Saúde", description: "Simplifique o agendamento de consultas e responda a questões de saúde comuns" },
    { name: "Serviços Jurídicos", description: "Agende consultas e responda a consultas jurídicas gerais" },
    { name: "Agências de Marketing", description: "Qualifique leads e agende consultas enquanto fornece informações sobre serviços" }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      company: "TechStart",
      rating: 5,
      text: "O iPloyee transformou completamente a nossa experiência de atendimento ao cliente. Nunca mais perdemos um lead!"
    },
    {
      name: "João Santos",
      company: "MedClinic",
      rating: 5,
      text: "A integração foi perfeita e os nossos pacientes adoram a disponibilidade 24/7 para agendamentos."
    },
    {
      name: "Ana Costa",
      company: "LegalPro",
      rating: 5,
      text: "Reduziu significativamente a nossa carga de trabalho administrativo enquanto melhora a satisfação do cliente."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src={logoIployee} alt="iPloyee Logo" className="h-12" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-yellow-600 transition-colors">Início</a>
              <a href="#features" className="text-gray-700 hover:text-yellow-600 transition-colors">Funcionalidades</a>
              <a href="#industries" className="text-gray-700 hover:text-yellow-600 transition-colors">Indústrias</a>
              <a href="#testimonials" className="text-gray-700 hover:text-yellow-600 transition-colors">Testemunhos</a>
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                Agendar Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-lg p-4 mb-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-yellow-600 transition-colors">Início</a>
                <a href="#features" className="text-gray-700 hover:text-yellow-600 transition-colors">Funcionalidades</a>
                <a href="#industries" className="text-gray-700 hover:text-yellow-600 transition-colors">Indústrias</a>
                <a href="#testimonials" className="text-gray-700 hover:text-yellow-600 transition-colors">Testemunhos</a>
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                  Agendar Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Sempre Ligado, Sempre Pronto
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-yellow-800 to-orange-800 bg-clip-text text-transparent leading-tight">
              AI Receptionists.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Nunca perca um lead ou uma pergunta. Os nossos recepcionistas de IA e chatbots trabalham 24/7 para receber visitantes, qualificar leads, agendar reuniões e lidar com suporte para que se possa focar no que importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-lg px-8 py-4">
                Começar Teste Gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2">
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Phone className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Chamadas 24/7</h3>
                      <p className="text-gray-600 text-sm">Resposta instantânea a todas as chamadas</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Agendamento</h3>
                      <p className="text-gray-600 text-sm">Marcação automática de reuniões</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Qualificação</h3>
                      <p className="text-gray-600 text-sm">Filtragem inteligente de leads</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              As Nossas Soluções
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A nossa solução dupla de IA trabalha em conjunto para proporcionar uma experiência completa de envolvimento do cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-yellow-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Aplicações por Indústria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como os nossos Recepcionistas de IA e Chatbots podem beneficiar a sua indústria específica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              O Que Dizem os Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como o iPloyee está a transformar negócios em todo o mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para Transformar a Sua Experiência de Cliente?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
            Comece o seu teste gratuito de 7 dias e veja o impacto dos Recepcionistas de IA e Chatbots no seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8 py-4">
              Começar Teste Gratuito
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yellow-600 text-lg px-8 py-4">
              Agendar Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img src={logoIployee} alt="iPloyee Logo" className="h-12" />
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                O iPloyee oferece recepcionistas de IA e chatbots 24/7 que lidam com consultas, agendamento e suporte com precisão humana.
              </p>
              <p className="text-gray-400 text-sm">
                Reduza custos, melhore tempos de resposta e eleve a sua experiência de cliente—automaticamente.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos Adicionais</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ's</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacte-nos!</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  927 249 495
                </p>
                <p className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  leonoor.silvaa20@gmail.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 iPloyee. Todos os Direitos Reservados.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Conversas Mais Inteligentes. iPloyee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App



