import { GetStaticProps } from 'next';

import { Character, getRandomCharacter } from 'hooks/useCharacters';
import { CharacterInformation } from 'organisms/Characters/CharacterInformation';
import { Layout } from 'organisms/Layout';

interface CharacterProps {
  character: Character;
}

const RandomCharacterPage = ({ character }: CharacterProps) => {
  return (
    <Layout>
      <CharacterInformation character={character} />
    </Layout>
  );
};

export default RandomCharacterPage;

export const getStaticProps: GetStaticProps = async () => {
  const character = await getRandomCharacter();

  return {
    props: {
      character,
    },
  };
};
