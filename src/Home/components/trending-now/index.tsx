import Card from '@/components/ui/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useGetMovie } from '../../hooks/use-get-movie';

const TrendingNow = () => {
  const { listMovie, isLoading } = useGetMovie();
  if (isLoading) return <div>Loading...</div>;
  if (!listMovie) return <div>Data False</div>;

  return (
    <div id='Trending' className='custom-container pb-20   '>
      {/* Movie Trending Now */}

      <h1 className='text-display-lg  text-white font-bold'>Trending Now</h1>

      <Carousel className=' snap-x snap-mandatory touch-pan-x'>
        <CarouselContent className='text-white  flex my-10 gap-5 snap-center w-full '>
          {listMovie.map((movie, i) => (
            <CarouselItem
              key={i}
              className='flex flex-col gap-2 lg:gap-3 snap-start'
            >
              <Card movie={movie} i={i} index={true} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className='bg-[#0A0D12]/60 text-neutral-50' />
        <CarouselPrevious className='bg-[#0A0D12]/60' />
      </Carousel>
    </div>
  );
};

export default TrendingNow;
