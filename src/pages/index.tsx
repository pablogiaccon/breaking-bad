import { SimpleGrid } from '@chakra-ui/react';

import { CharacterItem } from 'components/CharacterItem';
import { useCharacters } from 'hooks/useCharacters';
import { Layout } from 'organisms/Layout';

const Home = () => {
  const { data } = useCharacters();
  return (
    <Layout>
      <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
        {data?.map(character => (
          <CharacterItem character={character} />
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
