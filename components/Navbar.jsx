'use client'
import { MdMenu, MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const links = [{url:'/', title:'Home'}, {url:'/skills', title:'Skills'}, {url:'/contact', title:'Contact'}]
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)
  const path = usePathname()
  
  return (
    <>
      <header>
        {/* MENU ICONS */}
        <div className="fixed right-6 top-6 z-10 lg:hidden" onClick={() => setOpen(!open)}>
          {!open ? <MdMenu size={35} /> : <MdClose  size={35} />}       
        </div>
        {/* MOBILE NAV */}
        <nav className={`lg:hidden fixed bg-white h-screen w-screen text-3xl duration-300  ${open ? 'translate-x-0 ' : 'translate-x-full delay-200'}`}>
          <ul className="flex flex-col gap-[68px] justify-center items-center font-semibold h-full">
            {links.map((link,id) => (
              <li key={id} onClick={toggleMenu}><Link href={link.url}>{link.title}</Link></li>
            ))}
          </ul>
        </nav>
        {/* DESKTOP NAV */}
        <nav className="hidden lg:block text-3xl fixed w-full bg-white z-20">
          <ul className="h-[90px] flex justify-around items-center">
          {links.map((link,id) => (
              <li key={id} onClick={toggleMenu}><Link href={link.url}>{link.title}</Link></li>
            ))}
          </ul>
        </nav>
      </header>
    </>
    
  )
}

export default Navbar