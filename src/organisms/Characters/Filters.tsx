import { Flex, Select } from '@chakra-ui/react';

interface FiltersProps {
  handleSetCharactersPerPage(quantity: string): void;
  limit: string;
}

export function Filters({ handleSetCharactersPerPage, limit }: FiltersProps) {
  return (
    <Flex>
      <Select
        borderColor="gray.700"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        width="max-content"
        onChange={e => handleSetCharactersPerPage(e.target.value)}
        value={limit}
      >
        <option
          value="10"
          style={{
            backgroundColor: '#1f2029',
            color: '#d1d2dc',
          }}
        >
          10 characters per page
        </option>
        <option
          value="20"
          style={{
            backgroundColor: '#1f2029',
            color: '#d1d2dc',
          }}
        >
          20 characters per page
        </option>
        <option
          value="30"
          style={{
            backgroundColor: '#1f2029',
            color: '#d1d2dc',
          }}
        >
          30 characters per page
        </option>
      </Select>
    </Flex>
  );
}
