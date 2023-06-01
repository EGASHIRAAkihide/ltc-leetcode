'use client'

import { AuthCommonModal } from "@/app/_components/Modal/(Auth)/Common";
import { NavBar } from "@/app/_components/NavBar/NavBar";
import { useRecoilValue } from "recoil";
import { authModalState } from "../_state/recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../_firebase/firebase";
import Link from "next/link";

export default function Page() {
  const authModal = useRecoilValue(authModalState);
  const [user] = useAuthState(auth);
  return (
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
      <div className='max-w-7xl mx-auto'>
        <NavBar />
        <div className='flex items-center justify-center h-[calc(100vh-5rem] pointer-events-none select-none'>
          <div>hero image</div>
        </div>
        <div>
          {user && user.email}<br />
          <Link href='/'>back to main page</Link>
        </div>
        {authModal.isOpen && <AuthCommonModal />}
      </div>
    </div>
  )
}