// GoHighLevel API Integration
const GOHIGHLEVEL_API_BASE = 'https://rest.gohighlevel.com/v1';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiejdHbFVpMVY1dGo2QmtOOXhmWVYiLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3NTI5NDQ5MjA0MDUsInN1YiI6IkRBbWFxNjdpZlZQYTVXaGo1dFFkIn0.caot80o3tZ1SmblSaw9x5itC5VwtSyvabz5knmJ68IU';

export const submitLeadToGoHighLevel = async (leadData) => {
  try {
    const response = await fetch(`${GOHIGHLEVEL_API_BASE}/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: leadData.fullName.split(' ')[0] || leadData.fullName,
        lastName: leadData.fullName.split(' ').slice(1).join(' ') || '',
        email: leadData.email,
        phone: leadData.phone,
        source: 'iPloyee Website',
        tags: ['Website Lead', 'Smart Voice Pro'],
        customFields: {
          product: leadData.product || 'Smart Voice Pro - AI Calling Agent',
          quantity: leadData.quantity || 1,
          amount: leadData.amount || 350,
          timestamp: leadData.timestamp || new Date().toISOString()
        }
      })
    });

    if (!response.ok) {
      throw new Error(`GoHighLevel API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Lead successfully submitted to GoHighLevel:', result);
    return result;
  } catch (error) {
    console.error('Error submitting lead to GoHighLevel:', error);
    throw error;
  }
};

export const createOpportunityInGoHighLevel = async (contactId, leadData) => {
  try {
    const response = await fetch(`${GOHIGHLEVEL_API_BASE}/opportunities/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `Smart Voice Pro - ${leadData.fullName}`,
        contactId: contactId,
        status: 'open',
        monetaryValue: leadData.amount || 350,
        pipelineId: 'default', // You may need to adjust this based on your GoHighLevel setup
        source: 'iPloyee Website',
        notes: `Product: ${leadData.product}\nQuantity: ${leadData.quantity}\nSubmitted: ${leadData.timestamp}`
      })
    });

    if (!response.ok) {
      throw new Error(`GoHighLevel Opportunity API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Opportunity successfully created in GoHighLevel:', result);
    return result;
  } catch (error) {
    console.error('Error creating opportunity in GoHighLevel:', error);
    throw error;
  }
};

export const triggerGoHighLevelWorkflow = async (contactId, workflowId = 'default') => {
  try {
    const response = await fetch(`${GOHIGHLEVEL_API_BASE}/workflows/${workflowId}/trigger`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contactId: contactId
      })
    });

    if (!response.ok) {
      throw new Error(`GoHighLevel Workflow API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Workflow successfully triggered in GoHighLevel:', result);
    return result;
  } catch (error) {
    console.error('Error triggering workflow in GoHighLevel:', error);
    throw error;
  }
};

