import { AuthModalType, authModalState } from "@/app/_state/recoil"
import { useSetRecoilState } from "recoil"

export function AuthLogin() {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = (type: AuthModalType) => {
    setAuthModalState((prev) => ({
      ...prev,
      type
    }))
  }

  return (
    <form className='space-y-6 px-6 py-4'>
      <h3 className='text-xl font-medium text-white'>sign in to leetclone</h3>
      <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
          your email
        </label>
        <input type='email' name='email' id='email' className='
          border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-bloue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
          placeholder='name@company.com'
        />
      </div>

      <div>
        <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
          your password
        </label>
        <input type='password' name='password' id='password' className='
          border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-bloue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
          placeholder='********'
        />
      </div>

      <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
        login
      </button>

      <button className='flex w-full justify-end' onClick={() => handleClick('forgotPassword')}>
        <a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
          forgot password?
        </a>
      </button>

      <div className='text-sm font-medium text-gray-300'>
        not registered?{" "}
        <a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick('register')}>
          create account
        </a>
      </div>
    </form>
  )
}