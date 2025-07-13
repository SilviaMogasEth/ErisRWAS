import React from 'react';
import { PrivyProvider, PrivyClientConfig } from '@privy-io/react-auth';
import { WagmiProvider } from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { wagmiConfig, flowTestnet } from './wagmi-config';

const queryClient = new QueryClient();

// Privy configuration
const privyConfig: PrivyClientConfig = {
  loginMethods: ['email', 'wallet', 'google', 'twitter'],
  appearance: {
    theme: 'light',
    accentColor: '#6366f1', // indigo-500 to match ErisRWA theme
    logo: '/placeholder-logo.svg',
    showWalletLoginFirst: false,
  },
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
    requireUserPasswordOnCreate: false,
  },
  defaultChain: flowTestnet,
  supportedChains: [flowTestnet],
};

interface PrivyWagmiProviderProps {
  children: React.ReactNode;
}

export function PrivyWagmiProvider({ children }: PrivyWagmiProviderProps) {
  const appId = import.meta.env.VITE_PRIVY_APP_ID;
  
  // During build time or when app ID is not available, render children without any providers
  if (!appId || appId === 'dummy-build-value') {
    return <>{children}</>;
  }

  return (
    <PrivyProvider
      appId={appId}
      config={privyConfig}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}