import React, { useEffect, useRef, useState } from 'react';

const PayPalButton = ({ amount, onSuccess, onError, onCancel, disabled = false }) => {
  const paypalRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const CLIENT_ID = 'ARjxx1L86y3wiw-qOu5IXPCNTrP2-xrAsLMoN4LlgcQKmmZC5Vv0uNBsszvWhgq0ftCe_Xszf3FYwB5N';

  useEffect(() => {
    // Check if PayPal script is already loaded
    if (window.paypal) {
      setScriptLoaded(true);
      return;
    }

    // Load PayPal script
    const loadPayPalScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=USD&intent=capture`;
        script.async = true;
        
        script.onload = () => {
          console.log('PayPal script loaded successfully');
          setScriptLoaded(true);
          resolve(window.paypal);
        };
        
        script.onerror = (error) => {
          console.error('Failed to load PayPal script:', error);
          reject(new Error('Failed to load PayPal script'));
        };
        
        document.head.appendChild(script);
      });
    };

    loadPayPalScript().catch((error) => {
      console.error('Error loading PayPal script:', error);
      setError('Failed to load PayPal. Please refresh the page and try again.');
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !paypalRef.current || disabled || amount <= 0) {
      return;
    }

    const renderPayPalButtons = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Clear any existing content
        paypalRef.current.innerHTML = '';

        console.log('Rendering PayPal buttons...');

        window.paypal.Buttons({
          createOrder: (data, actions) => {
            console.log('Creating PayPal order for amount:', amount);
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toString(),
                  currency_code: 'USD'
                },
                description: 'Smart Voice Pro - AI Calling Agent'
              }]
            });
          },
          onApprove: async (data, actions) => {
            try {
              console.log('PayPal payment approved, capturing order...');
              const details = await actions.order.capture();
              console.log('PayPal payment captured successfully:', details);
              
              if (onSuccess) {
                onSuccess(details);
              }
            } catch (captureError) {
              console.error('Error capturing PayPal payment:', captureError);
              if (onError) {
                onError(captureError);
              }
            }
          },
          onError: (err) => {
            console.error('PayPal button error:', err);
            setError('PayPal payment error occurred. Please try again.');
            if (onError) {
              onError(err);
            }
          },
          onCancel: (data) => {
            console.log('PayPal payment cancelled by user:', data);
            if (onCancel) {
              onCancel(data);
            }
          },
          style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
            height: 45,
            tagline: false
          }
        }).render(paypalRef.current).then(() => {
          console.log('PayPal buttons rendered successfully');
          setIsLoading(false);
        }).catch((renderError) => {
          console.error('Error rendering PayPal buttons:', renderError);
          setError('Failed to render PayPal buttons. Please refresh and try again.');
          setIsLoading(false);
        });

      } catch (error) {
        console.error('Error in renderPayPalButtons:', error);
        setError('Failed to initialize PayPal. Please refresh and try again.');
        setIsLoading(false);
      }
    };

    renderPayPalButtons();
  }, [scriptLoaded, amount, disabled, onSuccess, onError, onCancel]);

  if (disabled) {
    return (
      <div className="w-full h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
        Please fill in all required fields
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

  if (isLoading || !scriptLoaded) {
    return (
      <div className="w-full h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading PayPal...</span>
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

