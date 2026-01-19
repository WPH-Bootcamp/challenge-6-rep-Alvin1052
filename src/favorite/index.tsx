import { useFavoriteMovie } from '@/features/favorite/hooks/use-post-favorite-movie';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import CardList from './components/card-list';
import NoDataSkeleton from './components/empty-list';

const Favorite = () => {
  const { ListFavoriteMovie, AddMovie, isLoading } = useFavoriteMovie();

  if (isLoading) return <div>Loading...</div>;
  if (!ListFavoriteMovie) return;

  return (
    <div className='min-h-screen '>
      <Header />
      {ListFavoriteMovie?.results?.length === 0 ? (
        <NoDataSkeleton />
      ) : (
        <div className='lg:px-11xl px-4 lg:-mt-23.75 lg:py-23.75 -mt-[64px] pt-[64px] min-h-screen  '>
          {/* Movie New Release Now */}

          <strong className='text-3xl text-white'>Favorite</strong>
          <div className='text-white  flex flex-col gap-16 mt-8 justify-center max-w-full'>
            {ListFavoriteMovie?.results?.map((movie, i) => (
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
    </div>
  );
};

export default Favorite;
