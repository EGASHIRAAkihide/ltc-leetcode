'use client'

import Link from "next/link";
import { PrimaryButton } from "../Button/Primary";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/app/_state/recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/_firebase/firebase";
import Image from 'next/image';
import { LogoutButton } from "../Button/Logout";

export function TopBar() {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = () => {
    setAuthModalState((prev) => ({
      ...prev,
      isOpen: true,
    }))
  }

  return (
    <div className='flex items-center justify-between sm:px-12 md:px-24 px-2'>
      <Link href='/'className='flex items-center justify-center h-20'>
        <div>logo</div>
      </Link>
      <div className='flex items-center space-x-4 flex-1 justify-end'>
        <div>
          <a href='#' target='_blank' rel='noreferer'className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'>Premium</a>
        </div>
        {user ? (
          <div className='cursor-pointer group relative'>
            <div className='w-8 h-8 flex justify-center align-middle'>
            <Image
              src='/next.svg'
              alt='user-prifile-image'
              width={32}
              height={32}
              className='rounded-full bg-white'
            />
            </div>
            

            <div className='absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'>
              <p className='text-sm'>{user.email}</p>
            </div>
          </div>
        ) : (
          <Link href='/auth' onClick={handleClick}>
            <PrimaryButton size='small' text='sign in' type='button' />
          </Link>
        )}
        {user && <LogoutButton />}
      </div>
    </div>
  )
}