import { auth } from '@/app/_firebase/firebase';
import { ArrowLeftOnRectangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { useSignOut } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

export function LogoutButton() {
  const [signOut, loading, error] = useSignOut(auth);

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success('logout successfully');
    } catch (e) {
      console.error(error);
      toast.error('error occured')
    }
  }

  return (
    <button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange' onClick={handleLogout}>
      <div className='w-6 h-6'>
        {loading ? <ArrowPathIcon /> : <ArrowLeftOnRectangleIcon />}
      </div>
    </button>
  )
}