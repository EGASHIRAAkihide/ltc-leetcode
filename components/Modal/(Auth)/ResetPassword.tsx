export function AuthResetPassword() {
  return (
    <form className='space-y-6 px-6 py-4'>
      <h3 className='text-xl font-medium text-white'>reset password</h3>
      <p className='text-sm text-white'>
        Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you to reset it.
      </p>

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

      <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-grand-orange hover:bg-brand-orange-s'>
        reset password
      </button>
    </form>
  )
}