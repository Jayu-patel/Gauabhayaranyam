
export default function DownloadSection() {
  return (
    <div className='w-[85%] mx-auto gap-5 lg:gap-1 flex flex-col-reverse lg:flex-row my-2 md:pb-8'>
        
        <div className='lg:flex-3 flex-1 flex items-center md:ml-20'>
            <div>
                <h1 className='text-[#579B52] text-[1.75rem] font-semibold'>Everything You Need to Donate - Right Here</h1>
                <p className='text-[#4F4F4F] text-[1.10rem] lg:text-[1.25rem] lg:w-[70%] sm:w-[85%] my-3'>
                    Whether you're decluttering your home or want to make a real difference, the Gauabhayaranyam app helps you do good with just a 
                    few taps Track your donation status, schedule pickups, and see the real-world impact of your contribution — all in one place.
                </p>
                <div className='[&_img]:cursor-pointer flex mt-1'>
                    <img loading="lazy" className="w-32 sm:w-44" src="/google_play.png" alt="" />
                    <img loading="lazy" className="w-32 sm:w-44 ml-5" src="/app_store.png" alt="" />
                </div>
            </div>
        </div>

        <div className='lg:flex-2 flex-1'>
            <img loading="lazy" src="/mobile_image.png" alt="" />
        </div>

    </div>
  )
}
