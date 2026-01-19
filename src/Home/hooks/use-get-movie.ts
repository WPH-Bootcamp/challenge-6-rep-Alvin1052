import { useQuery } from '@tanstack/react-query';
import { getTrendingMovie } from '../services/trending-movie';

export const useGetMovie = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['trending', 'movies'],
    queryFn: () => getTrendingMovie(),
  });

  const listMovie = data?.results.map((item) => ({
    ...item,
    backdrop_path: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
    poster_path: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
  }));

  return {
    heroMovie: listMovie?.[0],
    listMovie,
    isLoading,
  };
};
