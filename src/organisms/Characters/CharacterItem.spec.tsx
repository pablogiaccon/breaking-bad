import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import { Character } from 'hooks/useCharacters';
import { theme } from 'styles/theme';

import { CharacterItem } from './CharacterItem';

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

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        back: jest.fn(),
      };
    },
  };
});

describe('CharacterItem', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component', () => {
    const { getByTestId } = render(
      <ChakraProvider theme={theme}>
        <CharacterItem character={mockedCharacter} />,
      </ChakraProvider>,
    );
    expect(getByTestId('character-item')).toBeInTheDocument();
  });
});
