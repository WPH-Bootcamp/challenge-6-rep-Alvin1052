const NoDataSkeleton = () => {
  return (
    <div className='bg-black w-screen h-screen  lg:-mt-[92px]  -mt-[64px] -mb-[120px] flex flex-col items-center justify-center gap-4'>
      <div className='w-[300px] flex flex-col gap-6 place-content-center place-items-center'>
        {/* Content */}
        <div className='flex flex-col place-items-center place-content-center'>
          <img
            className='w-[200px] h-[200px] mix-blend-luminosity'
            src='../Icons/movieIcon.svg'
            alt='movieIcon'
          />
          <div className='w-full text-center flex flex-col gap-2 '>
            <strong className='text-white text-[16px] font-semibold '>
              Data Empty
            </strong>
            <p className='text-neutral-400 text-sm  '>
              You don't have a favorite movie yet
            </p>
          </div>
        </div>
        {/* Button */}
        <div className='w-full h-[52px] bg-red-600 place-items-center place-content-center rounded-full text-center'>
          <a href={'/'} className='text-white font-semibold text-[16px] '>
            Explore Movie
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoDataSkeleton;
