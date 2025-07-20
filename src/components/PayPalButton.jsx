import React, { useEffect, useRef, useState } from 'react';
import { loadPayPalSDK, PAYPAL_CONFIG } from '../utils/paypal';

const PayPalButton = ({ amount, onSuccess, onError, onCancel, disabled = false }) => {
  const paypalRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initPayPal = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const paypal = await loadPayPalSDK();
        
        if (paypalRef.current) {
          paypalRef.current.innerHTML = "";
          paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: amount.toString(),
                    currency_code: PAYPAL_CONFIG.currency
                  },
                  description: "Smart Voice Pro - AI Calling Agent"
                }]
              });
            },
            onApprove: async (data, actions) => {
              try {
                const details = await actions.order.capture();
                console.log("PayPal payment successful:", details);
                
                if (onSuccess) {
                  onSuccess(details);
                }
              } catch (error) {
                console.error("Error capturing PayPal payment:", error);
                if (onError) {
                  onError(error);
                }
              }
            },
            onError: (err) => {
              console.error("PayPal error:", err);
              if (onError) {
                onError(err);
              }
            },
            onCancel: (data) => {
              console.log("PayPal payment cancelled:", data);
              if (onCancel) {
                onCancel(data);
              }
            },
            style: {
              layout: "vertical",
              color: "gold",
              shape: "rect",
              label: "paypal",
              height: 45
            }
          }).render(paypalRef.current);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing PayPal:', error);
        setError('Failed to load PayPal. Please try again.');
        setIsLoading(false);
      }
    };

    if (!disabled && amount > 0) {
      initPayPal();
    }
  }, [amount, disabled, onSuccess, onError, onCancel, paypalRef]);

  if (!paypalRef.current) return;

  if (disabled) {
    return (
      <div className="w-full h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
        Please fill in all required fields
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading PayPal...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div ref={paypalRef}></div>
    </div>
  );
};

export default PayPalButton;

