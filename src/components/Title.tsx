import { ReactNode } from 'react';

import { Heading } from '@chakra-ui/react';

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <Heading as="h2" size="lg" color="pink.500">
      {children}
    </Heading>
  );
}
