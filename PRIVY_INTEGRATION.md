# Privy Authentication Integration

This document explains how Privy authentication has been integrated into the ErisRWA marketplace platform.

## Overview

Privy provides seamless Web3 authentication with support for:
- **Wallet connections** (MetaMask, WalletConnect, etc.)
- **Email login** with automatic wallet creation
- **Social logins** (Google, Twitter, etc.)
- **Embedded wallets** for users without existing wallets

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file with your Privy App ID:

```bash
# Privy Configuration
VITE_PRIVY_APP_ID=your_privy_app_id_here

# For build time when app ID is not available, use this value
# VITE_PRIVY_APP_ID=dummy-build-value
```

**To get your Privy App ID:**
1. Visit [Privy Dashboard](https://dashboard.privy.io)
2. Create a new app or select existing app
3. Copy the App ID from your dashboard

### 2. Dependencies

The following packages are installed:
- `@privy-io/react-auth` - Privy authentication hooks
- `@privy-io/wagmi` - Wagmi integration for wallet management
- `@tanstack/react-query` - Query management
- `wagmi` - Ethereum library
- `viem` - TypeScript interface for Ethereum

## Architecture

### Provider Structure

```
App
├── PrivyWagmiProvider (Web3 setup)
│   ├── PrivyProvider (Authentication)
│   ├── QueryClientProvider (React Query)
│   └── WagmiProvider (Wallet management)
└── AuthProvider (App-specific auth logic)
```

### Key Components

1. **PrivyWagmiProvider** (`src/providers/privy-provider.tsx`)
   - Wraps the entire app with Privy and Web3 functionality
   - Configures Privy with Flow Testnet support
   - Handles cases where Privy isn't configured

2. **AuthContext** (`src/context/AuthContext.tsx`)
   - Integrates Privy authentication with existing auth system
   - Creates user profiles for Privy-authenticated users
   - Manages both traditional and Web3 authentication

3. **Login Component** (`src/pages/auth/Login.tsx`)
   - Provides "Connect Wallet with Privy" button
   - Auto-redirects authenticated users
   - Maintains existing demo and traditional login options

## Features

### Authentication Options

The login page now offers multiple authentication methods:

1. **Web3 Authentication via Privy**
   - Wallet connection (MetaMask, WalletConnect, etc.)
   - Email login with embedded wallet creation
   - Social logins (Google, Twitter, etc.)

2. **Demo Accounts** (existing)
   - Pre-configured investor and originator accounts
   - Immediate access with sample data

3. **Traditional Login** (existing)
   - Email/password authentication
   - User type selection (investor/originator)

### User Experience

- **Seamless Integration**: Privy users get the same experience as traditional users
- **Wallet Display**: Connected wallet addresses shown in header
- **Automatic Profile Creation**: New Privy users get investor profiles by default
- **Session Persistence**: Authentication state maintained across browser sessions

### Configuration

The Privy provider is configured with:

```typescript
const privyConfig: PrivyClientConfig = {
  loginMethods: ['email', 'wallet', 'google', 'twitter'],
  appearance: {
    theme: 'light',
    accentColor: '#6366f1', // ErisRWA indigo theme
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
```

## Usage Examples

### Check Authentication Status

```typescript
import { useAuth } from '../context/AuthContext';

const MyComponent = () => {
  const { 
    user, 
    isPrivyAuthenticated, 
    walletAddress,
    loginWithPrivy,
    logout 
  } = useAuth();

  if (isPrivyAuthenticated) {
    return <div>Connected with wallet: {walletAddress}</div>;
  }

  return <button onClick={loginWithPrivy}>Connect Wallet</button>;
};
```

### User Profile with Wallet

```typescript
interface User {
  id: string;
  email: string;
  name: string;
  type: 'investor' | 'rwa-project';
  walletAddress?: string;      // Wallet address if connected via Privy
  isPrivyUser?: boolean;       // Flag indicating Privy authentication
  // ... other fields
}
```

## Flow Blockchain Integration

The integration is configured for Flow blockchain:

- **Testnet**: Chain ID 545
- **RPC URL**: https://testnet.evm.nodes.onflow.org
- **Explorer**: https://evm-testnet.flowscan.io

Users can connect wallets and interact with Flow-based smart contracts for:
- RWA token purchases
- NFT certificate minting
- DeFi interactions

## Troubleshooting

### Build Issues

If you encounter build issues:

1. **Missing App ID**: Set `VITE_PRIVY_APP_ID=dummy-build-value` for builds without real Privy setup
2. **Rollup Warnings**: Comment warnings from Privy are normal and don't affect functionality

### Development

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. **Test Privy Integration**:
   - Visit http://localhost:5173
   - Click "Connect Wallet with Privy"
   - Test with different authentication methods

### Production Deployment

1. Set real Privy App ID in production environment
2. Configure proper domain in Privy dashboard
3. Ensure HTTPS for wallet connections

## Security Considerations

- **Environment Variables**: Never commit real Privy App IDs to version control
- **Wallet Security**: Privy handles secure wallet management and key storage
- **Session Management**: Authentication state is managed securely by Privy
- **Flow Integration**: Smart contract interactions use secure Web3 patterns

## Future Enhancements

Potential improvements:
- **Account Abstraction**: Gasless transactions for better UX
- **Multi-chain Support**: Extend beyond Flow to other blockchains
- **Advanced Features**: Wallet analytics, transaction history
- **Enterprise Features**: Bulk wallet management, advanced permissions