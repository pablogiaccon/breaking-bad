import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import { Quote } from 'hooks/useQuotes';
import QuotePage from 'pages/random/quote';
import { theme } from 'styles/theme';

const mockedQuote: Quote = {
  quote_id: 9,
  quote: 'Funyuns are awesome.',
  author: 'Jesse Pinkman',
  series: 'Breaking Bad',
};

describe('QuotePage', () => {
  it('should to render the component', () => {
    const { getByTestId } = render(
      <ChakraProvider theme={theme}>
        <QuotePage quote={mockedQuote} />
      </ChakraProvider>,
    );
    expect(getByTestId('quote-item')).toBeInTheDocument();
  });
});
