import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  colors: {
    gray: {
      '900': '#181b23',
      '800': '#1f2029',
      '700': '#353646',
      '600': '#4b4d63',
      '500': '#616480',
      '400': '#797d9a',
      '300': '#9699b0',
      '200': '#b3b5c6',
      '100': '#d1d2dc',
      '50': '#eeeef2',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: 'gray.900',
        color: 'gray.50',
        // bg: mode('gray.50', 'gray.900')(props),
        // color: mode('gray.800', 'gray.50')(props),
      },
    }),
  },
});

// ::-webkit-scrollbar-track {
//   background-color: #f4f4f4;
// }

// scrollbar-track-color: #f4f4f4;
// ::-webkit-scrollbar {
//   width: 6px;
//   background: #f4f4f4;
// }
// ::-webkit-scrollbar-thumb {
//   background: var(--gray_200);
// }

// scrollbar-base-color: var(--gray_200);
