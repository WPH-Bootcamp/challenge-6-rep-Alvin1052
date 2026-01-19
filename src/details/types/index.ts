import { api } from '@/lib/api';

export interface TgetMovieDetailsParams {
  language?: string;
  append_to_response?: string;
}

export interface TMovieDetailStatus {
  id: number;
  favorite: boolean;
  rated: boolean;
  watchlist: boolean;
}

export const getMovieDetails = async (
  id: number,
  getMovieDetailsParams?: TgetMovieDetailsParams
): Promise<TgetMovieDetailsResponse> => {
  const res = await api.get(`/movie/${id}`, { params: getMovieDetailsParams });
  return res.data;
};

export const getMovieDetailState = async (
  id: number
): Promise<TMovieDetailStatus> => {
  const res = await api.get(`/movie/${id}/account_states`);
  return res.data;
};

export interface TGenre {
  id: number;
  name: string;
}

export interface TCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface TCountries {
  iso_3166_1: string;
  name: string;
}

export interface TSpoken {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export type TgetMovieDetailsResponse = TMovieDetails;

export interface TCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface TCrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null;
  credit_id: string;
  department: string;
  job: string;
}

export interface TMovieDetails {
  credits: { cast: TCast[]; crew: TCrew[] };
  adult: boolean | undefined;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: TGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: TCompany[];
  production_countries: TCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: TSpoken[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
