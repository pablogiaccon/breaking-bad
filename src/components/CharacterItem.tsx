import { Flex, Image, Link, Text, Tag } from "@chakra-ui/react";

import { Character } from "hooks/useCharacters";

interface CharacterItemProps {
  character: Character;
}

export function CharacterItem({ character }: CharacterItemProps) {
  const { id, name, img, status, nickname, occupation, category } = character;

  const getStatus: any = {
    Alive: "green",
    Deceased: "red",
  };

  return (
    <Flex
      as={Link}
      href={`/character/${id}`}
      direction="column"
      align="center"
      borderRadius="8"
      p={["4", "6"]}
      bg="gray.800"
      bgGradient="linear(to-tl, gray.800, gray.700, pink.500)"
      color="gray.100"
      position="relative"
      boxShadow="xl"
    >
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
      <Image src={img} objectFit="fill" height="20rem" alt={name} />

      <Flex mt="4" direction="column" w="100%">
        <Flex fontWeight="bold" fontSize="lg" align="center">
          {name}
          <Text fontSize="sm" ml="1" color="pink.500">
            ({nickname})
          </Text>
        </Flex>
        <Text fontSize="sm" color="gray.300">
          {occupation}
        </Text>
      </Flex>
    </Flex>
  );
}
