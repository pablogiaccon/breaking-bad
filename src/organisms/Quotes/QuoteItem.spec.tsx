import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import { Quote } from 'hooks/useQuotes';
import { theme } from 'styles/theme';

import { QuoteItem } from './QuoteItem';

const mockedQuote: Quote = {
  quote_id: 9,
  quote: 'Funyuns are awesome.',
  author: 'Jesse Pinkman',
  series: 'Breaking Bad',
};

describe('QuoteItem', () => {
  it('should to render the component', () => {
    const { getByTestId } = render(
      <ChakraProvider theme={theme}>
        <QuoteItem quote={mockedQuote} />
      </ChakraProvider>,
    );
    expect(getByTestId('quote-item')).toBeInTheDocument();
  });
});
