import React, { useEffect, useRef, useState } from 'react';

const PayPalButton = ({ amount, onSuccess, onError, onCancel, disabled = false }) => {
  const paypalRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [buttonsRendered, setButtonsRendered] = useState(false);

  // Use sandbox for local development, production for deployed site
  const CLIENT_ID = window.location.hostname === 'localhost' 
    ? 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R' // PayPal demo sandbox Client ID
    : 'AfUikDIx2XnUSh6fzR5ZXmgd6cwzTcsV_84rALwTXgfPDhExrTFLkybtMw_gBNMyP6YMI6Goe0QmKuAG'; // Production Client ID

  useEffect(() => {
    // Check if PayPal script is already loaded
    if (window.paypal && window.paypal.Buttons) {
      console.log('PayPal SDK already loaded with Buttons component.');
      setScriptLoaded(true);
      setIsLoading(false);
      return;
    }

    // Load PayPal script with explicit components parameter
    const loadPayPalScript = () => {
      return new Promise((resolve, reject) => {
        // Remove any existing PayPal scripts
        const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]');
        if (existingScript) {
          existingScript.remove();
        }

        const script = document.createElement('script');
        // Use sandbox environment for localhost, production for deployed site
        const environment = window.location.hostname === 'localhost' ? 'sandbox' : 'production';
        const clientId = window.location.hostname === 'localhost' 
          ? 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R' 
          : CLIENT_ID;
        
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture&components=buttons&environment=${environment}`;
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          console.log('PayPal SDK script loaded successfully.');
          console.log('window.paypal after script load:', window.paypal);
          
          // Wait for window.paypal.Buttons to be available
          let attempts = 0;
          const maxAttempts = 100; // 100 * 100ms = 10 seconds timeout
          const checkInterval = setInterval(() => {
            if (window.paypal && window.paypal.Buttons) {
              clearInterval(checkInterval);
              console.log('window.paypal.Buttons is now available.');
              setScriptLoaded(true);
              setIsLoading(false);
              resolve(window.paypal);
            } else if (attempts >= maxAttempts) {
              clearInterval(checkInterval);
              console.error('Timeout waiting for window.paypal.Buttons after 10 seconds.');
              console.log('Available PayPal properties:', window.paypal ? Object.keys(window.paypal) : 'window.paypal is undefined');
              setError('PayPal failed to load properly. Please refresh the page.');
              setIsLoading(false);
              reject(new Error('Timeout waiting for PayPal Buttons to be available.'));
            } else {
              console.log(`Attempt ${attempts + 1}/${maxAttempts}: Waiting for window.paypal.Buttons...`);
              if (window.paypal) {
                console.log('Available PayPal properties:', Object.keys(window.paypal));
              }
              attempts++;
            }
          }, 100);
        };
        
        script.onerror = (error) => {
          console.error('Failed to load PayPal script:', error);
          setError('Failed to load PayPal. Please check your internet connection and refresh.');
          setIsLoading(false);
          reject(new Error('Failed to load PayPal script'));
        };
        
        document.head.appendChild(script);
        console.log('PayPal SDK script appended to head with components=buttons.');
      });
    };

    loadPayPalScript().catch((error) => {
      console.error('Error loading PayPal script:', error);
      setError('Failed to load PayPal. Please refresh the page and try again.');
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !paypalRef.current || disabled || amount <= 0 || buttonsRendered) {
      return;
    }

    const renderPayPalButtons = async () => {
      try {
        console.log('Starting PayPal buttons rendering...');

        // Ensure element exists and is in DOM
        if (!paypalRef.current || !document.contains(paypalRef.current)) {
          console.warn('PayPal container element not found or removed from DOM');
          return;
        }

        // Clear any existing content
        paypalRef.current.innerHTML = '';

        if (!window.paypal || !window.paypal.Buttons) {
          console.error('window.paypal.Buttons is not available for rendering.');
          setError('PayPal Buttons component not available. Please refresh and try again.');
          return;
        }

        console.log('Rendering PayPal buttons with amount:', amount);

        const paypalButtons = window.paypal.Buttons({
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
              
              // Redirect to thank you page after successful payment
              setTimeout(() => {
                window.location.href = window.location.origin + '?thankyou=true';
              }, 1000);
              
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
        });

        // Final check before rendering
        if (!paypalRef.current || !document.contains(paypalRef.current)) {
          console.warn('PayPal container element removed from DOM before rendering');
          return;
        }

        if (paypalButtons && paypalButtons.render) {
          await paypalButtons.render(paypalRef.current);
          console.log('PayPal buttons rendered successfully');
          setButtonsRendered(true);
          setError(null); // Clear any previous errors
        } else {
          console.error('PayPal Buttons render method not available');
          setError('PayPal Buttons render method not available. Please refresh and try again.');
        }

      } catch (error) {
        console.error('Error in renderPayPalButtons:', error);
        if (error.message && error.message.includes('container element removed')) {
          console.log('Container removed error - will retry on next render');
          setButtonsRendered(false);
        } else {
          setError('Failed to initialize PayPal. Please refresh and try again.');
        }
      }
    };

    // Use a longer delay to ensure DOM stability
    const timeoutId = setTimeout(renderPayPalButtons, 500);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [scriptLoaded, amount, disabled, onSuccess, onError, onCancel, buttonsRendered]);

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
          onClick={() => {
            setError(null);
            setButtonsRendered(false);
            setIsLoading(true);
            window.location.reload();
          }} 
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
      <div ref={paypalRef} style={{ minHeight: '45px' }}></div>
    </div>
  );
};

export default PayPalButton;

