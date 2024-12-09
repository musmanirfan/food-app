import React from 'react'

const WhyChoose = () => (
    <section className='grid md:grid-cols-2 grid-cols-1 items-center md:w-[85vw] w-[90vw] mx-auto md:gap-0 gap-12 mt-40'>
        <div className='space-y-3 md:!order-1 order-2'>
            <div className='grid grid-cols-2 gap-3 items-end'>
                <img src="/choose1.png" alt="why choose images" className='w-full rounded-lg object-cover' />
                <img src="/choose2.png" alt="why choose images" className='w-full rounded-lg object-cover' />
            </div>
            <div className='grid grid-cols-3 gap-3 items-start'>
                <img src="/choose3.png" alt="why choose images" className='w-full rounded-lg object-cover h-72' />
                <img src="/choose4.png" alt="why choose images" className='w-full rounded-lg object-cover' />
                <div className='grid-rows-2 space-y-2 grid h-full'>
                    <img src="/choose5.png" alt="why choose images" className='w-full rounded-lg object-cover h-36' />
                    <img src="/choose6.png" alt="why choose images" className='w-full rounded-lg object-cover h-36' />
                </div>
            </div>
        </div>
        <div className='text-white md:w-[77%] md:ml-auto md:!order-2 order-1'>
            <img src="/choose.png" alt="" />
            <h1 className='text-4xl font-semibold mt-2'><span className="text-[#FF9F0D]">Extra</span> ordinary taste
                And Experienced </h1>
            <p className='mt-7'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className='flex gap-6 mt-7'>
                {["Fast Food", "Lunch", "Dinner"].map((p, i) => (
                    <div key={i}>
                        <div className='bg-[#FF9F0D] h-20 w-20 flex justify-center items-center rounded-lg'>
                            <img src={`/chooseIcon${i + 1}.png`} alt="Choose Icon List" />
                        </div>
                        <p className='text-center mt-1 text-sm'>{p}</p>
                    </div>
                ))}
            </div>

            <div className='mt-9 bg-white border-l-8 border-l-[#FF9F0D] py-4 px-8 flex items-center gap-6 w-fit rounded-lg'>
                <h4 className='text-[#FF9F0D] text-4xl font-extrabold'>30+</h4>
                <h4 className='text-black text-xl font-semibold'><span className='text-sm font-light !-mb-5'>Years of</span><br />Experienced</h4>
            </div>
        </div>
    </section>
)

export default WhyChoose
