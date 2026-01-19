const Footer = () => {
  return (
    <>
      <div
        className={`relative flex flex-col lg:flex-row w-full gap-2 lg:py-10  text-white lg:justify-between justify-center lg:items-center px-11xl `}
      >
        <div className='flex gap-1 items-center max-w-360'>
          <img
            className='w-7 h-7 lg:w-10 lg:h-10'
            src='../Icons/logo.svg'
            alt='logo'
          />
          <strong className='text-white text-[20px] lg:text-[28.5px]'>
            Movie
          </strong>
        </div>
        <div className='text-neutral-600 text-xs lg:text-md'>
          <p>Copyright ©2025 Movie Explorer</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
