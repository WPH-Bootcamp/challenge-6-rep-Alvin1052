import Card from '@/components/ui/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useGetMovie } from '../../hooks/use-get-movie';
import { SkeletonCard } from '@/components/skeleton';

const TrendingNow = () => {
  const { listMovie, isLoading } = useGetMovie();

  return (
    <div id='Trending' className='custom-container pb-20   '>
      {/* Movie Trending Now */}

      <h1 className='text-display-lg  text-white font-bold'>Trending Now</h1>

      <Carousel className=' snap-x snap-mandatory touch-pan-x'>
        <CarouselContent className='text-white  flex my-10 gap-5 snap-center w-full '>
          {isLoading
            ? Array(5).map((_, i) => <SkeletonCard key={i} />)
            : listMovie?.map((movie, i) => (
                <CarouselItem
                  key={i}
                  className='flex flex-col gap-2 lg:gap-3 snap-start'
                >
                  <Card movie={movie} i={i} index={true} />
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselNext className='bg-[#0A0D12]/60 ' />
        <CarouselPrevious className='bg-[#0A0D12]/60' />
      </Carousel>
    </div>
  );
};

export default TrendingNow;
