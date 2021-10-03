import { useQuery } from 'react-query';

import { api } from 'services/api';

export type Quote = {
  quote_id: number;
  quote: string;
  author: string;
  series: string;
};

interface GetQuoteByIdProps {
  quote_id: string;
}

export const getEpisodeById = async ({ quote_id }: GetQuoteByIdProps) => {
  try {
    const { data } = await api.get<Array<Quote>>(`/quotes/${quote_id}`);

    return data;
  } catch (err: any) {
    return err;
  }
};

const getQuotes = async ({ series }: UseQuotes) => {
  try {
    const { data } = await api.get<Array<Quote>>('/quotes', {
      params: {
        series,
      },
    });

    return data;
  } catch (err: any) {
    return err;
  }
};

export const getRandomQuote = async () => {
  try {
    const { data } = await api.get<Array<Quote>>('/quote/random');
    return data[0];
  } catch (err: any) {
    return err;
  }
};

interface UseQuotesByAuthorProps {
  author: string;
}

export const getQuotesByAuthor = async ({ author }: UseQuotesByAuthorProps) => {
  try {
    const { data } = await api.get<Array<Quote>>('/quote', {
      params: {
        author,
      },
    });

    return data;
  } catch (err: any) {
    return err;
  }
};

interface UseQuotes {
  series?: string;
}

export function useQuotes({ series }: UseQuotes) {
  return useQuery(['quotes', series], () => getQuotes({ series }), {
    staleTime: 1000 * 60 * 5, // 10 minutos
  });
}
