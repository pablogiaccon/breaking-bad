import { Button, Flex, HStack, Text } from '@chakra-ui/react';

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
        <Button
          size="sm"
          fontSize="xs"
          colorScheme="pink"
          onClick={() => onSerieChange('Breaking Bad')}
        >
          Breaking Bad
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          colorScheme="pink"
          onClick={() => onSerieChange('Better Call Saul')}
        >
          Better Call Saul
        </Button>
      </HStack>
    </Flex>
  );
}
