import { useState } from "react"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    
    return (
        <div className='bg-[#F8F7F2] flex justify-between z-50 top-0 sticky overflow-hidden'>
            
            <div className='ml-[7.5%] py-2 w-24'>
                <a href="#home">
                    <div className='h-[35px] w-[35px] rounded-full bg-[#579B52] mx-auto flex items-center justify-center'>
                        <img src="/logo.svg" alt="" />
                    </div>
                    <div className='text-[1.10rem] text-center font-medium'>
                        <span>Scrap</span>
                        <span className='text-[#579B52]'>Seva</span>
                    </div>
                </a>
            </div>

            <div className='flex items-center'>
                <ul className='hidden sm:flex justify-between sm:w-[65vw] lg:w-[600px] mr-[15%] [&>li]:cursor-pointer'>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#download">Download</a>
                </ul>

                {/*menu icon for mobile*/}
                <img onClick={()=>{setShowMenu(true)}} className='w-6 sm:hidden mr-8 cursor-pointer' src="/menu_icon.svg" alt="" />
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} sm:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <img className='w-7 m-4 cursor-pointer' onClick={()=>{setShowMenu(false)}} src="/cross_icon.png" alt="" />
                <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
                    <a onClick={()=>setShowMenu(false)} href="#home">Home</a>
                    <a onClick={()=>setShowMenu(false)} href="#about">About</a>
                    <a onClick={()=>setShowMenu(false)} href="#services">Services</a>
                    <a onClick={()=>setShowMenu(false)} href="#contact">Contact Us</a>
                    <a onClick={()=>setShowMenu(false)} href="#download">Download</a>
                </ul>
                </div>
            </div>
        </div>
    )
}
