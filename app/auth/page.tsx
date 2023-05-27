import { AuthCommonModal } from "@/components/Modal/(Auth)/Common";
import { NavBar } from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
      <div className='max-w-7xl mx-auto'>
        <NavBar />
        <div className='flex items-center justify-center h-[calc(100vh-5rem] pointer-events-none select-none'>
          <div>hero image</div>
        </div>
        <AuthCommonModal />
      </div>
    </div>
  )
}