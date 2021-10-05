import { render, fireEvent, waitFor } from '@testing-library/react';

import { Filters } from './Filters';

const mockedHandleSetCharacterPerPage = jest.fn();

describe('Filters', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component', () => {
    const { getByTestId } = render(
      <Filters
        limit="10"
        handleSetCharactersPerPage={mockedHandleSetCharacterPerPage}
      />,
    );
    const select = getByTestId('select-filters');
    fireEvent.change(select, { target: { value: '20' } });

    waitFor(() => {
      expect(mockedHandleSetCharacterPerPage).toHaveBeenCalledWith('20');
    });
  });
});
