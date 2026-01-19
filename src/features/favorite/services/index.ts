import { api } from '@/lib/api';

export interface TPostFavoriteMoviePayload {
  media_type: string;
  media_id: number;
  favorite: boolean;
}

export const postFavoriteMovie = async (payload: TPostFavoriteMoviePayload) => {
  const res = await api.post('/account/22073945/favorite', payload);
  return res.data;
};

export const getFavoriteMovie =
  async (): Promise<TGetFavoriteMovieResponse> => {
    const res = await api.get('/account/22073945/favorite/movies');
    return res.data;
  };

export interface TGetFavoriteMovieResponse {
  page: number;
  results: Tmovie[];
  total_pages: number;
  total_results: number;
}

export type Tmovie = {
  isFavorite: boolean;
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
