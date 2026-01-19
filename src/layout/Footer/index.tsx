const Footer = () => {
  return (
    <div
      className={`flex flex-col mt-10 lg:flex-row custom-container w-full gap-2 lg:py-10 px-4  text-white lg:justify-between justify-center relative bottom-0 left-0 right-0 lg:items-center `}
    >
      <div className='flex gap-1 items-center'>
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
  );
};

export default Footer;
