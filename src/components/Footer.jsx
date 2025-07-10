import Logo from "./Logo";

export default function Footer() {
  return (
    <div className='bg-[#151515] text-white'>
        <div>
            {/* section 1 */}
            <div className='w-[85%] mx-auto flex flex-col lg:flex-row gap-3 lg:gap-12 pt-10 pb-14'>
                <div className='flex-3'>
                    {/* logo */}
                        <div>
                            <div className='w-22 sm:w-28 bg-white'>
                                <img src="/logo.png" loading="lazy" alt="" />
                            </div>
                        </div>
                    <p className='text-[1.125rem] font-light py-3 w-[75%] lg:w-auto'>Gauabhayaranyam is a platform that helps you turn unused items into 
                        meaningful impact. Our mission has been inspiring homes to contribute since we began this journey.
                    </p>
                    <div className='flex gap-2 [&_img]:cursor-pointer [&_img]:hover:translate-y-[-10px] [&_img]:transition-all [&_img]:duration-500'>
                        <img src="facebook_icon.svg" loading="lazy" alt="" />
                        <img src="twitter_icon.svg" loading="lazy" alt="" />
                        <img src="linkdin_icon.svg" loading="lazy" alt="" />
                        <img src="insta_icon.svg" loading="lazy" alt="" />
                        <img src="youtube_icon.svg" loading="lazy" alt="" />
                    </div>

                </div>

                <div className='flex-1 py-10 lg:py-0'>
                    <h2 className='text-[#579B52] text-[1.25rem] font-medium'>Useful Links</h2>
                    <ul className='list-disc ml-3 leading-8 pt-3 text-[1.125rem]'>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy & Policy</li>
                    </ul>
                </div>

                <div className='flex-2'>
                    <h2 className='text-[#579B52] text-[1.25rem] font-medium'>Get In Touch</h2>
                    <div className='flex py-3'>
                        <img className="mt-[-18px]" src="/location_sm.svg" alt="" />
                        <p className='ml-3 text-[1.125rem]'>3rd Floor, Queens Arcade, Bilimora Road, Chikhli, Gujarat 396521</p>
                    </div>
                    <div className='flex py-3'>
                        <img src="/message_sm.svg" alt="" />
                        <p className='ml-3 text-[1.125rem]'>info@izonnet.com</p>
                    </div>
                </div>

            </div>

            {/* section 2 */}
            <div className='w-full border-[#D9D9D9] border-t-[0.5px] py-4 mt-4 flex justify-center text-center'>
                <p className='text-[1.125rem] w-[80%] lg:w-auto'>Copyright © 2025 <span className='text-[#579B52]'>Gauabhayaranyam</span> Design and Developed by <span className='text-[#579B52]'>Izonnet Web Solution Pvt. Ltd.</span></p>
            </div>
        </div>
    </div>
  )
}
