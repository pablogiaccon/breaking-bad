import { useState } from 'react';

import { Flex, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';

import { Title } from 'components/Title';
import { Quote, useQuotes } from 'hooks/useQuotes';
import { SerieFilter } from 'organisms/Episodes/SerieFilter';
import { QuoteItem } from 'organisms/Quotes/QuoteItem';
import { QuoteItemSkeleton } from 'organisms/Quotes/QuoteItemSkeleton';

const QuotePage = () => {
  const [serieSelected, setSerieSelected] = useState('Breaking Bad');
  const { data, isLoading } = useQuotes({ series: serieSelected });

  return (
    <>
      <Head>
        <title>Quotes - Breaking Bad</title>
      </Head>
      <Flex direction="column" flex={1} data-testid="quotes-page">
        <Flex mb="6" align="center" justify="space-between">
          <Title>Quotes</Title>
          <SerieFilter
            serie={serieSelected}
            onSerieChange={/* istanbul ignore next */ e => setSerieSelected(e)}
          />
        </Flex>

        {isLoading ? (
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            <QuoteItemSkeleton />
            <QuoteItemSkeleton />
            <QuoteItemSkeleton />
            <QuoteItemSkeleton />
            <QuoteItemSkeleton />
            <QuoteItemSkeleton />
            <QuoteItemSkeleton />
          </SimpleGrid>
        ) : (
          <SimpleGrid gap="4" minChildWidth="320px">
            {data?.map((quote: Quote) => (
              <QuoteItem key={quote.quote_id} quote={quote} />
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </>
  );
};

export default QuotePage;
