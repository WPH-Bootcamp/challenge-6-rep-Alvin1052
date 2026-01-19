import React, { type ReactNode, type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Konten di dalam card
  className?: string; // Kelas CSS tambahan dari Tailwind atau lainnya
}

const CardEffect: React.FC<CardProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`transform transition-transform duration-300 scale-90 hover:scale-92 hover:shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardEffect;
