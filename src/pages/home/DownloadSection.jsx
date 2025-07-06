
export default function DownloadSection() {
  return (
    <div className='w-[85%] mx-auto flex flex-col-reverse md:flex-row my-2 scroll-mt-18' id='download'>
        
        <div className='flex-3 flex items-center md:ml-20'>
            <div>
                <h1 className='text-[#579B52] text-[1.70rem] font-semibold'>Everything You Need to Donate - Right Here</h1>
                <p className='text-[#4F4F4F] text-[1.20rem] lg:w-[70%] sm:w-[85%] my-3'>
                    Whether you're decluttering your home or want to make a real difference, the ScrapSeva app helps you do good with just a 
                    few taps Track your donation status, schedule pickups, and see the real-world impact of your contribution — all in one place.
                </p>
                <div className='md:[&_img]:w-[180px] sm:[&_img]:w-[25%] [&_img]:w-[40%] flex mt-1'>
                    <img src="/google_play.png" alt="" />
                    <img className='ml-5' src="/app_store.png" alt="" />
                </div>
            </div>
        </div>

        <div className='flex-2'>
            <img src="/mobile_image.png" alt="" />
        </div>

    </div>
  )
}
