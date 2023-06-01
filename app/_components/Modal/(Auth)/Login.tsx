import { AuthModalType, authModalState } from "@/app/_state/recoil"
import { PrimaryButton } from "@/app/_components/Button/Primary"
import { FormItem } from "@/app/_components/Form/Item"
import { PrimaryLink } from "@/app/_components/Link/Primary"
import { SecondaryLink } from "@/app/_components/Link/Secondary"
import { useSetRecoilState } from "recoil"
import { auth } from "@/app/_firebase/firebase"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export function AuthLogin() {
  const setAuthModalState = useSetRecoilState(authModalState)
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const router = useRouter()

  const handleClick = (type: AuthModalType) => {
    setAuthModalState((prev) => ({
      ...prev,
      type
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputs.email || !inputs.password) {
      return toast.error('Please fill all fields')
    }

    try {
      const user = await signInWithEmailAndPassword(inputs.email, inputs.password)
      if (!user) {
        return toast.error("User doesn't exist")
      }

      toast.success("login successfully")
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
    <form className='space-y-6 px-6 py-4' onSubmit={handleLogin}>
      <h3 className='text-xl font-medium text-white'>sign in to leetclone</h3>

      <FormItem
        onChange={handleInputChange}
        labelText='your email'
        inputType='email'
        placeholder='name@company.com'
      />

      <FormItem
        onChange={handleInputChange}
        labelText='your password'
        inputType='password'
        placeholder='******'
      />

      <PrimaryButton
        text='login'
        type='submit'
        isLoading={loading}
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