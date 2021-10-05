import { ReactNode } from 'react';

import { Box, Flex } from '@chakra-ui/react';

import { Header } from 'components/Header';
import { SideBar } from 'components/Sidebar';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        {children}
      </Flex>
    </Box>
  );
}
