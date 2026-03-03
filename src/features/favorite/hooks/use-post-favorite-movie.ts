import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getFavoriteMovie, postFavoriteMovie } from '../services';

export interface TPostFavoriteMoviePayload {
  media_type: string;
  media_id: number;
  favorite: boolean;
}

export interface TPostFavoriteOnSuccessResponse {
  status_code: 13 | 1;
  status_message: string;
  success: false;
}

// export const usePostFavoriteMovie = (id: number, favorite?: boolean) => {
export const useFavoriteMovie = () => {
  const QueryClient = useQueryClient();

  const AddMovie = useMutation({
    mutationFn: (payload: TPostFavoriteMoviePayload) =>
      postFavoriteMovie(payload),

    onSuccess: (Response: TPostFavoriteOnSuccessResponse) => {
      toast.success(
        `Success ${Response.status_code === 1 ? 'Add' : 'Remove'} favorite`
      );
      QueryClient.invalidateQueries(['favorite-movie']);
    },
  });

  const { data: MovieResult, isLoading } = useQuery({
    queryKey: ['favorite-movie'],
    queryFn: () => getFavoriteMovie(),
  });

  const ListFavoriteMovie = {
    ...MovieResult,
    results: MovieResult?.results.map((movie) => ({
      ...movie,
      backdrop_path: movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
        : null,
      poster_path: movie.poster_path
        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
        : null,
      isFavorite: true,
    })),
  };

  // const data = async () => {
  //   const res = await postFavoriteMovie();
  //   console.log('res', res);
  // };
  // data();

  return { ListFavoriteMovie, AddMovie, isLoading };
};
