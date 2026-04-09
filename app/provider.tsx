'use client';

import { StoreProvider } from '@/core/store/provider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}