import { Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Title } from 'components/Title';
import { Death, getRandomDeath } from 'hooks/useDeaths';
import { getRandomQuote, Quote } from 'hooks/useQuotes';
import { DeathItem } from 'organisms/Deaths/DeathItem';
import { QuoteItem } from 'organisms/Quotes/QuoteItem';

interface DeathProps {
  death: Death;
}

const RandomDeathPage = ({ death }: DeathProps) => {
  return (
    <>
      <Head>
        <title>Random Death - Breaking Bad</title>
      </Head>
      <Flex direction="column" flex={1}>
        <Flex align="center" justify="space-between" mb="6">
          <Title>Random death</Title>
        </Flex>

        <DeathItem death={death} />
      </Flex>
    </>
  );
};

export default RandomDeathPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const death = await getRandomDeath();

  return {
    props: {
      death,
    },
  };
};
