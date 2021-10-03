import { useQuery } from 'react-query';

import { api } from 'services/api';

export type Death = {
  death_id: number;
  death: string;
  cause: string;
  responsible: string;
  last_words: string;
  season: number;
  episode: number;
  number_of_deaths: number;
};

const getDeaths = async () => {
  try {
    const { data } = await api.get<Array<Death>>('/deaths');

    return data;
  } catch (err: any) {
    return err;
  }
};

interface UseIndividualDeath {
  name: string;
}

export const getIndividualDeath = async ({ name }: UseIndividualDeath) => {
  try {
    const { data } = await api.get<Array<Death>>('/death', {
      params: {
        name,
      },
    });

    return data[0];
  } catch (err: any) {
    return err;
  }
};

export const getRandomDeath = async () => {
  try {
    const { data } = await api.get<Death>('/random-death');
    return data;
  } catch (err: any) {
    return err;
  }
};

export const getDeathsCount = async ({ name }: UseIndividualDeath) => {
  try {
    const { data } = await api.get<Array<{ deathCount: number }>>(
      '/death-count',
      {
        params: {
          name,
        },
      },
    );

    return data[0].deathCount;
  } catch (err: any) {
    return err;
  }
};

export function useDeaths() {
  return useQuery(['deaths'], () => getDeaths(), {
    staleTime: 1000 * 60 * 5, // 10 minutos
  });
}
