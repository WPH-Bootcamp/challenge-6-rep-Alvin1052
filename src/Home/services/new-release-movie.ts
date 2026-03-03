import { api } from '@/lib/api';

import { type AxiosRequestConfig } from 'axios';
import type { Tmovie } from '../types';

export type TParameters = AxiosRequestConfig & {
  language?: string;
  page?: number;
  region?: string;
};

export type TGetTrendingMovieResponse = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Tmovie[];
  total_pages: number;
  total_results: number;
};

export const getNewReleaseMovie = async (
  params?: TParameters
): Promise<TGetTrendingMovieResponse> => {
  const res = await api.get('/movie/now_playing', params);
  return res.data;
};
