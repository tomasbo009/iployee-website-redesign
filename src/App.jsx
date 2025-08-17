import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button.jsx';
import { Card, CardContent } from './components/ui/card.jsx'
import { Badge } from './components/ui/badge.jsx'
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
} from 'lucide-react';
import Checkout from './components/Checkout.jsx';
import ThankYouPage from './components/ThankYouPage.jsx'; // Import the new ThankYouPage
import ViewDemo from './components/ViewDemo.jsx'; // Import the new ViewDemo component
import './App.css'
import { Link } from 'react-router-dom';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [showThankYouPage, setShowThankYouPage] = useState(false); // New state for thank you page

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check for thankyou parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('thankyou') === 'true') {
      setShowThankYouPage(true);
      // Clean up the URL without reloading the page
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Receptionists",
      description: "Virtual receptionists that schedule appointments, qualify leads, and provide a warm, personalized first impression to your website visitors."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "Knowledge-powered chatbots that provide instant, accurate answers to customer queries using information from your website and files."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Never miss a lead or inquiry with 24/7 AI assistance that engages with visitors even when your team is offline."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Easy Integration",
      description: "Seamlessly connect with over 6,000 applications including CRM systems, calendars, and business tools with no coding knowledge."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lead Qualification",
      description: "Let AI receptionists capture and qualify leads, gathering essential information before transferring to your sales team."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customization",
      description: "Tailor your AI assistants to match your brand's voice, style, and personality for a cohesive customer experience."
    }
  ]

  const industries = [
    { name: "E-commerce", description: "Boost conversions with product recommendations and instant support" },
    { name: "Restaurants", description: "Manage reservations, menu inquiries, and special orders" },
    { name: "Real Estate", description: "Schedule property viewings and qualify potential buyers" },
    { name: "Healthcare", description: "Streamline appointment scheduling and answer common health queries" },
    { name: "Legal Services", description: "Schedule consultations and answer general legal inquiries" },
    { name: "Marketing Agencies", description: "Qualify leads and schedule consultations while providing service information" }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      company: "TechStart",
      rating: 5,
      text: "iPloyee has completely transformed our customer service experience. We never miss a lead anymore!"
    },
    {
      name: "João Santos",
      company: "MedClinic",
      rating: 5,
      text: "The integration was seamless and our patients love the 24/7 availability for appointments."
    },
    {
      name: "Ana Costa",
      company: "LegalPro",
      rating: 5,
      text: "It significantly reduced our administrative workload while improving customer satisfaction."
    }
  ]

  // Conditional rendering for ThankYouPage
  if (showThankYouPage) {
    return <ThankYouPage onBackToHome={() => setShowThankYouPage(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src="/Logo_iPloyee-removebg-preview.png" alt="iPloyee Logo" className="h-12" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-yellow-600 transition-colors">Home</a>
              <a href="#features" className="text-gray-700 hover:text-yellow-600 transition-colors">Features</a>
              <a href="#industries" className="text-gray-700 hover:text-yellow-600 transition-colors">Industries</a>
              <a href="#testimonials" className="text-gray-700 hover:text-yellow-600 transition-colors">Testimonials</a>
              <Link to="/demo" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center">Book a Demo</Link>
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
                <a href="#home" className="text-gray-700 hover:text-yellow-600 transition-colors">Home</a>
                <a href="#features" className="text-gray-700 hover:text-yellow-600 transition-colors">Features</a>
                <a href="#industries" className="text-gray-700 hover:text-yellow-600 transition-colors">Industries</a>
                <a href="#testimonials" className="text-gray-700 hover:text-yellow-600 transition-colors">Testimonials</a>
                <Link to="/demo" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center">Book a Demo</Link>
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
              Always On, Always Ready
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-yellow-800 to-orange-800 bg-clip-text text-transparent leading-tight">
              AI Receptionists.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Never miss a lead or an inquiry. Our AI receptionists and chatbots work 24/7 to greet visitors, qualify leads, schedule meetings, and handle support so you can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-lg px-8 py-4" onClick={() => setIsCheckoutOpen(true)}>
                Buy Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/demo" className="text-lg px-6 py-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-lg transition-colors flex items-center justify-center">View Demo</Link>
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
                      <h3 className="font-semibold text-lg mb-2">24/7 Calls</h3>
                      <p className="text-gray-600 text-sm">Instant response to all calls</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Scheduling</h3>
                      <p className="text-gray-600 text-sm">Automatic meeting booking</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Qualification</h3>
                      <p className="text-gray-600 text-sm">Intelligent lead filtering</p>
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
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dual AI solution works together to provide a complete customer engagement experience.
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
              Applications by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI Receptionists and Chatbots can benefit your specific industry.
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how iPloyee is transforming businesses worldwide.
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
                    "{
                      testimonial.text
                    }"
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
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
            Get your AI Receptionist and start converting more leads into customers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8 py-4" onClick={() => setIsCheckoutOpen(true)}>
              Buy Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/demo" className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 text-lg px-6 py-2 rounded-lg transition-colors flex items-center justify-center">Book a Demo</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img src="/Logo_iPloyee-removebg-preview.png" alt="iPloyee Logo" className="h-12" />
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                iPloyee offers 24/7 AI receptionists and chatbots that handle inquiries, scheduling, and support with human-like precision
              </p>
              <p className="text-gray-400 text-sm">
                Reduce costs, improve response times, and elevate your customer experience—automatically.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ's</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us!</h3>
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
              © 2025 iPloyee. All Rights Reserved.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Smarter Conversations. iPloyee.
            </p>
          </div>
        </div>
      </footer>

      {/* Checkout Modal */}
      <Checkout 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<ViewDemo />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;


