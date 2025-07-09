import { useState } from "react"
import Logo from "./Logo"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const [links, setLinks] = useState([
        { name: "Home", href: "#home" },        
        { name: "About", href: "#about" },
        { name: "How It Works", href: "#how_it_works" },
        { name: "Services", href: "#services" },
        { name: "Download", href: "#download" },
        { name: "Contact Us", href: "#contact" }
    ])
    
    return (
        <div className='bg-[#F8F7F2] flex justify-between z-50 top-0 sticky overflow-hidden'>
            
            <div className='ml-[7.5%]'>
                <a href="#home">
                    <Logo/>
                </a>
            </div>

            <div className='flex items-center'>
                <ul className='hidden md:flex justify-between md:w-[70vw] lg:w-[700px] mr-[15%] [&>li]:cursor-pointer'>
                    {
                        links.map((link,index)=>{
                            return <a key={index} href={link.href}>{link.name}</a>
                        })
                    }
                </ul>

                {/*menu icon for mobile*/}
                <img onClick={()=>{setShowMenu(true)}} className='w-6 md:hidden mr-8 cursor-pointer' src="/menu_icon.svg" alt="" />
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <img className='w-7 m-4 cursor-pointer' onClick={()=>{setShowMenu(false)}} src="/cross_icon.png" alt="" />
                <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
                    {
                        links.map((link,index)=>{
                            return <a key={index} href={link.href}>{link.name}</a>
                        })
                    }
                </ul>
                </div>
            </div>
        </div>
    )
}
