import { atom } from 'recoil'

/* NOTE: AuthModalのstate管理(From) */
export type AuthModalType = 'login' | 'register' | 'forgotPassword'

type AuthModalState = {
  isOpen: boolean;
  type: AuthModalType
}

const initialAuthModalState: AuthModalState = {
  isOpen: false,
  type: 'login',
}

export const authModalState = atom<AuthModalState>({
  key: 'authModalState',
  default: initialAuthModalState,
})
/* NOTE: AuthModalのstate管理(To) */