// Custom hook for API calls with error handling and loading states
import { useState, useCallback } from 'react';
import ApiClient from '../utils/api';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>() {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (apiCall: () => Promise<T>) => {
    setState({ data: null, loading: true, error: null });
    
    try {
      const result = await apiCall();
      setState({ data: result, loading: false, error: null });
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState({ data: null, loading: false, error: errorMessage });
      throw error;
    }
  }, []);

  return { ...state, execute };
}

// Specific hooks for common API calls
export function useAssets() {
  const { data, loading, error, execute } = useApi<{
    success: boolean;
    assets: any[];
    total: number;
    pagination: any;
  }>();

  const fetchAssets = useCallback((params?: {
    category?: string;
    limit?: number;
    offset?: number;
  }) => {
    return execute(() => ApiClient.getAssets(params));
  }, [execute]);

  return {
    assets: data?.assets || [],
    total: data?.total || 0,
    pagination: data?.pagination,
    loading,
    error,
    fetchAssets,
  };
}

export function useInvestment() {
  const { data, loading, error, execute } = useApi<{
    success: boolean;
    investment: any;
    transactionId: string;
    nftDetails: any;
  }>();

  const invest = useCallback((assetId: string, amount: number, paymentMethod: string) => {
    return execute(() => ApiClient.investInAsset(assetId, amount, paymentMethod));
  }, [execute]);

  return {
    investmentData: data,
    loading,
    error,
    invest,
  };
}