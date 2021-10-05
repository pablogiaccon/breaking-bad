import { render, fireEvent, waitFor } from '@testing-library/react';

import { ButtonSerieFilter } from './ButtonSerieFilter';

const mockedOnSerieChange = jest.fn();

describe('ButtonSerieFilter', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component', () => {
    const { getByTestId } = render(
      <ButtonSerieFilter
        onSerieChange={mockedOnSerieChange}
        serie="Mocked serie"
      />,
    );
    const button = getByTestId('button-serie-filter');

    fireEvent.click(button);

    waitFor(() => {
      expect(mockedOnSerieChange).toHaveBeenCalledWith('Mocked serie');
    });
  });
  it('should to render the component as a active button', () => {
    const { getByTestId } = render(
      <ButtonSerieFilter
        onSerieChange={mockedOnSerieChange}
        serie="Mocked serie"
        isCurrent
      />,
    );
    const button = getByTestId('active-button-serie-filter');

    fireEvent.click(button);

    waitFor(() => {
      expect(mockedOnSerieChange).toHaveBeenCalledWith('Mocked serie');
    });
  });
});
