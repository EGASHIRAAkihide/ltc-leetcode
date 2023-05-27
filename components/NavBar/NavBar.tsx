import { authModalState } from "@/app/_state/recoil";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { PrimaryButton } from "../Button/Primary";

export function NavBar() {
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
      <div className='flex items-center'>
        <PrimaryButton size='small' text='sign in' type='button' onClick={handleClick} />
      </div>
    </div>
  )
}