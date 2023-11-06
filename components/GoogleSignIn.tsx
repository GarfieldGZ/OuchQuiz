'use client';
import { signOut, signIn, useSession } from 'next-auth/react';
import React from 'react';

const GoogleSignIn = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className='flex ml-auto'>
        <div className='sm:px-4 tracking-tight xs:tracking-normal px-1 xxs:px-2 py-2 text-base font-mono font-bold text-black rounded-full hover:animate-pulse text-center cursor-default'>
          {session.user.name}
        </div>
        <button
          onClick={() => signOut()}
          className='sm:px-4 tracking-tight xs:tracking-normal px-1 xxs:px-2 py-2 text-base font-mono font-bold text-gray-400 rounded-full hover:text-red-500 text-center'
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className='sm:px-4 xxs:px-2 px-2 xs:tracking-normal xxs:tracking-tight tracking-tighter  mr-0 sm:mr-2  py-2 shadow-md text-base font-mono font-bold bg-white text-black rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 delay-100'
    >
      Sign in
    </button>
  );
};

export default GoogleSignIn;
