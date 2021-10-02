import { HStack, Text, Flex } from '@chakra-ui/react';

import { PaginationItem } from 'components/Pagination/PaginationItem';

interface SeasonsFilterProps {
  season: number;
  onSeasonChange: (page: number) => void;
  series: string;
}

export function SeasonsFilter({
  season,
  onSeasonChange,
  series,
}: SeasonsFilterProps) {
  const seasonsForBreakingBad = [1, 2, 3, 4, 5];
  const seasonsForBetterCallSaul = [1, 2, 3, 4];

  const seasons =
    series === 'Breaking Bad'
      ? seasonsForBreakingBad
      : seasonsForBetterCallSaul;
  return (
    <Flex align="center" ml="auto">
      <Text mr="2" color="gray.400">
        Seasons:
      </Text>

      <HStack spacing="2">
        {seasons.map(item => (
          <PaginationItem
            key={item}
            onPageChange={onSeasonChange}
            pageNumber={item}
            isCurrent={season === item}
          />
        ))}
      </HStack>
    </Flex>
  );
}
