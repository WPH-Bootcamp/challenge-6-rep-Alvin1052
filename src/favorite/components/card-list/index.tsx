import { FavoriteButton, TrailerButton } from '@/components/ui/Buttontest';
import type { Tmovie } from '@/features/favorite/services';
import { Heart } from 'lucide-react';
import { FcLike } from 'react-icons/fc';

interface CardlistProps {
  movie: Tmovie;
  handleFavorite: () => void;
}

const CardList: React.FC<CardlistProps> = ({ movie, handleFavorite }) => {
  const {
    id,
    poster_path,
    original_title,
    vote_average,
    overview,
    isFavorite,
    title,
  } = movie;

  return (
    <div className='group flex flex-col lg:flex-row gap-6 lg:justify-between hover:cursor-pointer'>
      {/* <Link to={`/movie/${movie.id}`}> */}
      {/* Content */}
      <div className='flex gap-4 lg:w-244.5'>
        {/* Image */}

        {poster_path ? (
          <img
            className='w-26 h-39 lg:w-45.5 lg:h-67.5  rounded-xl object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:shadow-neutral-500/50'
            src={poster_path}
            alt={title}
          />
        ) : (
          <img
            className='w-26 h-39 lg:w-45.5 lg:h-67.5  rounded-xl object-contain object-center group-hover:scale-105 transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:shadow-neutral-500/50'
            src='../Icons/movieIcon.svg'
            alt=''
          />
        )}

        {/* content */}
        <div className='w-54.5 lg:w-full flex flex-col gap-1 lg:gap-3'>
          <div className='text-md font-bold'> {original_title}</div>
          <div className='flex gap-1 items-center'>
            <div>
              <img src='../Icons/star.svg' alt='' />
            </div>
            <div>{vote_average.toFixed(2)} </div>
          </div>
          <div className='text-ellipsis line-clamp-2'>{overview}</div>
          <TrailerButton id={id} className='invisible lg:visible mt-6' />
        </div>
      </div>
      {/* </Link> */}
      {/* Button */}
      <div className=' flex  gap-4 justify-center '>
        <TrailerButton id={id} className='lg:hidden' />
        <FavoriteButton onClick={handleFavorite}>
          {isFavorite ? (
            <FcLike
              className='group-hover:shadow-red-500/60 group-hover:shadow-2xl'
              size={24}
            />
          ) : (
            <Heart size={24} />
          )}
        </FavoriteButton>
      </div>
    </div>
  );
};

export default CardList;
