import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const { asPath } = useRouter();

  useEffect(() => {
    /* istanbul ignore next */
    disclosure.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  /* istanbul ignore next */
  return (
    <SidebarDrawerContext.Provider
      value={disclosure}
      data-testid="sidebar-context"
    >
      {children}
    </SidebarDrawerContext.Provider>
  );
}
/* istanbul ignore next */
export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
