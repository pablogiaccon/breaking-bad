import { useQuery } from "react-query";

import { api } from "services/api";

export type Character = {
  id: number;
  name: string;
  birthday: string;
  occupation: Array<string>;
  img: string;
  status: string;
  nickname: string;
  appearance: Array<string>;
  portrayed: string;
  category: Array<string>;
};

const getCharacters = async () => {
  const { data } = await api.get<Array<Character>>("/characters");

  const charactersFormatted = data.map((item) => {
    return {
      ...item,
      category: String(item.category).split(", "),
    };
  });

  return charactersFormatted;
};

interface UseCharactersProps {
  limit: string;
  offset: string;
  name?: string;
}

export function useCharacters({ limit, offset, name }: UseCharactersProps) {
  return useQuery(["characters"], () => getCharacters(), {
    staleTime: 1000 * 60 * 5, // 10 minutos
  });
}
