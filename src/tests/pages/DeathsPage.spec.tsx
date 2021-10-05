import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import DeathsPage from 'pages/deaths';
import { theme } from 'styles/theme';

let mockedIsLoading = true;

jest.mock('hooks/useDeaths', () => {
  return {
    useDeaths: () => ({
      data: [
        {
          death_id: 40,
          death: 'Bodyguards of Gus Fring',
          cause: 'Multiple gunshots.',
          responsible: 'Walter White',
          last_words: 'What, you got a problem with stairs?',
          season: 4,
          episode: 13,
          number_of_deaths: 2,
        },
        {
          death_id: 28,
          death: 'Cartel Assassins',
          cause: 'Shot in close range.',
          responsible: 'Mike Ehrmantraut',
          last_words: 'Unknown',
          season: 4,
          episode: 4,
          number_of_deaths: 2,
        },
      ],
      isLoading: mockedIsLoading,
    }),
  };
});

describe('DeathsPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component while is loading', () => {
    const { getByTestId, getAllByTestId } = render(
      <ChakraProvider theme={theme}>
        <DeathsPage />
      </ChakraProvider>,
    );

    expect(getByTestId('deaths-page')).toBeInTheDocument();
    expect(getAllByTestId('skeleton-death-item').length).toEqual(7);
  });

  it('should to render the component', () => {
    mockedIsLoading = false;
    const { getByTestId, getAllByTestId } = render(
      <ChakraProvider theme={theme}>
        <DeathsPage />
      </ChakraProvider>,
    );

    expect(getByTestId('deaths-page')).toBeInTheDocument();
    expect(getAllByTestId('death-item').length).toEqual(2);
  });
});
