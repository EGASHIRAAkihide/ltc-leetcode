import { CommonLink, CommonLinkProps } from "./Common";

export function PrimaryLink({
  href,
  onClick,
  text,
}: Omit<CommonLinkProps, 'color'>) {
  return (
    <CommonLink
      color='text-brand-orange'
      href={href}
      onClick={onClick}
      text={text}
    />
  )
}