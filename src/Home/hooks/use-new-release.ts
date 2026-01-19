import { useQuery } from '@tanstack/react-query';
import { getNewReleaseMovie } from '../services/new-release-movie';

export const useNewReleaseMovie = () => {
  const { data, isLoading, isPending } = useQuery({
    queryKey: ['new-release', 'movies'],
    queryFn: () => getNewReleaseMovie(),
  });

  const listMovie = data?.results.map((item) => ({
    ...item,
    backdrop_path: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
    poster_path: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
  }));

  return {
    listMovie,
    isLoading,
    isPending,
  };
};
