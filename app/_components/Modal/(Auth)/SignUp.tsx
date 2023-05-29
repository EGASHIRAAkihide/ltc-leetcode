import { authModalState, AuthModalType } from "@/app/_state/recoil"
import { PrimaryButton } from "@/app/_components/Button/Primary"
import { FormItem } from "@/app/_components/Form/Item"
import { SecondaryLink } from "@/app/_components/Link/Secondary"
import { useSetRecoilState } from "recoil"

export function AuthSignUp() {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = (type: AuthModalType) => {
    setAuthModalState((prev) => ({
      ...prev,
      type
    }))
  }

  return (
    <form className='space-y-6 px-6 py-4'>
      <h3 className='text-xl font-medium text-white'>register to leetclone</h3>

      <FormItem
        labelText='email'
        inputType='email'
        placeholder='name@company.com'
      />

      <FormItem
        labelText='display name'
        inputType='text'
        placeholder='Jack'
      />

      <FormItem
        labelText='password'
        inputType='password'
        placeholder='******'
      />

      <PrimaryButton
        text='register'
        type='submit'
      />

      <div className='text-sm font-medium text-gray-300'>
        already have an account?{" "}
        <SecondaryLink
          onClick={() => handleClick('login')}
          text='login'
        />
      </div>
    </form>
  )
}