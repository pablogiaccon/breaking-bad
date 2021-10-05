import { render, fireEvent, waitFor } from '@testing-library/react';

import { PaginationItem } from './PaginationItem';

const mockedOnPageChange = jest.fn();
const mockedPageNumber = 1;

describe('PaginationItem', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component', () => {
    const { getByTestId, queryByTestId } = render(
      <PaginationItem
        onPageChange={mockedOnPageChange}
        pageNumber={mockedPageNumber}
      />,
    );

    expect(getByTestId('pagination-item')).toBeInTheDocument();
    expect(queryByTestId('active-pagination-item')).not.toBeInTheDocument();
  });

  it('should to render the component as an active pagination item', () => {
    const { getByTestId, queryByTestId } = render(
      <PaginationItem
        onPageChange={mockedOnPageChange}
        pageNumber={mockedPageNumber}
        isCurrent
      />,
    );

    expect(getByTestId('active-pagination-item')).toBeInTheDocument();
    expect(queryByTestId('pagination-item')).not.toBeInTheDocument();
  });

  it('should to call onPageChange function when click', () => {
    const { getByTestId } = render(
      <PaginationItem
        onPageChange={mockedOnPageChange}
        pageNumber={mockedPageNumber}
      />,
    );

    const buttonPaginationItem = getByTestId('pagination-item');
    fireEvent.click(buttonPaginationItem);

    waitFor(() => {
      expect(mockedOnPageChange).toHaveBeenCalled();
    });
  });
});
