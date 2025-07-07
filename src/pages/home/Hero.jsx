
export default function Hero() {
  return (
    <div className='bg-[#F8F7F2] overflow-hidden pt-12 scroll-mt-20' id='home'>
        <div className='w-[85%] mx-auto flex flex-col md:flex-row gap-0 md:gap-10 lg:gap-0'>

            <div className='md:w-1/2 md:pb-16'>
                <div className='[&_h2]:text-[#579B52] [&_h2]:font-semibold'>
                    <h2 className='text-[2rem] md:text-[2.75rem]'>Donate Scrap,</h2>
                    <h2 className='text-[2.85rem] md:text-[3.40rem] mt-[-20px]'>Spread smiles</h2>
                    <p className='w-[95%] md:w-[80%] text-[1.10rem] md:text-[1.25rem] my-3 font-medium text-[#151515]'>Donate your old, unused items and help support education, shelter, and sustainability.</p>
                    <button className='bg-[#579B52] px-4 py-2 mt-2.5 text-white rounded-2xl cursor-pointer'>Get Started</button>
                </div>
            </div>

            <div className='md:w-1/2 hero h-[350px] sm:h-[450px] md:h-auto relative'>
                <div className=''>
                    <img className='md:w-[230px] w-[50%] z-20 absolute bottom-0 md:right-[200px] right-[40%]' src="/hero_1.png" alt="" />
                    <img className='md:w-[250px] w-[50%] z-30 absolute bottom-[-40px] md:right-[60px] right-[10%] scale-x-[-1]' src="/hero_2.png" alt="" />
                    <img className='md:w-auto w-[100%] absolute bottom-0 md:right-4 right-0' src="/blob.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
