'use client'

import Link from "next/link";
import { PrimaryButton } from "../Button/Primary";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/app/_state/recoil";

export function TopBar() {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = () => {
    setAuthModalState((prev) => ({
      ...prev,
      isOpen: true,
    }))
  }

  return (
    <div className='flex items-center justify-between sm:px-12 md:px-24 px-2'>
      <Link href='/' className='flex items-center justify-center h-20'>
        <div>logo</div>
      </Link>
      <div className='flex items-center space-x-4 flex-1 justify-end'>
        <div>
          <a href='#' target='_blank' rel='noreferer'className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'>Premium</a>
        </div>
        <PrimaryButton size='small' text='sign in' type='button' onClick={handleClick} />
      </div>
    </div>
  )
}