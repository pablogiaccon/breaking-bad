import { useState } from 'react';

import { SimpleGrid, Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import { useCharacters } from 'hooks/useCharacters';
import { CharacterItem } from 'organisms/Characters/CharacterItem';
import { CharacterItemSkeleton } from 'organisms/Characters/CharacterItemSkeleton';
import { Filters } from 'organisms/Characters/Filters';
import { Layout } from 'organisms/Layout';

interface HomeProps {
  name: string;
  category: string;
}

const Home = ({ name, category }: HomeProps) => {
  const [limit, setLimit] = useState('10');
  const { data, isLoading } = useCharacters({ limit, name, category });

  function handleSetCharactersPerPage(quantity: string) {
    setLimit(quantity);
  }

  return (
    <Layout>
      <Flex direction="column" flex={1}>
        <Filters handleSetCharactersPerPage={handleSetCharactersPerPage} />

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
            {data?.map(character => (
              <CharacterItem key={character.char_id} character={character} />
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </Layout>
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
