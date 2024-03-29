import { Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Title } from 'components/Title';
import { getRandomQuote, Quote } from 'hooks/useQuotes';
import { QuoteItem } from 'organisms/Quotes/QuoteItem';

interface QuoteProps {
  quote: Quote;
}

const RandomQuotePage = ({ quote }: QuoteProps) => {
  return (
    <>
      <Head>
        <title>Random Quote - Breaking Bad</title>
      </Head>
      <Flex direction="column" flex={1}>
        <Flex align="center" justify="space-between" mb="6">
          <Title>Random quote</Title>
        </Flex>

        <QuoteItem quote={quote} />
      </Flex>
    </>
  );
};

export default RandomQuotePage;

/* istanbul ignore next */
export const getServerSideProps: GetServerSideProps = async () => {
  const quote = await getRandomQuote();

  return {
    props: {
      quote,
    },
  };
};
