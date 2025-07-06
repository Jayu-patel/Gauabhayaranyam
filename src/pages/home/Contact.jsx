
export default function Contact() {
  return (
    <div className='w-[85%] pt-14 md:pt-0 mx-auto mb-10 scroll-mt-20' id='contact'>

        <h1 className='text-3xl font-semibold mb-5'>Get In Touch</h1>
        <div className='bg-[#F6F6F6] rounded-[1.125rem]'>
            <div className='p-4 md:p-10 flex flex-col md:flex-row gap-5 md:gap-8'>

                <div className='md:w-1/2'>
                    <img className='rounded-[1.125rem]' src="/contact.png" alt="" />
                </div>

                <div className='md:w-1/2 flex flex-col gap-4'>
                    <input className='bg-[#FFFFFF] rounded-[1.125rem] p-4 border border-[#D9D9D9]' placeholder='Name' type="text" />
                    <input className='bg-[#FFFFFF] rounded-[1.125rem] p-4 border border-[#D9D9D9]' placeholder='Your Email' type="text" />
                    <textarea className='bg-[#FFFFFF] rounded-[1.125rem] p-4 border border-[#D9D9D9] h-[40%]' placeholder='Your Message' name="message"></textarea>
                    <button className='bg-[#579B52] text-white py-[2.5%] rounded-[1.125rem]'>Send Meassage</button>
                </div>
            </div>
        </div>

    </div>
  )
}
