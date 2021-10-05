import { render, fireEvent, waitFor } from '@testing-library/react';

import { Pagination } from '.';

const mockedOnPageChange = jest.fn();

describe('Pagination', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should to render the component', () => {
    const { getByTestId, getAllByTestId } = render(
      <Pagination
        totalCountOfRegisters={30}
        onPageChange={mockedOnPageChange}
      />,
    );

    expect(getByTestId('pagination')).toBeInTheDocument();
  });

  it('should to render the quantity of items correctly when it is the first page', () => {
    const { getByTestId, getAllByTestId, queryAllByTestId } = render(
      <Pagination
        totalCountOfRegisters={100}
        onPageChange={mockedOnPageChange}
        currentPage={1}
        registersPerPage={10}
      />,
    );

    expect(getAllByTestId('pagination-item').length).toEqual(2);
    expect(queryAllByTestId('pagination-item').length).not.toBeGreaterThan(2);
    expect(getByTestId('active-pagination-item')).toBeInTheDocument();
  });

  it('should to render the quantity of items correctly when it is the last page', () => {
    const { getByTestId, getAllByTestId, queryAllByTestId } = render(
      <Pagination
        totalCountOfRegisters={100}
        onPageChange={mockedOnPageChange}
        currentPage={10}
        registersPerPage={10}
      />,
    );

    expect(getAllByTestId('pagination-item').length).toEqual(2);
    expect(queryAllByTestId('pagination-item').length).not.toBeGreaterThan(2);
    expect(getByTestId('active-pagination-item')).toBeInTheDocument();
  });

  it('should to render the quantity of items correctly when it is the second page', () => {
    const { getByTestId, getAllByTestId, queryAllByTestId } = render(
      <Pagination
        totalCountOfRegisters={100}
        onPageChange={mockedOnPageChange}
        currentPage={2}
        registersPerPage={10}
      />,
    );

    expect(getAllByTestId('pagination-item').length).toEqual(3);
    expect(queryAllByTestId('pagination-item').length).not.toBeGreaterThan(3);
    expect(getByTestId('active-pagination-item')).toBeInTheDocument();
  });

  it('should to render the quantity of items correctly when it is the penultimate page', () => {
    const { getByTestId, getAllByTestId, queryAllByTestId } = render(
      <Pagination
        totalCountOfRegisters={100}
        onPageChange={mockedOnPageChange}
        currentPage={9}
        registersPerPage={10}
      />,
    );

    expect(getAllByTestId('pagination-item').length).toEqual(3);
    expect(queryAllByTestId('pagination-item').length).not.toBeGreaterThan(3);
    expect(getByTestId('active-pagination-item')).toBeInTheDocument();
  });

  it('should to render the quantity of items correctly when it is the middle page', () => {
    const { getByTestId, getAllByTestId, queryAllByTestId } = render(
      <Pagination
        totalCountOfRegisters={100}
        onPageChange={mockedOnPageChange}
        currentPage={5}
        registersPerPage={10}
      />,
    );

    expect(getAllByTestId('pagination-item').length).toEqual(4);
    expect(queryAllByTestId('pagination-item').length).not.toBeGreaterThan(4);
    expect(getByTestId('active-pagination-item')).toBeInTheDocument();
  });

  it('should to render the quantity of items correctly when the registersPerPage it is equal or less than totalCountOfRegisters', () => {
    const { getByTestId, queryByTestId } = render(
      <Pagination
        totalCountOfRegisters={9}
        onPageChange={mockedOnPageChange}
        currentPage={1}
        registersPerPage={10}
      />,
    );

    expect(queryByTestId('pagination-item')).not.toBeInTheDocument();
    expect(getByTestId('active-pagination-item')).toBeInTheDocument();
  });

  it('should to render the quantity of items correctly when the totalCountOfRegisters it is greater than registersPerPage but not greater than registersPerPage * 2', () => {
    const { getByTestId, getAllByTestId, queryAllByTestId } = render(
      <Pagination
        totalCountOfRegisters={12}
        onPageChange={mockedOnPageChange}
        currentPage={1}
        registersPerPage={10}
      />,
    );

    expect(getAllByTestId('pagination-item').length).toEqual(1);
    expect(queryAllByTestId('pagination-item').length).not.toBeGreaterThan(1);
    expect(getByTestId('active-pagination-item')).toBeInTheDocument();
  });
});
