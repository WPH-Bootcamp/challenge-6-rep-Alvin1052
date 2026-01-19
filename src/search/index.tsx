import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import { useParams } from 'react-router-dom';
import { useSearch } from './hooks/useSearch';

import { NoDataSkeleton } from '@/components/skeleton';
import CardList from '@/favorite/components/card-list';
import { useFavoriteMovie } from '@/features/favorite/hooks/use-post-favorite-movie';
import { BufferSkeleton } from '@/motion';

const Search = () => {
  const { keyword } = useParams();

  const { MovieResult, isPending } = useSearch(keyword?.toString() ?? '');
  const { AddMovie } = useFavoriteMovie();

  if (isPending) return <BufferSkeleton />;

  return (
    <>
      <Header />

      {MovieResult?.results?.length === 0 ? (
        <NoDataSkeleton />
      ) : (
        <div className='lg:px-11xl px-4 lg:-mt-23.75 lg:py-23.75 -mt-[64px] pt-[64px] min-h-screen  '>
          {/* Movie New Release Now */}

          <strong className='text-3xl text-white'>
            Search Result : "{keyword}"
          </strong>
          <div className='text-white  flex flex-col gap-16 mt-8 justify-center max-w-full'>
            {MovieResult?.results?.map((movie, i) => (
              <CardList
                key={i}
                movie={movie}
                handleFavorite={() =>
                  AddMovie.mutate({
                    media_type: 'movie',
                    media_id: movie.id,
                    favorite: !movie.isFavorite,
                  })
                }
              />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Search;
