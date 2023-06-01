import { MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: 'small' | 'full';
  text: string,
  type: 'button' | 'submit' | 'reset',
  isLoading?: boolean
}

export function PrimaryButton({
  onClick,
  size = 'full',
  text = 'button',
  type = 'button',
  isLoading = false,
}: Props) {
  return (
    <button
      type={type}
      className={`bg-brand-orange text-white rounded-md text-sm font-medium border-2 border-transparent
      hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange
        transition duration-300-ease-in-out
        ${size === 'small'
          ? 'inline-block sm:px-4 px-2 py-1'
          : 'w-full sm:px-6 px-4 py-2'
        }
        `}
        onClick={onClick}
    >
      {isLoading ? 'loading...' : text}
    </button>
  )
}