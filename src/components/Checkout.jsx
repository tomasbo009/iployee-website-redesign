import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Calendar,
  Shield,
  Clock,
  Users,
  Zap,
  CreditCard,
  Lock
} from 'lucide-react';
import { submitLeadToGoHighLevel, createOpportunityInGoHighLevel } from '../utils/gohighlevel.js';
import PayPalButton from './PayPalButton';

const Checkout = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    quantity: 1
  });

  const [isLoading, setIsLoading] = useState(false);

  const product = {
    name: "Smart Voice Pro - AI Calling Agent",
    price: 350,
    description: "Take your customer experience to the next level with SmartVoice Pro, your 24/7 AI-powered voice agent.",
    features: [
      "Bookings & Follow-ups",
      "Lead Qualification", 
      "Real-time Call Transcripts",
      "Always On - No Sick Days",
      "Fully Customizable Scripts"
    ],
    benefits: [
      "This intelligent voice assistant handles inbound and outbound calls for your business — booking appointments, answering FAQs, following up with leads, and more — all with natural, human-like conversation.",
      "Perfect for busy business owners who want to save time, never miss a lead, and deliver professional phone support without hiring extra staff.",
      "Let your AI agent handle the calls, so you can focus on growing your business."
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const totalAmount = product.price * formData.quantity;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Complete Your Order</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Information */}
            <div className="space-y-6">
              <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-yellow-500 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                      <p className="text-2xl font-bold text-yellow-600">${product.price}/month</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      What's Included:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <p key={index} className="text-sm text-gray-600 leading-relaxed">
                        {benefit}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Secure Payment</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">24/7 Support</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Trusted by 1000+</p>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                {/* Order Summary */}
                <Card className="bg-gray-50 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{product.name}</span>
                      <span className="font-medium">{formData.quantity}</span>
                      <span className="font-medium">${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Order Total</span>
                        <span className="text-yellow-600">${totalAmount.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
                  
                  {/* PayPal Button */}
                  <PayPalButton
                    amount={totalAmount}
                    disabled={!formData.fullName || !formData.email || !formData.phone}
                    onSuccess={async (details) => {
                      console.log('PayPal payment successful:', details);
                      
                      // Preparar dados do lead
                      const orderData = {
                        ...formData,
                        product: product.name,
                        amount: totalAmount,
                        paymentId: details.id,
                        paymentStatus: details.status,
                        timestamp: new Date().toISOString()
                      };

                      // Tentar enviar para GoHighLevel
                      try {
                        const leadResult = await submitLeadToGoHighLevel(orderData);
                        console.log('Lead submitted to GoHighLevel:', leadResult);
                        
                        if (leadResult && leadResult.contact && leadResult.contact.id) {
                          try {
                            const opportunityResult = await createOpportunityInGoHighLevel(leadResult.contact.id, orderData);
                            console.log('Opportunity created in GoHighLevel:', opportunityResult);
                          } catch (opportunityError) {
                            console.warn('Failed to create opportunity, but lead was saved:', opportunityError);
                          }
                        }
                      } catch (ghlError) {
                        console.warn('GoHighLevel integration failed, but payment was successful:', ghlError);
                      }
                      
                      alert('Payment successful! Thank you for your purchase. You will receive a confirmation email shortly.');
                      onClose();
                    }}
                    onError={(error) => {
                      console.error('PayPal payment error:', error);
                      alert('Payment failed. Please try again or contact support.');
                    }}
                    onCancel={(data) => {
                      console.log('PayPal payment cancelled:', data);
                      alert('Payment was cancelled.');
                    }}
                  />
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Lock className="w-4 h-4" />
                    <span>100% Secure & Safe Payments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

