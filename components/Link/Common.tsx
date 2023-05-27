import { MouseEventHandler } from "react";

export type CommonLinkProps = {
  color: string;
  href?: string;
  onClick: MouseEventHandler<HTMLElement>;
  text: string;
}

export function CommonLink({
  color,
  href = '#',
  onClick,
  text
}: CommonLinkProps) {
  return (
    <a
      href={href}
      className={`text-sm block ${color} hover:underline text-right inline-block`}
      onClick={onClick}
    >
      {text}
    </a>
  )
}