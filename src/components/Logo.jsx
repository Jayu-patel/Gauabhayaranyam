
export default function Logo() {
    return (
    <div className='w-[84px] flex flex-col'>
        <div className='flex justify-center'>
            <div className='h-[35px] w-[35px] rounded-full bg-[#579B52] grid place-items-center'>
                <img src="/logo.svg" alt="" />
            </div>
        </div>
        <div className='text-center text-[1.10rem] font-medium'>
            <span>Scrap</span>
            <span className='text-[#579B52]'>Seva</span>
        </div>
    </div>
    )
}
