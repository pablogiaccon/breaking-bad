import { GetStaticProps, GetStaticPaths } from 'next';

import { Character, getCharacterById } from 'hooks/useCharacters';
import { CharacterInformation } from 'organisms/Characters/CharacterInformation';

interface CharacterProps {
  character: Character;
}

const CharacterPage = ({ character }: CharacterProps) => {
  return <CharacterInformation character={character} />;
};

export default CharacterPage;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { char_id: '1' } },
      { params: { char_id: '2' } },
      { params: { char_id: '3' } },
      { params: { char_id: '4' } },
      { params: { char_id: '5' } },
      { params: { char_id: '6' } },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const character = await getCharacterById({
    char_id: String(params?.char_id),
  });

  return {
    props: {
      character,
    },
    revalidate: 60 * 60 * 24, // 24hs
  };
};
