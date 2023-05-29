import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../_state/recoil";

export function useCloseModal() {
	const setAuthModal = useSetRecoilState(authModalState);

	const closeModal = () => {
		setAuthModal((prev) => ({
			...prev,
			isOpen: false,
			type: 'login',
		}))
	}

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Eacape") closeModal();
		}

		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	})

	return closeModal;
}
