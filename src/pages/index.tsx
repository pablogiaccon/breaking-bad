import { useState, useCallback } from 'react';

import { SimpleGrid, Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Pagination } from 'components/Pagination';
import { Title } from 'components/Title';
import { Character, useCharacters } from 'hooks/useCharacters';
import { CharacterItem } from 'organisms/Characters/CharacterItem';
import { CharacterItemSkeleton } from 'organisms/Characters/CharacterItemSkeleton';
import { Filters } from 'organisms/Characters/Filters';

interface HomeProps {
  name: string;
  category: string;
}

const Home = ({ name, category }: HomeProps) => {
  const [limit, setLimit] = useState('10');
  const [offset, setOffset] = useState('0');
  const [page, setPage] = useState(1);
  const { data, isLoading } = useCharacters({ limit, name, category, offset });

  function handleSetCharactersPerPage(quantity: string) {
    setLimit(quantity);
  }

  const handleSetOffset = useCallback(
    (selectedPage: number) => {
      setPage(selectedPage);
      const result = Number(limit) * (selectedPage - 1);

      setOffset(String(result));
    },
    [limit],
  );

  return (
    <>
      <Head>
        <title>Characters - Breaking Bad</title>
      </Head>
      <Flex direction="column" flex={1}>
        <Flex align="center" justify="space-between" mb="6">
          <Title>Characters</Title>
          <Filters
            handleSetCharactersPerPage={handleSetCharactersPerPage}
            limit={limit}
          />
        </Flex>

        {isLoading ? (
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            <CharacterItemSkeleton />
            <CharacterItemSkeleton />
            <CharacterItemSkeleton />
            <CharacterItemSkeleton />
            <CharacterItemSkeleton />
            <CharacterItemSkeleton />
            <CharacterItemSkeleton />
          </SimpleGrid>
        ) : (
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            {data?.map((character: Character) => (
              <CharacterItem key={character.char_id} character={character} />
            ))}
          </SimpleGrid>
        )}

        <Pagination
          onPageChange={handleSetOffset}
          totalCountOfRegisters={62}
          currentPage={page}
          registersPerPage={Number(limit)}
        />
      </Flex>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      name: query.search || null,
      category: query.category || null,
    },
  };
};
