import { Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Title } from 'components/Title';
import { Character, getRandomCharacter } from 'hooks/useCharacters';
import { Death, getDeathsCount, getIndividualDeath } from 'hooks/useDeaths';
import { getQuotesByAuthor, Quote } from 'hooks/useQuotes';
import { CharacterInformation } from 'organisms/Characters/CharacterInformation';

interface CharacterProps {
  character: Character;
  quotes: Array<Quote>;
  death_information: Death;
  deaths_count: number;
}

const RandomCharacterPage = ({
  character,
  quotes,
  death_information,
  deaths_count,
}: CharacterProps) => {
  return (
    <>
      <Head>
        <title>Random Character - Breaking Bad</title>
      </Head>
      <Flex direction="column" flex={1}>
        <Flex align="center" justify="space-between" mb="6">
          <Title>Random character</Title>
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

export default RandomCharacterPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const character = await getRandomCharacter();
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
  };
};
