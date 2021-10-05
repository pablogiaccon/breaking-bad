import { Flex, Text } from '@chakra-ui/react';

import { Quote } from 'hooks/useQuotes';

interface QuoteItemProps {
  quote: Quote;
}

export function QuoteItem({ quote }: QuoteItemProps) {
  const { quote: quoteText, author } = quote;

  return (
    <Flex
      align="center"
      direction="column"
      borderRadius="8"
      p={['4', '6']}
      bgGradient="linear(to-tl, gray.800, gray.700, pink.500)"
      color="gray.100"
      position="relative"
      boxShadow="xl"
      maxW="320px"
      data-testid="quote-item"
    >
      <Text fontSize="lg" fontWeight="bold">
        {author}
      </Text>
      <Flex flex={1} align="center" justify="center" my="4">
        <Text textAlign="center" color="gray.300">
          &quot;{quoteText}&quot;
        </Text>
      </Flex>
    </Flex>
  );
}
