import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Phone, MessageCircle } from 'lucide-react';

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
              Back to Home Page
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section for View Demo */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-yellow-800 to-orange-800 bg-clip-text text-transparent leading-tight">
            iPloyee Demo
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Explore the capabilities of our AI Receptionists and Chatbots.
          </p>
        </div>
      </section>

      {/* Chatbot Demo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Chatbot Demo</h2>
        <div className="flex justify-center items-center mb-8">
          <img src="/Beige,BrownandWhiteSimpleCleanAnimatedChatTextMobileVideo.gif" alt="Chatbot Demo" className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          See how our chatbot interacts with users in real-time, answering questions and providing information.
        </p>
      </section>

      {/* Audio Demo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-100 shadow-lg rounded-lg max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Audio Demo</h2>
        <div className="flex justify-center items-center">
          <audio controls>
            <source src="/ai-voice-demo.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">What is an AI receptionist?</h3>
            <p className="text-gray-700 leading-relaxed">
              An AI receptionist is a virtual assistant that uses artificial intelligence to interact with clients, schedule appointments, qualify leads, and provide support, 24 hours a day, 7 days a week.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">How can AI chatbots benefit my business?</h3>
            <p className="text-gray-700 leading-relaxed">
              AI chatbots can automate customer service, answer frequently asked questions instantly, reduce your team's workload, improve customer satisfaction, and generate qualified leads.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Is it easy to integrate iPloyee with my existing systems?</h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, iPloyee is designed for easy integration with over 6,000 applications, including CRM systems, calendars, and business tools, with no coding knowledge required.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Does iPloyee offer 24/7 support?</h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, our AI Receptionists and Chatbots are available 24 hours a day, 7 days a week, to ensure you never miss an opportunity or inquiry.
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
                  927 249 495 (WhatsApp only)
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


