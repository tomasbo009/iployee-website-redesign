import React, { useEffect, useRef, useState } from 'react';
import { loadPayPalSDK, PAYPAL_CONFIG } from '../utils/paypal';

const PayPalButton = ({ amount, onSuccess, onError, onCancel, disabled = false }) => {
  const paypalRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initPayPal = async () => {
      if (!paypalRef.current) {
        console.log("paypalRef.current is not available yet.");
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        console.log("Starting PayPal SDK initialization...");
        
        // Add timeout for PayPal SDK loading
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('PayPal SDK loading timeout')), 15000);
        });
        
        const paypal = await Promise.race([
          loadPayPalSDK(),
          timeoutPromise
        ]);
        
        console.log("PayPal SDK loaded successfully:", paypal);

        if (!paypal || !paypal.Buttons) {
          throw new Error('PayPal SDK not properly loaded');
        }

        paypalRef.current.innerHTML = ""; // Clear any existing content
        
        console.log("Creating PayPal buttons...");
        
        paypal.Buttons({
          createOrder: (data, actions) => {
            console.log("Creating PayPal order...");
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
              console.log("PayPal payment approved, capturing...");
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
            setError('PayPal payment error occurred');
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
        }).render(paypalRef.current).then(() => {
          console.log("PayPal buttons rendered successfully");
          setIsLoading(false);
        }).catch((renderError) => {
          console.error("Error rendering PayPal buttons:", renderError);
          setError('Failed to render PayPal buttons');
          setIsLoading(false);
        });

      } catch (error) {
        console.error('Error initializing PayPal:', error);
        setError(`Failed to load PayPal: ${error.message}`);
        setIsLoading(false);
      }
    };

    if (!disabled && amount > 0) {
      initPayPal();
    }
  }, [amount, disabled, onSuccess, onError, onCancel]);

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
      <div className="w-full p-3 bg-red-100 rounded-lg text-red-600 text-sm">
        <div className="font-medium">PayPal Error:</div>
        <div>{error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-2 text-xs underline hover:no-underline"
        >
          Reload page to try again
        </button>
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

