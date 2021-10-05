import { render, fireEvent, waitFor } from '@testing-library/react';

import { SeasonsFilter } from './SeasonsFilter';

const mockedOnSeasonChange = jest.fn();

describe('SeasonsFilter', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component', () => {
    const { getByTestId } = render(
      <SeasonsFilter
        season={1}
        onSeasonChange={mockedOnSeasonChange}
        series="Mocked series"
      />,
    );

    expect(getByTestId('seasons-filter')).toBeInTheDocument();
  });

  it('should to render the component with serie Breaking Bad', () => {
    const { getByTestId } = render(
      <SeasonsFilter
        season={1}
        onSeasonChange={mockedOnSeasonChange}
        series="Breaking Bad"
      />,
    );

    expect(getByTestId('seasons-filter')).toBeInTheDocument();
  });
});
