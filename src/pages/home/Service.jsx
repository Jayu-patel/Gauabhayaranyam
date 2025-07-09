
export default function Service() {
  return (
    <div className='w-[85%] mx-auto py-14 scroll-mt-22' id="services">

        <div>
            <h1 className='text-3xl font-semibold mb-5'>Join Our Mission</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='bg-[#F8F7F2] rounded-[18px]'>
                    <div className='p-6 py-10'>
                        <h1 className='text-[1.75rem] text-[#579B52] font-semibold'>Become a Volunteer</h1>
                        <p className='text-[1.20rem] text-[#4F4F4F] font-medium py-1'>Help organize pickups and create awareness. Get rewarded and recognized in your city.</p>
                        <button className='text-white bg-[#579B52] px-5 py-3 mt-2 rounded-2xl cursor-pointer hover:bg-[#40753c] transition-all duration-100'>Sign Up to Volunteer</button>
                    </div>
                </div>
                <div className='bg-[#F8F7F2] rounded-[18px]'>
                    <div className='p-6 py-10'>
                        <h1 className='text-[1.75rem] text-[#579B52] font-semibold'>Register as Scrap Dealer</h1>
                        <p className='text-[1.20rem] text-[#4F4F4F] font-medium py-1'>Get connected to pickups in your area. Process scrap and support charity.</p>
                        <button className='text-white bg-[#579B52] px-5 py-3 mt-2 rounded-2xl cursor-pointer hover:bg-[#40753c] transition-all duration-100'>Partner as Dealer</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-8'>
            <h1 className='text-3xl font-semibold mb-5'>Our Impact So Far</h1>
            <div className='flex justify-center md:justify-evenly lg:justify-between flex-wrap gap-6 
                            [&_img]:w-16 [&_img]:h-16 [&_img]:mx-auto text-center 
                            [&_h2]:mt-[10px] [&_h2]:text-[#112D4E] [&_h2]:font-semibold [&_h2]:text-[1.55rem]
                            [&_p]:text-[1.30rem] [&_p]:text-[#579B52] [&_p]:mt-[-8px] impact_boxes
            '>

                <div className='h-[220px] w-[280px] bg-[#F6F6F6] rounded-[1.125rem] hover:translate-y-[-10px] transition-all duration-500'>
                    <div className='h-full w-full grid place-items-center'>
                        <div>
                            <img src="/animal_paw.svg" alt="" />
                            <h2>5000+</h2>
                            <p>Animal Helped</p>
                        </div>
                    </div>
                </div>

                <div className='h-[220px] w-[280px] bg-[#F6F6F6] rounded-[1.125rem] hover:translate-y-[-10px] transition-all duration-500'>
                    <div className='h-full w-full grid place-items-center'>
                        <div>
                            <img src="/recycle.svg" alt="" />
                            <h2>3,000 Kg</h2>
                            <p>Donations Processed</p>
                        </div>
                    </div>
                </div> 

                <div className='h-[220px] w-[280px] bg-[#F6F6F6] rounded-[1.125rem] hover:translate-y-[-10px] transition-all duration-500'>
                    <div className='h-full w-full grid place-items-center'>
                        <div>
                            <img src="/location.svg" alt="" />
                            <h2>120+</h2>
                            <p>Cities Covered</p>
                        </div>
                    </div>
                </div>

                <div className='h-[220px] w-[280px] bg-[#F6F6F6] rounded-[1.125rem] hover:translate-y-[-10px] transition-all duration-500'>
                    <div className='h-full w-full grid place-items-center'>
                        <div>
                            <img src="/group.svg" alt="" />
                            <h2>500+</h2>
                            <p>Volunteers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
