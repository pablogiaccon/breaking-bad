import { Button } from '@chakra-ui/react';

interface ButtonSerieFilterProps {
  isCurrent?: boolean;
  serie: string;
  onSerieChange: (season: string) => void;
}

export function ButtonSerieFilter({
  isCurrent = false,
  serie,
  onSerieChange,
}: ButtonSerieFilterProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
        onClick={() => onSerieChange(serie)}
      >
        {serie}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      bgColor="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => onSerieChange(serie)}
    >
      {serie}
    </Button>
  );
}
