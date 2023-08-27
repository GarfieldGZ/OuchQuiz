'use client';

import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className='flex flex-col text-black mt-5 '>
      <div className='flex max-md:flex-col-reverse flex-wrap gap-5 sm:px-16 px-6 py-10 '>
        <div className='flex flex-col justify-start items-start gap-4 '>
          <Link
            href='/'
            className='flex items-center max-md:mx-auto '
            onClick={scrollToTop}
          >
            <Image
              src='/cat-face.svg'
              alt='homeLogo'
              width={32}
              height={32}
              className='object-contain'
            />
            <div className='ml-2 text-lg font-mono font-semibold'>
              Ouch!Quiz
            </div>
          </Link>
          <Link
            target='_blank'
            href='https://www.xiliutech.com/'
            className='flex items-center max-md:mx-auto '
          >
            <Image
              src='/xiliu.svg'
              alt='logo'
              width={32}
              height={32}
              className='object-contain'
            />
            <div className='ml-2 text-base font-sans font-semibold'>
              XILIU TECH
            </div>
          </Link>
        </div>
        <div className='footer-links flex max-sm:flex-col grow sm:justify-around '>
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className=' w-fit max-sm:mx-auto max-sm:my-2 '
            >
              <div className='text-lg font-mono font-semibold w-fit max-sm:mx-auto'>
                {link.title}
              </div>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className='text-base font-mono'
                >
                  <div className='hover:text-red-500 w-fit max-sm:mx-auto'>
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
