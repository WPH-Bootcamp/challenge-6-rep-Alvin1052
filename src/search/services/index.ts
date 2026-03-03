import { api } from '@/lib/api';

export type TGetSearchResponse = {
  page: number;
  results: Tmovie[];
  total_pages: number;
  total_results: number;
};

export const getSearch = async (
  keyword: string
): Promise<TGetSearchResponse> => {
  const res = await api.get('/search/movie', { params: { query: keyword } });
  return res.data;
};

export type Tmovie = {
  adult: false;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
