import Link from "next/link";

export function NavBar() {
  return (
    <div className='flex items-center justify-between sm:px-12 md:px-24 px-2'>
      <Link href='/' className='flex items-center justify-center h-20'>
        <div>logo</div>
      </Link>
      <div className='flex items-center'>
        <button className='bg-brand-orange text-white sm:px-4 px-2 py-1 rounded-md text-sm font-medium border-2 border-transparent
          hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange
          transition duration-300-ease-in-out'>
            sign in
        </button>
      </div>
    </div>
  )
}