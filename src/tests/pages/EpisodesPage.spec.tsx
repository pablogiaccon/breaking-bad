import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import EpisodesPage from 'pages/episodes';
import { theme } from 'styles/theme';

jest.mock('hooks/useEpisodes', () => {
  return {
    useEpisodes: () => ({
      data: [
        {
          episode_id: 1,
          title: 'Pilot',
          season: '1',
          air_date: '01-20-2008',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Krazy-8',
            'Bogdan Wolynetz',
          ],
          episode: '1',
          series: 'Breaking Bad',
        },
        {
          episode_id: 2,
          title: "Cat's in the Bag...",
          season: '1',
          air_date: '01-27-2008',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Walter White Jr.',
            'Krazy-8',
          ],
          episode: '2',
          series: 'Breaking Bad',
        },
      ],
    }),
  };
});

describe('EpisodesPage', () => {
  it('should to render the component', () => {
    const { getByTestId, getAllByTestId } = render(
      <ChakraProvider theme={theme}>
        <EpisodesPage />
      </ChakraProvider>,
    );

    expect(getByTestId('episodes-page')).toBeInTheDocument();
    expect(getAllByTestId('episode-item').length).toEqual(2);
  });
});
