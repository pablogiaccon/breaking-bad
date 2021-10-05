import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import { Character } from 'hooks/useCharacters';
import { Death } from 'hooks/useDeaths';
import RandomCharacterPage from 'pages/random/character';
import { theme } from 'styles/theme';

const mockedCharacter: Character = {
  char_id: 1,
  name: 'Walter White',
  birthday: '09-07-1958',
  occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
  img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
  status: 'Presumed dead',
  nickname: 'Heisenberg',
  appearance: ['1', '2', '3', '4', '5'],
  portrayed: 'Bryan Cranston',
  category: ['Breaking Bad'],
  better_call_saul_appearance: [],
};

const mockedQuotes = [
  {
    quote_id: 9,
    quote: 'Funyuns are awesome.',
    author: 'Jesse Pinkman',
    series: 'Breaking Bad',
  },
];

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

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        back: jest.fn(),
      };
    },
  };
});

describe('RandomCharacterPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component', () => {
    const { getByTestId } = render(
      <ChakraProvider theme={theme}>
        <RandomCharacterPage
          character={mockedCharacter}
          quotes={mockedQuotes}
          deaths_count={0}
          death_information={mockedDeath}
        />
      </ChakraProvider>,
    );
    expect(getByTestId('character-information')).toBeInTheDocument();
    expect(getByTestId('quote-item')).toBeInTheDocument();
    expect(getByTestId('death-item')).toBeInTheDocument();
  });
});
