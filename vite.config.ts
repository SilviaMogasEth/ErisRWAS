import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import apiRoutes from 'vite-plugin-api-routes';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env vars
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      apiRoutes({
        routeBase: 'api',
        dirs: [
          {
            dir: 'src/api',
            route: '',
            exclude: []
          }
        ]
      })
    ],
    define: {
      // Make sure environment variables are available in API routes
      'process.env.RESEND_API_KEY': JSON.stringify(env.RESEND_API_KEY),
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    }
  };
});