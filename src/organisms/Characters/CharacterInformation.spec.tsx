import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import { Character } from 'hooks/useCharacters';
import { Death } from 'hooks/useDeaths';
import { theme } from 'styles/theme';

import { CharacterInformation } from './CharacterInformation';

let mockedCharacter: Character = {
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

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        back: jest.fn(),
      };
    },
  };
});

describe('CharacterInformation', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component', () => {
    const { getByTestId } = render(
      <ChakraProvider theme={theme}>
        <CharacterInformation
          character={mockedCharacter}
          quotes={[]}
          deaths_count={0}
          death_information={{} as Death}
        />
      </ChakraProvider>,
    );
    expect(getByTestId('character-information')).toBeInTheDocument();
  });

  it('should to render the component with character of better call saul', () => {
    mockedCharacter = {
      ...mockedCharacter,
      better_call_saul_appearance: ['1'],
    };
    const { getByText } = render(
      <ChakraProvider theme={theme}>
        <CharacterInformation
          character={mockedCharacter}
          quotes={[]}
          deaths_count={0}
          death_information={{} as Death}
        />
      </ChakraProvider>,
    );
    expect(getByText('Appearance in Better Call Saul:')).toBeInTheDocument();
  });

  it('should to render the component with character and quotes', () => {
    const mockedQuotes = [
      {
        quote_id: 9,
        quote: 'Funyuns are awesome.',
        author: 'Jesse Pinkman',
        series: 'Breaking Bad',
      },
    ];
    const { getByText } = render(
      <ChakraProvider theme={theme}>
        <CharacterInformation
          character={mockedCharacter}
          quotes={mockedQuotes}
          deaths_count={0}
          death_information={{} as Death}
        />
      </ChakraProvider>,
    );
    expect(getByText('"Funyuns are awesome."')).toBeInTheDocument();
  });
});
