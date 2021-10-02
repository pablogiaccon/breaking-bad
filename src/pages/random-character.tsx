import { GetServerSideProps } from 'next';

import { Character, getRandomCharacter } from 'hooks/useCharacters';
import { CharacterInformation } from 'organisms/Characters/CharacterInformation';

interface CharacterProps {
  character: Character;
}

const RandomCharacterPage = ({ character }: CharacterProps) => {
  return <CharacterInformation character={character} />;
};

export default RandomCharacterPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const character = await getRandomCharacter();

  return {
    props: {
      character,
    },
  };
};
