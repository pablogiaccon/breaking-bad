import { Flex, Tag, Button, Image, Text, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Character } from 'hooks/useCharacters';

interface CharacterInformationProps {
  character: Character;
}
export function CharacterInformation({ character }: CharacterInformationProps) {
  const { back } = useRouter();
  const {
    name,
    img,
    status,
    nickname,
    occupation,
    category,
    birthday,
    appearance,
    portrayed,
  } = character;

  const getStatus: any = {
    Alive: 'green',
    Deceased: 'red',
  };
  return (
    <Flex direction="column" flex="1">
      <Flex
        align="center"
        borderRadius="8"
        p={['4', '6']}
        bgGradient="linear(to-tl, gray.800, gray.700, pink.500)"
        color="gray.100"
        position="relative"
        boxShadow="xl"
        flex="1"
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

        <Flex ml="4" direction="column" w="100%">
          <Flex fontSize="md" align="center">
            Name:
            <Text ml="2" fontSize="lg" fontWeight="bold">
              {name}
            </Text>
          </Flex>

          <Flex fontSize="md" align="center">
            Nickname:
            <Text ml="2" fontSize="lg" fontWeight="bold">
              {nickname}
            </Text>
          </Flex>

          <Flex fontSize="md" align="center">
            Birthday:
            <Text ml="2" fontSize="lg" fontWeight="bold">
              {birthday}
            </Text>
          </Flex>

          <Flex fontSize="md" align="center">
            Occupation:
            <Flex flexWrap="wrap" ml="2">
              {occupation?.map(item => (
                <Text
                  key={item}
                  mb="2"
                  mr="2"
                  fontSize="lg"
                  color="gray.800"
                  bg="gray.400"
                  p="1"
                  borderRadius="8"
                  width="max-content"
                >
                  {item}
                </Text>
              ))}
            </Flex>
          </Flex>

          <Flex fontSize="md" align="center">
            Category:
            <Flex flexWrap="wrap" ml="2">
              {category?.map(item => (
                <Link
                  key={item}
                  href={`/?category=${item}`}
                  mb="2"
                  mr="2"
                  fontSize="lg"
                  color="pink.200"
                  bg="gray.400"
                  p="1"
                  borderRadius="8"
                  width="max-content"
                >
                  {item}
                </Link>
              ))}
            </Flex>
          </Flex>

          <Flex fontSize="md" align="center">
            Appearance:
            <Flex flexWrap="wrap" ml="2">
              {appearance?.map(item => (
                <Text
                  key={item}
                  mb="2"
                  mr="2"
                  fontSize="lg"
                  color="pink.200"
                  bg="gray.400"
                  px="2"
                  py="1"
                  borderRadius="8"
                  width="max-content"
                >
                  {item}
                </Text>
              ))}
            </Flex>
          </Flex>

          <Flex fontSize="md" align="center">
            Portrayed:
            <Text ml="2" fontSize="lg" fontWeight="bold">
              {portrayed}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Button w="max-content" colorScheme="pink" mt="4" onClick={back}>
        Back
      </Button>
    </Flex>
  );
}
