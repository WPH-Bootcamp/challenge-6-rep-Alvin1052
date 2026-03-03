import { useQuery } from '@tanstack/react-query';
import {
  getMovieDetails,
  getMovieDetailState,
  type TgetMovieDetailsParams,
} from '../types';

export const useGetMovieDetails = (
  id: number,
  getMovieDetailsParams?: TgetMovieDetailsParams
) => {
  const { data: dataMovie, isLoading } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(id, getMovieDetailsParams),
  });

  const { data: status } = useQuery({
    queryKey: ['movie status', id],
    queryFn: () => getMovieDetailState(id),
  });

  if (!dataMovie || !status) return { movieDetails: null, isLoading: false };

  const movieDetails = {
    ...dataMovie,
    backdrop_path: `https://image.tmdb.org/t/p/original/${dataMovie?.backdrop_path}`,
    poster_path: `https://image.tmdb.org/t/p/original/${dataMovie?.poster_path}`,
    creditsCast: dataMovie?.credits?.cast.map((item) => ({
      ...item,
      profile_path: `https://image.tmdb.org/t/p/original/${item.profile_path}`,
    })),

    creditCrew: dataMovie?.credits?.crew.map((item) => ({
      ...item,
      profile_path: `https://image.tmdb.org/t/p/original/${item.profile_path}`,
    })),
    status: status,
  };

  return { movieDetails, isLoading };
};
