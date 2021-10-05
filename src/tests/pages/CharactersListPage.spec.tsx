import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import CharactersPage from 'pages';
import { theme } from 'styles/theme';

let mockedIsLoading = true;

jest.mock('hooks/useCharacters', () => {
  return {
    useCharacters: () => ({
      data: [
        {
          char_id: 1,
          name: 'Walter White',
          birthday: '09-07-1958',
          occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
          img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          status: 'Presumed dead',
          nickname: 'Heisenberg',
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'Bryan Cranston',
          category: 'Breaking Bad',
          better_call_saul_appearance: [],
        },
        {
          char_id: 2,
          name: 'Jesse Pinkman',
          birthday: '09-24-1984',
          occupation: ['Meth Dealer'],
          img: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441',
          status: 'Alive',
          nickname: "Cap n' Cook",
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'Aaron Paul',
          category: 'Breaking Bad',
          better_call_saul_appearance: [],
        },
      ],
      isLoading: mockedIsLoading,
    }),
  };
});

describe('CharactersPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component while is loading', () => {
    const { getByTestId, getAllByTestId } = render(
      <ChakraProvider theme={theme}>
        <CharactersPage />
      </ChakraProvider>,
    );

    expect(getByTestId('characters-list-page')).toBeInTheDocument();
    expect(getAllByTestId('skeleton-death-item').length).toEqual(7);
  });

  it('should to render the component', () => {
    mockedIsLoading = false;
    const { getByTestId, getAllByTestId } = render(
      <ChakraProvider theme={theme}>
        <CharactersPage />
      </ChakraProvider>,
    );

    expect(getByTestId('characters-list-page')).toBeInTheDocument();
    expect(getAllByTestId('death-item').length).toEqual(2);
  });
});
