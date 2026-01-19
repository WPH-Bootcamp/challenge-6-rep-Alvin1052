export const SkeletonCard = () => {
  const title: string = 'Judul';
  const rating: number = 5;
  return (
    <div className='relative w-54 h-99.25 flex flex-col gap-2 lg:gap-3 snap-start bg-neutral-400 rounded-2xl'>
      {/* Image */}
      <img
        className={` rounded-2xl w-54  object-contain`}
        src={'./Icons/movieIcon.svg'}
        alt=''
      />

      {/* description */}
      <div className=' flex flex-col gap-0.5 z-10'>
        <b className='text-white truncate'>{title}</b>

        <div className='flex gap-2 items-center '>
          <img src='./Icons/star.svg' alt='star' />
          <div>{rating}</div>
        </div>
      </div>
    </div>
  );
};

export const NoDataSkeleton = () => {
  return (
    <div className='bg-black w-screen h-screen  lg:-mt-23  -mt-[64px] -mb-30 flex flex-col items-center justify-center gap-4'>
      <div className='w-75 flex flex-col gap-6 place-content-center place-items-center'>
        {/* Content */}
        <div className='flex flex-col place-items-center place-content-center'>
          <img
            className='size-50 mix-blend-luminosity'
            src='../Icons/movieIcon.svg'
            alt='movieIcon'
          />
          <div className='w-full text-center flex flex-col gap-2 '>
            <strong className='text-white text-md font-semibold '>
              Data Empty
            </strong>
            <p className='text-neutral-400 text-sm  '>
              You don't have a favorite movie yet
            </p>
          </div>
        </div>
        {/* Button */}
        <div className='w-full h-13 bg-red-600 place-items-center place-content-center rounded-full text-center'>
          <a href={'/'} className='text-white font-semibold text-md '>
            Explore Movie
          </a>
        </div>
      </div>
    </div>
  );
};

export const ErrorSkeleton = () => {
  return (
    <div className='bg-black w-screen h-screen  lg:-mt-23  -mt-[64px] -mb-30 flex flex-col items-center justify-center gap-4'>
      <div className='w-75 flex flex-col gap-6 place-content-center place-items-center'>
        {/* Content */}
        <div className='flex flex-col place-items-center place-content-center'>
          <img
            className='size-50 mix-blend-luminosity'
            src='../Icons/movieIcon.svg'
            alt='movieIcon'
          />
          <div className='w-full text-center flex flex-col gap-2 '>
            <strong className='text-white text-md font-semibold '>
              Data Not Found
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};
