'use client'

import { XCircleIcon } from '@heroicons/react/24/outline'
import { AuthLogin } from './Login';
import { AuthSignUp } from './SignUp';
import { AuthResetPassword } from './ResetPassword';
import { authModalState } from '@/app/_state/recoil';
import { useRecoilValue } from 'recoil';
import { useCloseModal } from '@/app/_hooks/useCloseModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/_firebase/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export function AuthCommonModal() {
	const authModal = useRecoilValue(authModalState);
	const closeModal = useCloseModal();

	const [user, loading] = useAuthState(auth);
	const router = useRouter()

	useEffect(() => {
		if (user) {
			toast.error("User already login")
			router.push('/')
		}
	}, [user, router])

  return (
		<>
			<div
				className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'
				onClick={closeModal}
			></div>
			<div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
				<div className='relative w-full h-full mx-auto flex items-center justify-center'>
					<div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
						<div className='flex justify-end p-2'>
							<button
								type='button'
								className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
								onClick={closeModal}
							>
                <XCircleIcon className="h-6 w-6 text-black-500" />
							</button>
						</div>
            {authModal.type === 'login'
							? <AuthLogin />
						 	: authModal.type === 'register'
								? <AuthSignUp />
								: <AuthResetPassword />
						}
					</div>
				</div>
			</div>
		</>
	);
}
