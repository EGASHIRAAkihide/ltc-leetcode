import { auth } from '@/app/_firebase/firebase';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { useSignOut } from 'react-firebase-hooks/auth';

export function LogoutButton() {
  const [signOut, loading, error] = useSignOut(auth);

  const handleLogout = async () => {
    try {
      await signOut();
      console.log('success to logout');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange' onClick={handleLogout}>
      <div className='w-6 h-6'>
        <ArrowLeftOnRectangleIcon />
      </div>
    </button>
  )
}