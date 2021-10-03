import { Flex, Image, Text, Skeleton } from '@chakra-ui/react';

export function CharacterItemSkeleton() {
  return (
    <Flex
      direction="column"
      align="center"
      borderRadius="8"
      p={['4', '6']}
      bgGradient="linear(to-tl, gray.800, gray.700, pink.500)"
      color="gray.100"
      position="relative"
      boxShadow="xl"
      maxW="320px"
    >
      <Skeleton startColor="gray.800" endColor="gray.400" speed={2}>
        <Image src="/" objectFit="fill" height="20rem" width="240px" alt="" />
      </Skeleton>

      <Flex mt="4" direction="column" w="100%">
        <Flex fontWeight="bold" fontSize="lg" align="center">
          <Skeleton>Walter</Skeleton>
          <Skeleton ml="1">
            <Text fontSize="sm" ml="1" color="pink.500">
              teste
            </Text>
          </Skeleton>
        </Flex>

        <Skeleton mt="2">
          <Text fontSize="sm" color="gray.300">
            Drogs
          </Text>
        </Skeleton>
      </Flex>
    </Flex>
  );
}
