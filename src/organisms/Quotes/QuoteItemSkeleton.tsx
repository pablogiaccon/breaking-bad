import { Flex, Text, Skeleton } from '@chakra-ui/react';

export function QuoteItemSkeleton() {
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
    >
      <Skeleton>
        <Text fontSize="lg" fontWeight="bold">
          Walter White
        </Text>
      </Skeleton>

      <Skeleton my="4">
        <Flex flex={1} align="center" justify="center">
          <Text textAlign="center" color="gray.300">
            &quot;I am not in danger, Skyler. I am the danger!&quot;
          </Text>
        </Flex>
      </Skeleton>
    </Flex>
  );
}
