import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ContextProviders } from 'contexts';
import { queryClient } from 'services/queryClient';
import { theme } from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ContextProviders>
          <Component {...pageProps} />
        </ContextProviders>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default MyApp;
