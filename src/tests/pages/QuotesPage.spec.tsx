import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import { Quote } from 'hooks/useQuotes';
import QuotesPage from 'pages/quotes';
import { theme } from 'styles/theme';

let mockedIsLoading = false;
const mockedQuotes: Quote[] = [
  {
    quote_id: 1,
    quote: 'I am not in danger, Skyler. I am the danger!',
    author: 'Walter White',
    series: 'Breaking Bad',
  },
  {
    quote_id: 2,
    quote: 'Stay out of my territory.',
    author: 'Walter White',
    series: 'Breaking Bad',
  },
];

jest.mock('hooks/useQuotes', () => {
  return {
    useQuotes: () => ({
      data: mockedQuotes,
      isLoading: mockedIsLoading,
    }),
  };
});

describe('QuotesPage', () => {
  it('should to render the component', () => {
    const { getByTestId, getAllByTestId } = render(
      <ChakraProvider theme={theme}>
        <QuotesPage />
      </ChakraProvider>,
    );

    expect(getByTestId('quotes-page')).toBeInTheDocument();
    expect(getAllByTestId('quote-item').length).toEqual(2);
  });

  it('should to render the component while is loading', () => {
    mockedIsLoading = true;
    const { getByTestId, getAllByTestId } = render(
      <ChakraProvider theme={theme}>
        <QuotesPage />
      </ChakraProvider>,
    );

    expect(getByTestId('quotes-page')).toBeInTheDocument();
    expect(getAllByTestId('skeleton-quote-item').length).toEqual(7);
  });
});
