import {
  Flex,
  Text,
  Tag,
  Tooltip,
  Icon,
  Box,
  Skeleton,
} from '@chakra-ui/react';
import { BiTargetLock } from 'react-icons/bi';
import { CgCross } from 'react-icons/cg';

export function DeathItemSkeleton() {
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
      data-testid="skeleton-death-item"
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
            <Skeleton>13/4</Skeleton>
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
            <Icon as={CgCross} w="14px" h="14px" /> <Skeleton>{10}</Skeleton>
          </Flex>
        </Tooltip>
      </Tag>

      <Icon as={CgCross} w="24px" h="24px" mb="4" />

      <Text fontSize="lg" fontWeight="bold" textAlign="center" mb="2">
        <Skeleton>Rival Dealers</Skeleton>
      </Text>

      <Text textAlign="center" color="gray.300" fontSize="14px">
        <Skeleton>Multiple gunshots.</Skeleton>
      </Text>

      <Flex flex={1} align="center" justify="center" my="4">
        <Text textAlign="center" color="gray.300">
          <Skeleton>What, you got a problem with stairs?</Skeleton>
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
          <Skeleton>Walter White</Skeleton>
        </Box>
      </Flex>
    </Flex>
  );
}
