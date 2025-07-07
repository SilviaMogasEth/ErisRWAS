export async function GET(req: any, res: any) {
  console.log('🧪 Test endpoint called');
  return res.status(200).json({
    success: true,
    message: 'API is working',
    timestamp: new Date().toISOString(),
    env: {
      hasResendKey: !!process.env.RESEND_API_KEY,
      nodeEnv: process.env.NODE_ENV
    }
  });
}