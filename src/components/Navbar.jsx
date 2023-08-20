import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
const logo = '/images/logo.png'
import {BiSolidDownArrow} from 'react-icons/bi'
const flag = '/images/flag.png'

const Navbar = ({children}) => {
  return (
    <nav className="bg-white py-5">
      <div className="container flex items-center justify-between">
       <div className="logo">
        <Link href={"/"}>
         <Image width={200} height={60} src={logo} alt="Logo" />
        </Link>
       </div>
       <div className="menu">
        {children}
       </div>  
       <div className="actions flex items-center gap-3">
        <button className="bg-transparent border-none flex items-center gap-2 focus:outline-none text-base text-linkColor font-medium font-body">
          USD
          <BiSolidDownArrow className="text-[7px] text-linkColor"/>
        </button>
        <span className="mx-2 relative after:absolute after:top-1/2 after:left-1/2 after:contents-[''] after:w-[1px] after:h-[12px] after:bg-paragraph after:-translate-x-1/2 after:-translate-y-1/2 "></span>
        <button className="bg-transparent border-none flex items-center gap-2 focus:outline-none text-base text-linkColor font-medium font-body">
          <span className="w-[10px] h-[10px] rounded-full overflow-hidden">
            <Image src={flag} width={10} height={10} alt="flag.png" className="rounded-full"/>
          </span>
          Language
          <BiSolidDownArrow className="text-[8px] text-linkColor"/>
        </button>
        <Button outline={false} type="button" text="Become An Expert"/>
        <Button outline={true} type="button" text="Login / Logout"/>
       </div>
      </div>
    </nav>
  )
}

export default Navbar
