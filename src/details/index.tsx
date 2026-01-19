import { useFavoriteMovie } from '@/features/favorite/hooks/use-post-favorite-movie';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import { BufferSkeleton } from '@/motion';
import { useParams } from 'react-router-dom';
import CastcrewCard from './components/cast-crew';
import Hero from './components/hero';
import Overview from './components/overview';
import { useGetMovieDetails } from './hooks/use-get-details';
import type { TCast } from './types';

const Details = () => {
  const { id } = useParams();

  const { movieDetails, isLoading } = useGetMovieDetails(Number(id), {
    append_to_response: 'credits',
  });

  const isFavorite: boolean = movieDetails?.status?.favorite || false;

  const { AddMovie } = useFavoriteMovie();

  if (isLoading) return <BufferSkeleton />;
  if (!movieDetails) return <BufferSkeleton />;

  return (
    <>
      <Header />
      <div className='relative lg:h-398.25 bg-black py-10 lg:-mt-37.5 -mt-27.5 '>
        {/* Backdrop Image */}
        <div className='relative  w-full max-h-202.5'>
          <img
            className='object-cover object-center w-full  lg:h-full max-h-202.5'
            src={movieDetails.backdrop_path}
            alt=''
          />
          <div className='bg-linear-to-t from-black to-transparent to-100%  absolute inset-0 bg-opacity-50' />
        </div>
        {/* Details */}
        <div className=' lg:absolute gap-[48px] flex flex-col lg:w-290 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/3 mx-5 '>
          <Hero
            id={movieDetails.id}
            genres={movieDetails.genres}
            original_title={movieDetails.original_title}
            poster_path={movieDetails.poster_path}
            release_date={movieDetails.release_date}
            vote_average={movieDetails.vote_average}
            isFavorite={isFavorite}
            handleFavorite={() =>
              AddMovie.mutate({
                media_type: 'movie',
                media_id: movieDetails.id,
                favorite: !isFavorite,
              })
            }
          />
          <Overview overview={movieDetails.overview} />

          <div className='text-xl pb-4 lg:text-[32px] text-white'>
            <strong>Cast & Crew</strong>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 '>
            {movieDetails.creditsCast?.slice(0, 6).map((item: TCast, i) => (
              <CastcrewCard
                key={i}
                name={item.name}
                character={item.character}
                profile_path={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
