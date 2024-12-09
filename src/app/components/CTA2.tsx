import React from 'react'

const CTA2 = () => (
  <section className='grid md:grid-cols-2 items-start md:w-[80vw] w-[90vw] mx-auto mt-20 pb-10 border-b border-b-[#FF9F0D] pt-16 md:gap-0 gap-7'>

    <div className='text-white'>
      <h3 className='text-3xl font-semibold'><span className='text-[#FF9F0D]'>Still</span> You Need Our Support ?</h3>
      <p className='text-sm text-gray-300 mt-2'>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
    </div>

    <div className='flex justify-end rounded overflow-hidden'>
      <input type="email" placeholder='Enter Your Email' className='bg-[#FF9F0D] md:px-5 px-3 py-3 !text-white placeholder:!text-gray-200 focus:outline-none rounded-s' />
      <button className='md:px-5 px-3 py-3 text-[#FF9F0D] bg-white whitespace-nowrap'>Subscribe Now</button>
    </div>

  </section>
)

export default CTA2
