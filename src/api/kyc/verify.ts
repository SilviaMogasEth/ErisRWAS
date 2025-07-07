// KYC verification endpoint - proxies to Persona or other KYC service
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { inquiryId, userId } = body;

    // Get authorization token
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

    // Proxy to KYC service (e.g., Persona)
    const kycResponse = await fetch(`${process.env.KYC_SERVICE_URL}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.PERSONA_API_KEY}`,
        'Persona-Version': '2023-01-05'
      },
      body: JSON.stringify({
        inquiry_id: inquiryId,
        user_id: userId
      })
    });

    const kycData = await kycResponse.json();

    if (!kycResponse.ok) {
      return new Response(
        JSON.stringify({ 
          error: kycData.message || 'KYC verification failed',
          details: kycData.errors 
        }),
        {
          status: kycResponse.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        status: kycData.data.attributes.status,
        verificationLevel: kycData.data.attributes.name_first ? 'verified' : 'pending',
        completedAt: kycData.data.attributes.completed_at
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('KYC API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}