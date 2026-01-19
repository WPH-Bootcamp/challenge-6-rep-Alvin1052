import { FavoriteButton, TrailerButton } from '@/components/ui/Buttontest';
import type { TGenre } from '@/details/types';
import { Heart } from 'lucide-react';
import { FcLike } from 'react-icons/fc';

type THeroProps = {
  poster_path: string;
  original_title: string;
  release_date: string;
  id: number;
  vote_average: number;
  genres: TGenre[];
  isFavorite: boolean;
  handleFavorite: () => void;
};

const Hero: React.FC<THeroProps> = ({
  id,
  genres,
  original_title,
  poster_path,
  release_date,
  vote_average,
  isFavorite,
  handleFavorite,
}: THeroProps) => {
  return (
    <div className='flex flex-col gap-6 text-white mx-4 lg:flex-row lg:w-full'>
      {/* Image & Title Mobile Size */}
      <div className='flex gap-4'>
        {/* Image */}
        <div>
          <img
            className='w-29 h-42.75 rounded-xl lg:w-65 lg:h-96'
            src={poster_path}
            alt=''
          />
        </div>
        {/* Title & Calendar Mobile  Size */}
        <div className='gap-1 flex flex-col lg:hidden '>
          <div className='text-xl font-bold text-neutral-50'>
            {original_title}
          </div>
          <div className='flex gap-1 items-center '>
            <img src='../Icons/calendar.svg' alt='calendar' />
            <div className='text-sm text-white'>{release_date}</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        {/* Title Lg Size */}
        <div className='gap-1 lg:flex lg:flex-col hidden lg:gap-4 place-items-start'>
          {/* Title */}
          <div className='text-xl font-bold text-neutral-50 lg:text-display-xl'>
            {original_title}
          </div>
          {/* Release Date */}
          <div className='flex gap-1 items-center justify-center'>
            <img src='../Icons/calendar.svg' alt='calendar' />
            <div className='text-sm text-white'>{release_date}</div>
          </div>
        </div>
        {/* Button trailer & Favourite */}
        <div className='flex gap-4 lg:justify-start justify-center'>
          <TrailerButton id={id} className='lg:hidden' />
          <FavoriteButton
            onClick={() => {
              console.log('hello');
              handleFavorite();
            }}
          >
            {isFavorite ? <FcLike size={24} /> : <Heart size={24} />}
          </FavoriteButton>
        </div>
        {/* Rating Genre Age Limit */}
        <div className='flex gap-3 justify-center lg:gap-5 w-full '>
          {/* Rating */}
          <div className='grid grid-col-2 gap-2 place-items-center place-content-center p-4 border-neutral-800 border-[0.5px] rounded-2xl min-w-28.25 lg:min-w-69 bg-black'>
            <div>
              <img className='w-6 h-6' src='../Icons/star.svg' alt='rating' />
            </div>
            <div>
              <p className='text-center text-xs text-neutral-300'>Rating</p>
              <p className='text-center text-lg font-semibold text-neutral-50'>
                {vote_average.toFixed(2)}/10
              </p>
            </div>
          </div>
          {/* Genre */}
          <div className='grid grid-col-2 gap-2 place-items-center place-content-center p-4 border-neutral-800 border-[0.5px] rounded-2xl min-w-28.25 lg:min-w-69 bg-black'>
            <div>
              <img className='w-6 h-6' src='../Icons/video.svg' alt='genre' />
            </div>
            <div>
              <p className='text-center text-xs text-neutral-300'>Genre</p>
              <p className='text-center text-lg font-semibold text-neutral-50'>
                {genres[0].name}
              </p>
            </div>
          </div>
          {/* Age Limit */}
          <div className='grid grid-col-2 gap-2 place-items-center place-content-center p-4 border-neutral-800 border-[0.5px] rounded-2xl min-w-28.25 lg:min-w-69 bg-black'>
            <div>
              <img className='w-6 h-6' src='../Icons/kids.svg' alt='kids' />
            </div>
            <div>
              <p className='text-center text-xs text-neutral-300'>Age Limit</p>
              <p className='text-center text-lg font-semibold text-neutral-50'>
                {vote_average.toFixed(2)}/10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
