import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  id: number;
  className?: string;
  children?: ReactNode;
}
interface FavoriteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const TrailerButton: React.FC<ButtonProps> = ({
  id,
  className = '',
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <button
        className={`lg:w-50 lg:h-13 h-11 w-75.25 content-center justify-center place-content-center place-items-center text-white bg-red-900 rounded-full flex gap-2 cursor-pointer ${className} `}
      >
        <b>Watch Trailer</b>
        <img className='w-6 h-6' src='../Icons/playtrailer.svg' alt='' />
      </button>
    </Link>
  );
};

export const DetailButton: React.FC<ButtonProps> = ({ id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <button className='lg:min-w-57.5 lg:h-13 h-11 w-full content-center justify-center place-content-center place-items-center text-white bg-red-900 rounded-full flex gap-2 cursor-pointer '>
        <b>See Details</b>
      </button>
    </Link>
  );
};

export const FavoriteButton: React.FC<FavoriteProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`w-11 h-11 rounded-full border-neutral-900 place-items-center place-content-center border-1 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
