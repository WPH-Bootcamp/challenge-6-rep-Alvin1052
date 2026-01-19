import { useQuery } from '@tanstack/react-query';
import { getSearch } from '../services';
import { useFavoriteMovie } from '@/features/favorite/hooks/use-post-favorite-movie';

export const useSearch = (keyword: string) => {
  const { data, isPending } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () => getSearch(keyword),
  });

  const { ListFavoriteMovie } = useFavoriteMovie();

  const MovieResult = {
    ...data,
    results: data?.results.map((movie) => ({
      ...movie,
      backdrop_path: movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
        : null,
      poster_path: movie.poster_path
        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
        : null,
      isFavorite: ListFavoriteMovie?.results?.some(
        (item) => item.id === movie.id
      ),
    })),
  };

  return { MovieResult, isPending };
};
