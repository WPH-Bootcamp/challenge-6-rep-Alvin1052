const Overview = ({ overview }: { overview: string }) => {
  return (
    <div>
      <div className='text-xl pb-4 lg:text-[32px] text-white  '>
        <strong>Overview</strong>
      </div>
      <div className='text-md  text-neutral-400'>{overview}</div>
    </div>
  );
};

export default Overview;
