import { useQuery } from 'react-query';

import { api } from 'services/api';

export type Episode = {
  episode_id: number;
  title: string;
  season: number;
  episode: number;
  air_date: string;
  characters: Array<string>;
  series: string;
};

interface GetEpisodeByIdProps {
  episode_id: string;
}

export const getEpisodeById = async ({ episode_id }: GetEpisodeByIdProps) => {
  try {
    const { data } = await api.get<Array<Episode>>(`/episodes/${episode_id}`);

    return data;
  } catch (err) {
    return err;
  }
};

const getEpisodes = async ({ series }: UseEpisodesProps) => {
  const { data } = await api.get<Array<Episode>>('/episodes', {
    params: {
      series,
      limit: '10',
    },
  });

  return data;
};

interface UseEpisodesProps {
  series?: string;
}

export function useEpisodes({ series }: UseEpisodesProps) {
  return useQuery(['episodes', series], () => getEpisodes({ series }), {
    staleTime: 1000 * 60 * 5, // 10 minutos
  });
}
