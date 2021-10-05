import { useMemo } from 'react';

import { Stack, Box, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = useMemo(() => {
    if (totalCountOfRegisters % registersPerPage === 0)
      return Math.floor(totalCountOfRegisters / registersPerPage);
    return Math.floor(totalCountOfRegisters / registersPerPage) + 1;
  }, [registersPerPage, totalCountOfRegisters]);

  const previousPages = useMemo(() => {
    return currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  }, [currentPage]);

  const nextPages = useMemo(() => {
    return currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : /* istanbul ignore next */ [];
  }, [currentPage, lastPage]);

  const visualizationPagesStart = useMemo(() => {
    return registersPerPage * (currentPage - 1);
  }, [currentPage, registersPerPage]);

  const visualizationPagesEnd = useMemo(() => {
    if (totalCountOfRegisters <= registersPerPage) return totalCountOfRegisters;
    return registersPerPage * (currentPage - 1) + registersPerPage;
  }, [registersPerPage, currentPage, totalCountOfRegisters]);

  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
      data-testid="pagination"
    >
      <Box>
        <strong>{visualizationPagesStart}</strong> -{' '}
        <strong>{visualizationPagesEnd}</strong> de{' '}
        <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" w="8" align="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map(page => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                pageNumber={page}
              />
            );
          })}

        <PaginationItem
          onPageChange={onPageChange}
          pageNumber={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map(page => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                pageNumber={page}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" w="8" align="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
