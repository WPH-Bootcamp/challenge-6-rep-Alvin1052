import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [search, setSearch] = useState('');
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const navigate = useNavigate();

  const HandleSearch = () => {
    setIsActiveSearch(!isActiveSearch);
    setIsScroll(true);
  };
  const HandleMenu = () => {
    setIsActiveMenu(!isActiveMenu);
    setIsScroll(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && search) {
      if (search !== '') {
        navigate(`/search/${search}`);
        setSearch('');
        setIsActiveSearch(false);
      }
    }
  };

  return (
    <div
      className={`w-full top-0 lg:px-11xl sticky z-50  ${
        isScroll ? 'backdrop-blur-xl' : 'bg-transparent'
      } transition-all duration-300 ${
        isActiveMenu || isActiveSearch ? 'h-screen bg-black' : 'h-full'
      }
      `}
    >
      <div className='flex justify-between w-full px-4 py-4.5'>
        {/* Logo NavItem */}
        <div
          className={`flex gap-10 items-center justify-center ${
            isActiveSearch ? 'hidden' : false
          }`}
        >
          <Link to={'/'} className='flex gap-1 items-center justify-between'>
            <img src='../Icons/logo.svg' alt='logo' />
            <strong className='text-white'>Movie</strong>
          </Link>

          {/* list NavItems */}
          <ul
            className={`lg:flex gap-12 text-white hidden items-center ${
              isActiveMenu ? 'absolute top-1/10 flex flex-col gap-4' : 'hidden'
            }`}
          >
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/Favorite'}>Favorite</Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-6 items-center'>
          <img
            className={`w-6 h-6 hidden ${isActiveSearch ? 'block!' : 'hidden'}`}
            src='../Icons/backIcon.svg'
            alt='search'
            onClick={HandleSearch}
          />
          {/* Search Box */}
          <div
            className={` lg:w-60.75 lg:h-14 lg:bg-black lg:flex lg:text-neutral-500 lg:items-center lg:pl-4 lg:rounded-2xl hidden gap-2 ${
              isActiveSearch ? 'flex!' : 'hidden'
            }   `}
          >
            <img
              className='w-6 h-6 group-focus:opacity-0 '
              src='../Icons/Search.svg'
              alt='search'
            />

            <input
              id='search'
              name='search'
              type='text'
              placeholder='Search Movie'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              className='bg-transparent outline-none text-white'
            />
          </div>

          <img
            className={`lg:hidden ${isActiveSearch ? 'hidden' : false}`}
            src='../Icons/Search.svg'
            alt='search'
            onClick={HandleSearch}
          />

          <img
            className={`lg:hidden ${isActiveMenu ? 'hidden' : 'block'} ${
              isActiveSearch ? 'hidden' : false
            }`}
            src='../Icons/menu.svg'
            alt='menu'
            onClick={HandleMenu}
          />
          <img
            className={`${isActiveMenu ? 'block' : 'hidden'}`}
            src='../Icons/exit.svg'
            alt='exit'
            onClick={HandleMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
