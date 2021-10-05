import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import { Death } from 'hooks/useDeaths';
import { theme } from 'styles/theme';

import { DeathItem } from './DeathItem';

const mockedDeath: Death = {
  death_id: 39,
  death: 'Gustavo Fring',
  cause:
    'Blown up by pipe bomb detonated by a wheel-chair bell. Also lost the right side of his face.',
  responsible: 'Hector Salamanca and Walter White',
  last_words: 'Hall!',
  season: 4,
  episode: 13,
  number_of_deaths: 1,
};

describe('DeathItem', () => {
  it('should to render the component', () => {
    const { getByTestId } = render(
      <ChakraProvider theme={theme}>
        <DeathItem death={mockedDeath} />
      </ChakraProvider>,
    );
    expect(getByTestId('death-item')).toBeInTheDocument();
  });
});
