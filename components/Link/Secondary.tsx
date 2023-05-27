import { CommonLink, CommonLinkProps } from "./Common";

export function SecondaryLink({
  href,
  onClick,
  text,
}: Omit<CommonLinkProps, 'color'>) {
  return (
    <CommonLink
      color='text-blue-700'
      href={href}
      onClick={onClick}
      text={text}
    />
  )
}