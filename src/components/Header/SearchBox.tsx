import { useState, useEffect, FormEvent, useCallback } from 'react';

import { Flex, Input, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
  const { query, push } = useRouter();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (query.search) {
      setSearch(String(query.search));
    }
  }, [query]);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (search) {
        push(`/?search=${search}`);
      } else {
        push('/');
      }
    },
    [push, search],
  );
  return (
    <Flex
      as="form"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      onSubmit={handleSubmit}
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Find for a character"
        _placeholder={{ color: 'gray.400' }}
        value={search}
        onChange={event => setSearch(event.target.value)}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
