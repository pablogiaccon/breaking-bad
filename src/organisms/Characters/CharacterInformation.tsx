import {
  Flex,
  Tag,
  Button,
  Image,
  Text,
  Link,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { CgCross } from 'react-icons/cg';

import { Character } from 'hooks/useCharacters';
import { Death } from 'hooks/useDeaths';
import { Quote } from 'hooks/useQuotes';
import { DeathItem } from 'organisms/Deaths/DeathItem';
import { QuoteItem } from 'organisms/Quotes/QuoteItem';

interface CharacterInformationProps {
  character: Character;
  quotes: Array<Quote>;
  death_information: Death;
  deaths_count: number;
}
export function CharacterInformation({
  character,
  quotes,
  death_information,
  deaths_count,
}: CharacterInformationProps) {
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

          {category.some(item => item === 'Breaking Bad') && (
            <Flex fontSize="md" align="center">
              <Icon as={CgCross} w="32px" h="32px" />
              <Text ml="2" fontSize="lg" fontWeight="bold">
                {deaths_count}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>

      <Button w="max-content" colorScheme="pink" mt="4" onClick={back}>
        Back
      </Button>

      {category.some(item => item === 'Breaking Bad') && death_information && (
        <Flex direction="column" mt="6">
          <Text fontSize="2xl" fontWeight="bold" mb="4">
            Death Information
          </Text>

          <DeathItem death={death_information} />
        </Flex>
      )}

      {!!quotes?.length && (
        <Flex direction="column" mt="6">
          <Text fontSize="2xl" fontWeight="bold" mb="4">
            Character Quotes
          </Text>

          <SimpleGrid gap="4" minChildWidth="320px" width="100%">
            {quotes?.map(quote => (
              <QuoteItem key={quote.quote_id} quote={quote} />
            ))}
          </SimpleGrid>
        </Flex>
      )}
    </Flex>
  );
}
