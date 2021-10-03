import { useState, useMemo } from 'react';

import {
  Table,
  Thead,
  Tbody,
  Link as ChakraLink,
  Tr,
  Th,
  Td,
  Flex,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';

import { Title } from 'components/Title';
import { Episode, useEpisodes } from 'hooks/useEpisodes';
import { SeasonsFilter } from 'organisms/Episodes/SeasonsFilter';
import { SerieFilter } from 'organisms/Episodes/SerieFilter';

const Episodes = () => {
  const [seasonSelected, setSeasonSelected] = useState(1);
  const [serieSelected, setSerieSelected] = useState('Breaking Bad');

  const { data } = useEpisodes({ series: serieSelected });

  const episodes = useMemo(() => {
    return data?.filter(
      (episode: Episode) => Number(episode.season) === seasonSelected,
    );
  }, [data, seasonSelected]);

  return (
    <Flex direction="column" flex={1}>
      <Flex mb="6" align="center" justify="space-between">
        <Title>Episodes</Title>
        <HStack>
          <SeasonsFilter
            season={seasonSelected}
            onSeasonChange={e => setSeasonSelected(e)}
            series={serieSelected}
          />
          <SerieFilter
            serie={serieSelected}
            onSerieChange={e => setSerieSelected(e)}
          />
        </HStack>
      </Flex>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th isNumeric>Episode</Th>
            <Th>Title</Th>
            <Th isNumeric>Season</Th>
            <Th>Air date</Th>
            <Th>Series</Th>
            <Th>Characters</Th>
          </Tr>
        </Thead>
        <Tbody>
          {episodes?.map(
            ({
              episode_id,
              air_date,
              characters,
              episode,
              season,
              series,
              title,
            }: Episode) => (
              <Tr key={episode_id}>
                <Td isNumeric>{episode}</Td>
                <Td>{title}</Td>
                <Td isNumeric>{season}</Td>
                <Td>{air_date}</Td>
                <Td>{series}</Td>
                <Td maxW="320px">
                  {characters.map(character => (
                    <Link
                      key={character}
                      href={`/?search=${character}`}
                      passHref
                    >
                      <ChakraLink mx="2" my="1">
                        {character}
                      </ChakraLink>
                    </Link>
                  ))}
                </Td>
              </Tr>
            ),
          )}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default Episodes;
