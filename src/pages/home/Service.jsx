
export default function Service() {
  return (
    <div className='w-[85%] mx-auto py-14 scroll-mt-16' id="services">

        <div>
            <h1 className='text-3xl font-semibold mb-5'>Join Our Mission</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='bg-[#F8F7F2] rounded-[18px]'>
                    <div className='p-6 py-10'>
                        <h1 className='text-[1.75rem] text-[#579B52] font-semibold'>Become a Volunteer</h1>
                        <p className='text-[1.20rem] text-[#4F4F4F] font-medium py-1'>Help organize pickups and create awareness. Get rewarded and recognized in your city.</p>
                        <button className='text-white bg-[#579B52] px-5 py-3 mt-2 rounded-2xl cursor-pointer'>Sign Up to Volunteer</button>
                    </div>
                </div>
                <div className='bg-[#F8F7F2] rounded-[18px]'>
                    <div className='p-6 py-10'>
                        <h1 className='text-[1.75rem] text-[#579B52] font-semibold'>Register as Scrap Dealer</h1>
                        <p className='text-[1.20rem] text-[#4F4F4F] font-medium py-1'>Get connected to pickups in your area. Process scrap and support charity.</p>
                        <button className='text-white bg-[#579B52] px-5 py-3 mt-2 rounded-2xl cursor-pointer'>Partner as Dealer</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-8'>
            <h1 className='text-3xl font-semibold mb-5'>Our Impact So Far</h1>
            <div className='flex justify-center md:justify-between flex-wrap gap-6 lg:gap-3 
                            [&_img]:w-16 [&_img]:h-16 [&_img]:mx-auto text-center 
                            [&_h2]:mt-[10px] [&_h2]:text-[#112D4E] [&_h2]:font-semibold [&_h2]:text-[1.55rem]
                            [&_p]:text-[1.30rem] [&_p]:text-[#579B52] [&_p]:mt-[-8px]
            '>

                <div className='h-[220px] w-[280px] bg-[#F6F6F6] rounded-[1.125rem]'>
                    <div className='h-full w-full grid place-items-center'>
                        <div>
                            <img src="/animal_paw.svg" alt="" />
                            <h2>5000+</h2>
                            <p>Animal Helped</p>
                        </div>
                    </div>
                </div>

                <div className='h-[220px] w-[280px] bg-[#F6F6F6] rounded-[1.125rem]'>
                    <div className='h-full w-full grid place-items-center'>
                        <div>
                            <img src="/recycle.svg" alt="" />
                            <h2>3,000 Kg</h2>
                            <p>Donations Processed</p>
                        </div>
                    </div>
                </div> 

                <div className='h-[220px] w-[280px] bg-[#F6F6F6] rounded-[1.125rem]'>
                    <div className='h-full w-full grid place-items-center'>
                        <div>
                            <img src="/location.svg" alt="" />
                            <h2>120+</h2>
                            <p>Cities Covered</p>
                        </div>
                    </div>
                </div>

                <div className='h-[220px] w-[280px] bg-[#F6F6F6] rounded-[1.125rem]'>
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

        <div className="mt-20">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 bg-[#F6F6F6] rounded-[1.125rem]">
                <div className="w-full lg:w-1/2 p-2 md:p-8">
                    <img className="w-full rounded-[1.125rem]" src="/video_image.png" alt="" />
                </div>
                <div className="w-full lg:w-1/2 p-4 md:p-8">
                    <h1 className="text-[1.50rem] text-[#579B52] font-semibold">Watch How ScrapSeva Works</h1>
                    <p className="text-[#151515] text-[1.05rem] md:text-[1.10rem] font-medium py-3">From doorstep pickup to community impact, see how your scrap donation creates change. Our short video takes you through the journey.</p>
                    <ul className="list-disc md:text-[1.10rem] text-[#4F4F4F] font-medium [&_li]:ml-4 [&_li]:leading-8">
                        <li>Schedule scrap pickups in just a few taps</li>
                        <li>See how your donation is processed and valued</li>
                        <li>Know exactly where your donation goes</li>
                        <li>Join a network of eco-conscious donors and volunteers</li>
                        <li>Schedule scrap pickups in just a few taps</li>
                        <li>Know exactly where your donation goes</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}
