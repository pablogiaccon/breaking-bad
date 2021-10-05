import { render } from '@testing-library/react';

import { SerieFilter } from './SerieFilter';

const mockedOnSerieChange = jest.fn();

describe('SerieFilter', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component', () => {
    const { getByTestId } = render(
      <SerieFilter
        serie="Better Call Saul"
        onSerieChange={mockedOnSerieChange}
      />,
    );

    expect(getByTestId('serie-filter')).toBeInTheDocument();
  });

  it('should to render the component with serie Breaking Bad', () => {
    const { getByTestId } = render(
      <SerieFilter serie="Breaking Bad" onSerieChange={mockedOnSerieChange} />,
    );

    expect(getByTestId('serie-filter')).toBeInTheDocument();
  });
});
