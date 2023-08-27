'use client';

import { Combobox } from '@headlessui/react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { useState } from 'react';

const SearchBar = () => {
  const handleSearch = () => {
    console.log(query);
  };
  const [query, setQuery] = useState('');

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Input
            className='search-input hidden md:flex w-60 md:w-72 border-2 border-black rounded-full px-4 py-2 text-base font-mono font-bold'
            placeholder='Enter share code to'
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Input
            className='search-input xs:flex hidden md:hidden w-48 border-2 border-black rounded-full px-4 py-2 text-base font-mono font-bold'
            placeholder='Enter code to'
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Input
            className='search-input xs:hidden tracking-tight flex w-36 border-2 border-black rounded-full px-2 py-2 text-base font-mono font-bold'
            placeholder='Enter code'
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Input className='hidden' />
          <CustomButton
            containerStyles='hidden md:flex absolute inset-y-0 right-0 items-center rounded-full px-4 text-base font-mono font-bold transition-all duration-300 delay-100 hover:text-white hover:bg-black'
            title='join quiz'
            handleClick={handleSearch}
          />
          <CustomButton
            containerStyles='md:hidden absolute inset-y-0 right-0 flex items-center rounded-full xs:px-4 px-2 text-base font-mono font-bold transition-all duration-300 delay-100 hover:text-white hover:bg-black'
            title='join'
            handleClick={handleSearch}
          />
        </div>
      </Combobox>
    </form>
  );
};

export default SearchBar;
