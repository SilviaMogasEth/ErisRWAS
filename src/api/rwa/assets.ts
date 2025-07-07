// RWA assets endpoint - proxies to asset management service
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const limit = url.searchParams.get('limit') || '10';
    const offset = url.searchParams.get('offset') || '0';

    // Build query parameters for external service
    const queryParams = new URLSearchParams({
      category: category || '',
      limit,
      offset
    });

    // Proxy request to external RWA service
    const response = await fetch(`${process.env.RWA_SERVICE_URL}/assets?${queryParams}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.API_SECRET_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: data.message || 'Failed to fetch assets' }),
        {
          status: response.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        assets: data.assets,
        total: data.total,
        pagination: {
          limit: parseInt(limit),
          offset: parseInt(offset),
          hasMore: data.hasMore
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300' // 5 minutes cache
        }
      }
    );
  } catch (error) {
    console.error('Assets API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}