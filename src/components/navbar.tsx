import clsx from "clsx"
import Link from "next/link"
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { PiMoonStarsFill, PiSunFill } from 'react-icons/pi';


const Navbar = (
  { globalDark, globalDarkHandler, globalPage}: 
  { globalDark: boolean, globalDarkHandler : Dispatch<SetStateAction<boolean>>, globalPage:String }) => {
  const [dark, updateDark] = useState<boolean>(globalDark)
  const [page, updatePage] = useState<String>(globalPage)
  const [nav, setNav] = useState(false)
  const handleNav = () => {setNav(!nav)}
  useEffect(() => { updateDark(globalDark); updatePage(globalPage) }, [globalDark, globalPage])
  return (
    <div className={clsx('px-4 fixed w-full h-24 shadow-xl z-[100] ease-in-out duration-300', dark ? "bg-indigo-800" : "bg-gray-400")}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        
        {/* Dark Mode Toggle Button */}
        <button onClick={() => { globalDarkHandler(!dark); console.log(page)}}>{dark ? <PiMoonStarsFill size={35} /> : <PiSunFill size={35} />}</button>
        
        {/* Navigation */}
        <div>
          <ul className='hidden md:flex text-l font-bold'>
            <li className={clsx('ml-6 rounded-2xl',(page.localeCompare("home")==0)?clsx("font-bold border-2",dark?"border-white":"border-black"):"")}>
              <Link
                className={clsx("hover:shadow-xl flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
                href="/"
              >🏠 Home </Link>
            </li>
            <li className={clsx('ml-6 rounded-2xl',(page.localeCompare("about")==0)?clsx("font-bold border-2",dark?"border-white":"border-black"):"")}>
              <Link
                className={clsx("hover:shadow-xl flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
                href="/about"
              >🤗 About Me</Link>
            </li>
            <li className={clsx('ml-6 rounded-2xl',(page.localeCompare("research")==0)?clsx("font-bold border-2",dark?"border-white":"border-black"):"")}>
              <Link
                className={clsx("hover:shadow-xl flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
                href="/research"
              >🧪 Research </Link>
            </li>
            <li className={clsx('ml-6 rounded-2xl',(page.localeCompare("origami")==0)?clsx("font-bold border-2",dark?"border-white":"border-black"):"")}>
              <Link
                className={clsx("hover:shadow-xl flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
                href="/origami"
              >🎨 Origami </Link>
            </li>
            <li className={clsx('ml-6 rounded-2xl',(page.localeCompare("blog")==0)?clsx("font-bold border-2",dark?"border-white":"border-black"):"")}>
              <Link
                className={clsx("hover:shadow-xl flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
                href="/"
              >📝 Blogs </Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div className='md:hidden' onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Side Navbar */}
      <div className={nav ? clsx('font-bold md:hidden fixed left-0 top-0 w-full h-screen ',dark?"bg-white/30":"bg-black/60") : ''} onClick={handleNav}>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 
              clsx('flex flex-col gap-4 fixed left-0 top-0 w-[60%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500',dark?"bg-black":"bg-gray-200")
              : 'flex flex-col gap-4 fixed left-[-100%] top-0 w-[50%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500'
          }
        >
          <div className={clsx('rounded-2xl',(page.localeCompare("home")==0)?clsx("font-bold border-2",dark?"border-white":"border-black"):"")}>
            <Link
              className={clsx("hover:shadow-xl flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
              href="/"
            >🏠 Home </Link>
          </div>
          <div className={clsx('rounded-2xl',(page.localeCompare("about")==0)?clsx("font-bold border-2",dark?"border-white":"border-black"):"")}>
            <Link
              className={clsx("hover:shadow-xl flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
              href="/about"
            >🤗 About Me </Link>
          </div>
          <div className={clsx('rounded-2xl',(page.localeCompare("research")==0)?clsx("font-bold border-2",dark?"border-white":"border-black"):"")}>
            <Link
              className={clsx("hover:shadow-xl flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
              href="/research"
            >🧪 Research </Link>
          </div>
          <div className={clsx('rounded-2xl',(page.localeCompare("origami")==0)?clsx("font-bold border-2",dark?"border-white":"border-black"):"")}>
            <Link
              className={clsx("hover:shadow-xl flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
              href="/origami"
            >🎨 Origami </Link>
          </div>
          <div className={clsx('rounded-2xl',(page.localeCompare("blogs")==0)?clsx("font-bold border-2",dark?"border-white":"border-black"):"")}>
            <Link
              className={clsx("hover:shadow-xl flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
              href="/origami"
            >📝 Blogs </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;