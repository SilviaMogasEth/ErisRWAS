// Authentication endpoint - proxies to external auth service
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, userType } = body;

    // Proxy request to external authentication service
    const authResponse = await fetch(`${process.env.AUTH_SERVICE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_SECRET_KEY}`
      },
      body: JSON.stringify({
        email,
        password,
        userType
      })
    });

    const authData = await authResponse.json();

    if (!authResponse.ok) {
      return new Response(
        JSON.stringify({ error: authData.message || 'Authentication failed' }),
        {
          status: authResponse.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        user: authData.user,
        token: authData.token
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `auth-token=${authData.token}; HttpOnly; Secure; SameSite=Strict`
        }
      }
    );
  } catch (error) {
    console.error('Login API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}