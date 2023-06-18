'use client'

import Link from "next/link";
import { PrimaryButton } from "../Button/Primary";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/app/_state/recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/_firebase/firebase";
import Image from 'next/image';
import { LogoutButton } from "../Button/Logout";

import { ChevronLeftIcon, ChevronRightIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import { TimerButton } from "../Button/Timer";

type Props = {
  problemPage?: boolean;
}

export function TopBar({
  problemPage = false
}: Props) {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = () => {
    setAuthModalState((prev) => ({
      ...prev,
      isOpen: true,
    }))
  }

  return (
    <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
<div className={`flex w-full items-center justify-between ${!problemPage ? 'max-w-[1200px] mx-auto' : ''}`}>
      <Link href='/'className='flex items-center justify-center h-20'>
        <div>logo</div>
      </Link>

      {problemPage && (
        <div className='flex items-center gap-4 flex-1 justify-center'>
          <div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'>
            <ChevronLeftIcon className='text-white w-6 h-6' />
          </div>

          <Link href='/' className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'>
            <div className='w-8 h-8'>
              <ListBulletIcon />
            </div>
            <p>Problem List</p>
          </Link>

          <div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'>
            <ChevronRightIcon className='text-white w-6 h-6' />
          </div>
        </div>
      )}

      <div className='flex items-center space-x-4 flex-1 justify-end'>
        <div>
          <a href='#' target='_blank' rel='noreferer'className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'>Premium</a>
        </div>
        {problemPage && (
          <div>
            <TimerButton />
          </div>
        )}
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
    </nav>
  )
}