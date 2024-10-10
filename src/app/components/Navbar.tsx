"use client"
import Link from "next/link"
import { NavLink } from "./NavLink"
import Image from "next/image"
import { useState } from 'react'
import { Hamburger, X } from '@phosphor-icons/react'
import { MenuOverlay } from "./MenuOverlay"

export interface NavLinkProps {
  href: string
  label: string
}

const navLinks: NavLinkProps[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <nav onTouchCancel={() => setIsMenuOpen(false)} className="fixed top-0 left-0 ring-0 z-10 bg-[#121212] bg-opacity-90 w-full">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-8 md:py-8 md:px-12">
        <Link href='/' className="text-5xl text-white font-semibold">
          <Image
            src='/images/navestelar-logo.svg'
            alt="Logo"
            width={300}
            height={50}
            className="block w-[240px] h-auto md:w-[300px]"
          />
        </Link>

        <div className="mobile-menu block md:hidden">
          {isMenuOpen ? (
            <button 
              title="Close menu" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center p-2 rounded-lg border hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
            >
              <X size={40} />
            </button>
          ) : (
            <button
              title="Open menu" 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center p-2 rounded-lg border border-transparent hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
            >
              <Hamburger size={40} />
            </button>
          )}
        </div>
      
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isMenuOpen && <MenuOverlay closeMenu={() => setIsMenuOpen(false)} links={navLinks} />}
    </nav>
  )
}