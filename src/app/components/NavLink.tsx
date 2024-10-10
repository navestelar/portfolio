import Link from "next/link"
import { ReactNode } from "react"

interface NavLinkProps {
  href: string
  children: ReactNode
  onClick?: () => void
}

export function NavLink({
  href,
  children,
  onClick
}: NavLinkProps) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-2xl lg:text-base rounded md:p-0 hover:text-white"
    >
      {children}	
    </Link>
  )
}