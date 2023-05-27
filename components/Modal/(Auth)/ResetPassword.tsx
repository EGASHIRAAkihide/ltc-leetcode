import { PrimaryButton } from "@/components/Button/Primary";
import { FormItem } from "@/components/Form/Item";

export function AuthResetPassword() {
  return (
    <form className='space-y-6 px-6 py-4'>
      <h3 className='text-xl font-medium text-white'>reset password</h3>
      <p className='text-sm text-white'>
        Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you to reset it.
      </p>

      <FormItem
        labelText='your email'
        inputType='email'
        placeholder='name@company.com'
      />

      <PrimaryButton
        text='reset password'
        type='submit'
      />
    </form>
  )
}