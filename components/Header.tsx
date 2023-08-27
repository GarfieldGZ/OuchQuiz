'use client';

import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';
import SearchBar from './SearchBar';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const Login = () => {
    console.log('Log in');
  };
  const SignUp = () => {
    console.log('Sign up');
  };

  return (
    <div className='relative'>
      <header className='w-full fixed top-0 z-50'>
        <nav className='mx-auto flex justify-between items-center sm:pl-12 sm:pr-16 px-4 py-4 '>
          <Link
            onClick={scrollToTop}
            href='/'
            className='flex justify-center items-center group'
          >
            <div className='xs:pl-4 xxs:pl-2 pl-0  group-hover:sm:bg-white z-10'>
              <Image src='/cat.svg' alt='logo' width={40} height={40} />
            </div>
            <span className='hidden sm:flex absolute font-mono font-bold left-[-100%] transition-transform duration-200 group-hover:translate-x-14 group-hover:left-10 text-2xl font-mono-bold ml-3'>
              Ouch!
            </span>
            <span className='hidden sm:flex text-2xl font-mono ml-2 transition-transform duration-300 delay-100 group-hover:translate-x-16 cursor-pointer'>
              Quiz
            </span>
          </Link>
          <SearchBar />
          <div>
            <CustomButton
              title='Login'
              containerStyles='sm:px-4 tracking-tight xs:tracking-normal px-1 xxs:px-2 py-2 text-base font-mono font-bold text-black rounded-full hover:text-red-500'
              handleClick={Login}
            />
            <CustomButton
              title='Sign up'
              containerStyles='sm:px-4 xxs:px-2 px-2 xs:tracking-normal xxs:tracking-tight tracking-tighter  mr-0 sm:mr-2  py-2 shadow-md text-base font-mono font-bold bg-white text-black rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 delay-100'
              handleClick={SignUp}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
