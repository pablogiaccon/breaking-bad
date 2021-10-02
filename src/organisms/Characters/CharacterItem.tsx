import { Flex, Image, Text, Tag, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

import { Character } from 'hooks/useCharacters';

interface CharacterItemProps {
  character: Character;
}

export function CharacterItem({ character }: CharacterItemProps) {
  const { char_id, name, img, status, nickname, occupation, category } =
    character;

  const getStatus: any = {
    Alive: 'green',
    Deceased: 'red',
  };

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
      <Link href={`/character/${char_id}`} passHref>
        <ChakraLink w="100%">
          <Tag
            color="gray.800"
            colorScheme={getStatus[status]}
            variant="solid"
            position="absolute"
            top="4"
            right="4"
          >
            {status}
          </Tag>
          <Image
            src={img}
            objectFit="fill"
            height="20rem"
            alt={name}
            fallbackSrc="https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535"
            mx="auto"
          />

          <Flex mt="4" direction="column" w="100%">
            <Flex
              fontWeight="bold"
              fontSize="lg"
              align="center"
              direction="column"
            >
              {name}
              <Text fontSize="sm" color="pink.500">
                ({nickname})
              </Text>
            </Flex>
          </Flex>
        </ChakraLink>
      </Link>
      <Flex flexWrap="wrap" mt="4" w="100%">
        {category.map(item => (
          <Link key={item} href={`/?category=${item}`} passHref>
            <ChakraLink
              mb="2"
              mr="2"
              fontSize="sm"
              color="pink.200"
              bg="gray.400"
              p="1"
              borderRadius="8"
              width="max-content"
            >
              {item}
            </ChakraLink>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
