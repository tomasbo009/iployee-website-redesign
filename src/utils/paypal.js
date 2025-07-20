// PayPal integration utility
const PAYPAL_CLIENT_ID = 'ARjxx1L86y3wiw-qOu5IXPCNTrP2-xrAsLMoN4LlgcQKmmZC5Vv0uNBsszvWhgq0ftCe_Xszf3FYwB5N';

// PayPal configuration
export const PAYPAL_CONFIG = {
  clientId: PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
  environment: 'sandbox' // Change to 'production' for live payments
};

// Create PayPal order
export const createPayPalOrder = async (orderData) => {
  try {
    const response = await fetch('/api/paypal/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error('Failed to create PayPal order');
    }

    const order = await response.json();
    return order;
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    throw error;
  }
};

// Capture PayPal payment
export const capturePayPalPayment = async (orderID) => {
  try {
    const response = await fetch('/api/paypal/capture-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderID }),
    });

    if (!response.ok) {
      throw new Error('Failed to capture PayPal payment');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error capturing PayPal payment:', error);
    throw error;
  }
};

// Load PayPal SDK
export const loadPayPalSDK = () => {
  return new Promise((resolve, reject) => {
    console.log('Attempting to load PayPal SDK...');
    if (window.paypal) {
      console.log('PayPal SDK already loaded.');
      resolve(window.paypal);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=${PAYPAL_CONFIG.currency}&intent=${PAYPAL_CONFIG.intent}`;
    script.onload = () => {
      console.log('PayPal SDK script loaded successfully.');
      resolve(window.paypal);
    };
    script.onerror = (e) => {
      console.error('Failed to load PayPal SDK script:', e);
      reject(new Error('Failed to load PayPal SDK'));
    };
    document.head.appendChild(script);
    console.log('PayPal SDK script appended to head.');
  });
};


