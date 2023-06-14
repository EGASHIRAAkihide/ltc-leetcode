import { PrimaryButton } from "@/app/_components/Button/Primary";
import { FormItem } from "@/app/_components/Form/Item";
import { auth } from "@/app/_firebase/firebase";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

export function AuthResetPassword() {
  const [email, setEmail] = useState('');
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleReset = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(email);
      toast.success('sent password reset email successfuly ');
    } catch(e) {
      console.error(error);
      toast.error('error occured');
    }
  }

  return (
    <form className='space-y-6 px-6 py-4' onSubmit={handleReset}>
      <h3 className='text-xl font-medium text-white'>reset password</h3>
      <p className='text-sm text-white'>
        Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you to reset it.
      </p>

      <FormItem
        labelText='your email'
        inputType='email'
        placeholder='name@company.com'
        onChange={(e) => handleChange(e)}
      />

      <PrimaryButton
        text={sending ? 'sending...' : 'reset password'}
        type='submit'
      />
    </form>
  )
}