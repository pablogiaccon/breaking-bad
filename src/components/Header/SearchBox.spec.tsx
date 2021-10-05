import { render, fireEvent, waitFor } from '@testing-library/react';

import { SearchBox } from './SearchBox';

let mockedQuery = {};
const mockedPush = jest.fn();

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      query: mockedQuery,
      push: mockedPush,
    }),
  };
});

describe('SearchBox', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component', () => {
    const { getByPlaceholderText } = render(<SearchBox />);

    expect(getByPlaceholderText('Search for a character')).toBeInTheDocument();
  });

  it('should to update input value if there is a query params like search', () => {
    mockedQuery = { search: 'John Doe' };
    const { getByPlaceholderText } = render(<SearchBox />);

    expect(getByPlaceholderText('Search for a character')).toHaveValue(
      'John Doe',
    );
  });

  it('should to redirect user to page characters when do a search', () => {
    const { getByTestId, getByPlaceholderText } = render(<SearchBox />);
    const input = getByPlaceholderText('Search for a character');
    const form = getByTestId('search-form');

    fireEvent.change(input, { target: { value: 'Walter' } });
    fireEvent.submit(form);

    waitFor(() => {
      expect(mockedPush).toHaveBeenCalledWith('/?search=Walter');
    });
  });

  it('should to redirect user to page characters when do a empty search', () => {
    const { getByTestId, getByPlaceholderText } = render(<SearchBox />);
    const input = getByPlaceholderText('Search for a character');
    const form = getByTestId('search-form');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.submit(form);

    waitFor(() => {
      expect(mockedPush).toHaveBeenCalledWith('/');
    });
  });
});
