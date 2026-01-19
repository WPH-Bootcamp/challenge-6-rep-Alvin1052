import type { Tmovie } from '@/Home/types';
import React from 'react';
import { Link } from 'react-router-dom';

interface Card {
  movie: Tmovie;
  i: number;
  index?: boolean;
}

const Card: React.FC<Card> = ({ movie, i, index }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      key={i}
      id={`${i}`}
      className='group relative w-54 h-99.25 flex flex-col gap-2 lg:gap-3 snap-start transition hover:scale-103 ease-in-out duration-300 hover:shadow-2xl  hover:cursor-pointer'
    >
      {/* Image */}
      <img
        className={` rounded-2xl w-54  object-contain group-hover:shadow-2xl group-hover:shadow-neutral-500/50`}
        src={movie.poster_path}
        alt=''
      />
      {/* Numbering */}
      <div
        className={`absolute w-8 h-8 rounded-full place-items-center place-content-center z-10 bg-black  opacity-60 mt-2 ml-2 ${
          index ? 'block' : 'hidden'
        }`}
      >
        <p className=' text-white '>{i + 1}</p>
      </div>

      {/* description */}
      <div className=' flex flex-col gap-0.5 z-10'>
        <b className='text-white truncate'>{movie.title}</b>

        <div className='flex gap-2 items-center '>
          <img src='./Icons/star.svg' alt='star' />
          <div>{movie.vote_average.toFixed(2)}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
