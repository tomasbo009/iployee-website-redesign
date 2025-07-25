import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function ViewDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-100">
      {/* Navigation - Simplified for demo page */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src="/Logo_iPloyee-removebg-preview.png" alt="iPloyee Logo" className="h-12" />
            </div>
            <Link to="/" className="text-gray-700 hover:text-yellow-600 transition-colors flex items-center">
              <ChevronLeft className="w-5 h-5 mr-1" />
              Voltar à Página Inicial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section for View Demo */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-yellow-800 to-orange-800 bg-clip-text text-transparent leading-tight">
            Demonstração do iPloyee
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Explore as capacidades dos nossos AI Receptionists e Chatbots.
          </p>
        </div>
      </section>

      {/* Chatbot Demo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Demonstração do Chatbot</h2>
        <div className="flex justify-center items-center mb-8">
          <img src="/Beige,BrownandWhiteSimpleCleanAnimatedChatTextMobileVideo.gif" alt="Chatbot Demo" className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          Veja como o nosso chatbot interage com os utilizadores em tempo real, respondendo a perguntas e fornecendo informações.
        </p>
      </section>

      {/* Audio Demo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-100 shadow-lg rounded-lg max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Demonstração de Áudio</h2>
        <div className="flex justify-center items-center">
          <p className="text-gray-700">Aqui virá o áudio.</p>
          {/* Placeholder for audio player */}
          {/* <audio controls src="/path/to/your/audio.mp3"></audio> */}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perguntas Frequentes (FAQs)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">O que é um rececionista de IA?</h3>
            <p className="text-gray-700 leading-relaxed">
              Um rececionista de IA é um assistente virtual que utiliza inteligência artificial para interagir com clientes, agendar compromissos, qualificar leads e fornecer suporte, 24 horas por dia, 7 dias por semana.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Como os chatbots de IA podem beneficiar o meu negócio?</h3>
            <p className="text-gray-700 leading-relaxed">
              Os chatbots de IA podem automatizar o atendimento ao cliente, responder a perguntas frequentes instantaneamente, reduzir a carga de trabalho da sua equipa, melhorar a satisfação do cliente e gerar leads qualificados.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">É fácil integrar o iPloyee com os meus sistemas existentes?</h3>
            <p className="text-gray-700 leading-relaxed">
              Sim, o iPloyee foi projetado para uma integração fácil com mais de 6.000 aplicações, incluindo sistemas CRM, calendários e ferramentas de negócios, sem necessidade de conhecimento de programação.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">O iPloyee oferece suporte 24/7?</h3>
            <p className="text-gray-700 leading-relaxed">
              Sim, os nossos AI Receptionists e Chatbots estão disponíveis 24 horas por dia, 7 dias por semana, para garantir que nunca perca uma oportunidade ou consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Reusing main footer style */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img src="/Logo_iPloyee-removebg-preview.png" alt="iPloyee Logo" className="h-12" />
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                iPloyee offers 24/7 AI receptionists and chatbots that handle inquiries, scheduling, and support with human-like precision.
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
    </div>
  );
}

export default ViewDemo;

