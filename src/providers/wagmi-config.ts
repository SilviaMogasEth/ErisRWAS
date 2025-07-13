import { http, createConfig } from 'wagmi';
import { defineChain } from 'viem';

// Define Flow Testnet chain
export const flowTestnet = defineChain({
  id: 545,
  name: 'Flow Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Flow',
    symbol: 'FLOW',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet.evm.nodes.onflow.org'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Flow Testnet Explorer',
      url: 'https://evm-testnet.flowscan.io',
    },
  },
  testnet: true,
});

// Create wagmi config
export const wagmiConfig = createConfig({
  chains: [flowTestnet],
  transports: {
    [flowTestnet.id]: http(),
  },
});