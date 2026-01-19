import type { AxiosRequestConfig } from 'axios';
import { api } from '../../lib/api';
import type { TGetTrendingMovieResponse } from '../types';

interface TParameters {
  params: AxiosRequestConfig & { language?: string };
}

type TTimeWindows = 'day' | 'week';

export const getTrendingMovie = async (
  time_window: TTimeWindows = 'day',
  params?: TParameters
): Promise<TGetTrendingMovieResponse> => {
  const res = await api.get(`/trending/movie/${time_window}`, params);
  return res.data;
};
