import { Button, Flex, HStack, Text } from '@chakra-ui/react';

import { ButtonSerieFilter } from './ButtonSerieFilter';

interface SerieFilterProps {
  serie: string;
  onSerieChange: (serie: string) => void;
}

export function SerieFilter({ serie, onSerieChange }: SerieFilterProps) {
  return (
    <Flex align="center" ml="auto">
      <Text mr="2" color="gray.400">
        Serie:
      </Text>

      <HStack spacing="2">
        <ButtonSerieFilter
          isCurrent={serie === 'Breaking Bad'}
          serie="Breaking Bad"
          onSerieChange={onSerieChange}
        />

        <ButtonSerieFilter
          isCurrent={serie === 'Better Call Saul'}
          serie="Better Call Saul"
          onSerieChange={onSerieChange}
        />
      </HStack>
    </Flex>
  );
}
