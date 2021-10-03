import { Flex, SimpleGrid } from '@chakra-ui/react';

import { Title } from 'components/Title';
import { Death, useDeaths } from 'hooks/useDeaths';
import { DeathItem } from 'organisms/Deaths/DeathItem';
import { DeathItemSkeleton } from 'organisms/Deaths/DeathItemSkeleton';

const DeathsPage = () => {
  const { data, isLoading } = useDeaths();

  return (
    <Flex direction="column" flex={1}>
      <Flex align="center" justify="space-between" mb="6">
        <Title>Deaths</Title>
      </Flex>

      {isLoading ? (
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <DeathItemSkeleton />
          <DeathItemSkeleton />
          <DeathItemSkeleton />
          <DeathItemSkeleton />
          <DeathItemSkeleton />
          <DeathItemSkeleton />
          <DeathItemSkeleton />
        </SimpleGrid>
      ) : (
        <SimpleGrid gap="4" minChildWidth="320px">
          {data?.map((death: Death) => (
            <DeathItem key={death.death_id} death={death} />
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default DeathsPage;
