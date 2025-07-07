// Investment endpoint with dynamic route parameter
export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    const assetId = url.pathname.split('/')[3]; // Extract ID from /api/rwa/[id]/invest
    const body = await request.json();
    const { amount, paymentMethod } = body;

    // Get authorization token from request
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Authorization required' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Proxy investment request to external service
    const investmentResponse = await fetch(`${process.env.INVESTMENT_SERVICE_URL}/invest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
        'X-API-Key': process.env.API_SECRET_KEY
      },
      body: JSON.stringify({
        assetId,
        amount,
        paymentMethod,
        timestamp: new Date().toISOString()
      })
    });

    const investmentData = await investmentResponse.json();

    if (!investmentResponse.ok) {
      return new Response(
        JSON.stringify({ 
          error: investmentData.message || 'Investment failed',
          code: investmentData.code 
        }),
        {
          status: investmentResponse.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        investment: investmentData.investment,
        transactionId: investmentData.transactionId,
        nftDetails: investmentData.nftDetails
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Investment API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}