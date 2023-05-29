import { AuthModalType, authModalState } from "@/app/_state/recoil"
import { PrimaryButton } from "@/app/_components/Button/Primary"
import { FormItem } from "@/app/_components/Form/Item"
import { PrimaryLink } from "@/app/_components/Link/Primary"
import { SecondaryLink } from "@/app/_components/Link/Secondary"
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

      <FormItem
        labelText='your email'
        inputType='email'
        placeholder='name@company.com'
      />

      <FormItem
        labelText='your password'
        inputType='password'
        placeholder='******'
      />

      <PrimaryButton
        text='login'
        type='submit'
      />

      <div className='w-full text-right'>
        <PrimaryLink
          onClick={() => handleClick('forgotPassword')}
          text='forgot password?'
        />
      </div>

      <div className='text-sm font-medium text-gray-300'>
        not registered?{" "}
        <SecondaryLink
          onClick={() => handleClick('register')}
          text='create account'
        />
      </div>
    </form>
  )
}