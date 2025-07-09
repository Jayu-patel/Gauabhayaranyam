
export default function Home() {
  return (
    <div className='bg-[#F8F7F2] overflow-hidden'>
        <div className='w-[85%] mx-auto flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-0'>

            <div className='lg:w-1/2'>
                <div className='[&_h2]:text-[#579B52] [&_h2]:font-semibold lg:mt-8'>
                    <h2 className='text-[2rem] md:text-[2.75rem]'>Donate Scrap,</h2>
                    <h2 className='text-[2.85rem] md:text-[3.40rem] mt-[-20px]'>Spread smiles</h2>
                    <p className='w-[95%] md:w-[80%] text-[1.10rem] md:text-[1.25rem] my-3 font-medium text-[#151515]'>Donate your old, unused items and help support education, shelter, and sustainability.</p>
                    <button className='bg-[#579B52] px-4 py-2 mt-2.5 text-white rounded-2xl cursor-pointer hover:bg-[#40753c] transition-all duration-100'>Get Started</button>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-2 lg:pb-4">

                <video className="w-full aspect-video" controls poster="/video_image.png">
                    <source src="/videos/sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
            </div>
        </div>
    </div>
  )
}
