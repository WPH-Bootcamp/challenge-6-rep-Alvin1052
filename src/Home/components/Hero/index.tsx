import { DetailButton, TrailerButton } from '../../../components/ui/Buttontest';
import { useGetMovie } from '../../hooks/use-get-movie';

const Hero = () => {
  const { heroMovie, isLoading } = useGetMovie();
  if (!heroMovie) return <div>Data False</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='relative  w-full h-133.25  -mt-16 flex lg:h-202.5 lg:-mt-23'>
      <div className='absolute w-full h-full'>
        <img
          className='object-cover object-center w-full  lg:h-full'
          src={heroMovie?.backdrop_path}
          alt=''
        />
        <div className='bg-linear-to-t from-black to-transparent to-100%  absolute inset-0 bg-opacity-50' />
      </div>
      <div className='relative w-90.25 place-content-center mx-4 flex flex-col gap-6 lg:ml-35'>
        <div className='flex flex-col gap-4 max-w-full'>
          <b className='text-l text-neutral-50 text-bold  lg:text-3xl'>
            {heroMovie?.title}
          </b>
          <div className='text-sm lg:text-shadow-md text-neutral-400'>
            {heroMovie?.overview}
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 max-w-full'>
          <TrailerButton id={heroMovie.id} className='w-full' />
          <DetailButton id={heroMovie.id} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
