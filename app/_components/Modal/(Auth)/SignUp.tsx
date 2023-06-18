'use client';

import { authModalState, AuthModalType } from "@/app/_state/recoil"
import { PrimaryButton } from "@/app/_components/Button/Primary"
import { FormItem } from "@/app/_components/Form/Item"
import { SecondaryLink } from "@/app/_components/Link/Secondary"
import { useSetRecoilState } from "recoil"
import { useEffect, useState } from "react"
import { auth } from "@/app/_firebase/firebase"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

export function AuthSignUp() {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = (type: AuthModalType) => {
    setAuthModalState((prev) => ({
      ...prev,
      type
    }))
  }
  const [ inputs, setInputs ] = useState({
    email: '',
    displayName: '',
    password: '',
  })

  const router = useRouter()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputs.email || !inputs.displayName || !inputs.password) {
      return toast.error('Please fill all fields')
    }
    
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password,
      )
      if (!newUser) return

      toast.success("created new user!")
      router.push('/')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  return (
    <form className='space-y-6 px-6 py-4' onSubmit={handleRegister}>
      <h3 className='text-xl font-medium text-white'>register to leetclone</h3>

      <FormItem
        labelText='email'
        inputType='email'
        placeholder='name@company.com'
        onChange={handleChangeInput}
      />

      <FormItem
        labelText='displayName'
        inputType='text'
        placeholder='Jack'
        onChange={handleChangeInput}
      />

      <FormItem
        labelText='password'
        inputType='password'
        placeholder='******'
        onChange={handleChangeInput}
      />

      <PrimaryButton
        text='register'
        type='submit'
        isLoading={loading}
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