import { Flex, Text, Tag, Tooltip, Icon, Box } from '@chakra-ui/react';
import { BiTargetLock } from 'react-icons/bi';
import { CgCross } from 'react-icons/cg';

import { Death } from 'hooks/useDeaths';

interface DeathItemProps {
  death: Death;
}

export function DeathItem({ death }: DeathItemProps) {
  const {
    death: name,
    cause,
    episode,
    last_words,
    number_of_deaths,
    responsible,
    season,
  } = death;

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
      data-testid="death-item"
    >
      <Tag
        fontSize="12px"
        color="gray.800"
        variant="solid"
        position="absolute"
        top="2"
        right="2"
      >
        <Tooltip
          label="Ep./Season"
          aria-label="A tooltip"
          hasArrow
          bg="pink.500"
          placement="top"
        >
          <Text fontSize="10px">
            {episode}/{season}
          </Text>
        </Tooltip>
      </Tag>

      <Tag fontSize="12px" variant="solid" position="absolute" top="2" left="2">
        <Tooltip
          label="Number of deaths"
          aria-label="A tooltip"
          hasArrow
          bg="pink.500"
          placement="top"
        >
          <Flex fontSize="10px" align="center">
            <Icon as={CgCross} w="14px" h="14px" /> {number_of_deaths || 0}
          </Flex>
        </Tooltip>
      </Tag>

      <Icon as={CgCross} w="24px" h="24px" mb="4" />

      <Text fontSize="lg" fontWeight="bold" textAlign="center">
        {name}
      </Text>

      <Text textAlign="center" color="gray.300" fontSize="14px">
        {cause}
      </Text>

      <Flex flex={1} align="center" justify="center" my="4">
        <Text textAlign="center" color="gray.300">
          &quot;{last_words}&quot;
        </Text>
      </Flex>

      <Flex fontSize="14px" align="center" direction="column" mt="4">
        <Tooltip
          label="The killer"
          aria-label="A tooltip"
          hasArrow
          bg="pink.500"
          placement="top"
        >
          <Box as="span">
            <Icon as={BiTargetLock} w="24px" h="24px" mb="2" />
          </Box>
        </Tooltip>

        <Box as="span" textAlign="center">
          {responsible}
        </Box>
      </Flex>
    </Flex>
  );
}
