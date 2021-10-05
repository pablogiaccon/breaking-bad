import { ReactNode } from 'react';

import { SidebarDrawerProvider } from './SidebarDrawerContext';

type ContextData = {
  children: ReactNode;
};

export function ContextProviders({ children }: ContextData) {
  return <SidebarDrawerProvider>{children}</SidebarDrawerProvider>;
}

export * from './SidebarDrawerContext';
