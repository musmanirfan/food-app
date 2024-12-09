import React from 'react'

const CTA = () => {
    return (
        <section className='bg-[url(/ctaBg.png)] bg-center bg-no-repeat py-20 mt-40'>
            <div className='md:w-[80vw] w-[90vw] mx-auto md:grid md:grid-cols-2'>
                <div className='md:inline hidden'></div>
                <div className='text-white'>
                    <img src="/cta.png" alt="Call To Action" className='ml-auto' />
                    <h3 className='text-right mt-3 text-4xl font-semibold md:w-[94%] ml-auto'><span className='text-[#FF9F0D]'>We</span> Document Every Food
                        Bean Process untile it is saved</h3>
                    <p className='ml-auto text-right mt-5 text-sm text-gray-300 md:w-[88%]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
                    </p>
                    <div className='flex items-center gap-5 justify-end mt-7'>
                        <button className='border-[#FF9F0D] border text-white px-8 font-semibold py-3 rounded-3xl'>Read More</button>
                        <div className='flex gap-1 items-center'>
                            <img src="/play.png" alt="Play Video" className='h-12 font-semibold' />
                            Play Video
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA