import { Flex } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { Title } from 'components/Title';
import { Character, getCharacterById } from 'hooks/useCharacters';
import { Death, getDeathsCount, getIndividualDeath } from 'hooks/useDeaths';
import { getQuotesByAuthor, Quote } from 'hooks/useQuotes';
import { CharacterInformation } from 'organisms/Characters/CharacterInformation';

interface CharacterProps {
  character: Character;
  quotes: Array<Quote>;
  death_information: Death;
  deaths_count: number;
}

const CharacterPage = ({
  character,
  quotes,
  death_information,
  deaths_count,
}: CharacterProps) => {
  return (
    <>
      <Head>
        <title>{character.name} - Breaking Bad</title>
      </Head>
      <Flex direction="column" flex={1}>
        <Flex align="center" justify="space-between" mb="6">
          <Title>Character information</Title>
        </Flex>
        <CharacterInformation
          character={character}
          quotes={quotes}
          death_information={death_information}
          deaths_count={deaths_count}
        />
      </Flex>
    </>
  );
};

export default CharacterPage;

/* istanbul ignore next */
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

/* istanbul ignore next */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const character = await getCharacterById({
    char_id: String(params?.char_id),
  });

  const quotes = await getQuotesByAuthor({ author: character.name });
  let deaths_count;
  let death_information: Death = {} as Death;

  if (character.category.some(item => item === 'Breaking Bad')) {
    deaths_count = await getDeathsCount({ name: character.name });
    death_information = await getIndividualDeath({ name: character.name });
  }

  return {
    props: {
      character,
      quotes,
      deaths_count: deaths_count || null,
      death_information: death_information || null,
    },
    revalidate: 60 * 60 * 24, // 24hs
  };
};
