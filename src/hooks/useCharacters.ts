import { useQuery } from 'react-query';

import { api } from 'services/api';

export type Character = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: Array<string>;
  img: string;
  status: string;
  nickname: string;
  appearance: Array<string>;
  better_call_saul_appearance: Array<string>;
  portrayed: string;
  category: Array<string>;
};

interface GetCharacterByIdProps {
  char_id: string;
}

export const getCharacterById = async ({
  char_id,
}: GetCharacterByIdProps): Promise<Character> => {
  try {
    const { data } = await api.get<Array<Character>>(`/characters/${char_id}`);

    return { ...data[0], category: String(data[0].category).split(', ') };
  } catch (err: any) {
    return err;
  }
};

export const getRandomCharacter = async (): Promise<Character> => {
  try {
    const { data } = await api.get<Array<Character>>('/character/random');

    return { ...data[0], category: String(data[0].category).split(', ') };
  } catch (err: any) {
    return err;
  }
};

const getCharacters = async ({
  limit,
  offset,
  name,
  category,
}: UseCharactersProps) => {
  try {
    const { data } = await api.get<Array<Character>>('/characters', {
      params: {
        limit,
        offset,
        name,
        category,
      },
    });

    const charactersFormatted = data.map(item => {
      return {
        ...item,
        category: String(item.category).split(', '),
      };
    });

    return charactersFormatted;
  } catch (err: any) {
    return err;
  }
};

interface UseCharactersProps {
  limit: string;
  offset?: string;
  name?: string;
  category?: string;
}

export function useCharacters({
  limit,
  offset,
  name,
  category,
}: UseCharactersProps) {
  return useQuery(
    ['characters', limit, offset, name, category],
    () => getCharacters({ limit, offset, name, category }),
    {
      staleTime: 1000 * 60 * 5, // 10 minutos
    },
  );
}
