import React from 'react'

const Chefs = () => (
    <section className='md:w-[85vw] w-[90vw] mx-auto mt-40'>
        <div className='flex flex-col items-center'>
            <img src="/chef.png" alt="chef" />
            <h1 className='text-4xl font-semibold text-white mt-2'><span className="text-[#FF9F0D]">Meet</span> Our Chefs</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-11">
            {Array.from({ length: 4 }).map((_, i) => (
                <img
                    key={i}
                    src={`/chef${i + 1}.png`}
                    className="w-full object-cover"
                    alt={`Chef ${i + 1}`}
                />
            ))}
        </div>
        <div className='flex justify-center mt-14'>
            <button className='border-[#FF9F0D] border text-white px-10 py-3 rounded-3xl'>See More</button>
        </div>
    </section>
)

export default Chefs
