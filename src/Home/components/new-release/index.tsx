import { SkeletonCard } from '@/components/skeleton';
import Card from '@/components/ui/Card';
import { useNewReleaseMovie } from '@/Home/hooks/use-new-release';

const NewRelease = () => {
  const { listMovie, isLoading } = useNewReleaseMovie();

  return (
    <div
      className='
      custom-container pb-22.5'
    >
      {/* Movie New Release Now */}

      <h1 className='text-display-lg font-bold text-white'>New Release</h1>
      <div
        className='text-white  grid grid-cols-2
      lg:grid-cols-5  gap-5 mt-10'
      >
        {isLoading
          ? Array(5).map((_, i) => <SkeletonCard key={i} />)
          : listMovie?.map((movie, i) => (
              <Card movie={movie} i={i} key={i} index={false} />
            ))}
      </div>
    </div>
  );
};

export default NewRelease;
