import { NavLinkProps } from "./Navbar"
import { NavLink } from "./NavLink"

interface MenuOverlayProps {
  links: NavLinkProps[]
  closeMenu: () => void
}

export function MenuOverlay({
  links,
  closeMenu
}: MenuOverlayProps) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map(link => (
        <li key={link.label}>
          <NavLink onClick={closeMenu} key={link.label} href={link.href}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}