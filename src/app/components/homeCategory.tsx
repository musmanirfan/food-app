import React from 'react'

const HomeCategory = () => (
    <section className='md:w-[85vw] w-[90vw] mx-auto mt-40'>
        <div className='flex flex-col items-center'>
            <img src="/category.png" alt="category" />
            <h1 className='text-4xl font-semibold text-white mt-2'><span className="text-[#FF9F0D]">Choose</span> Food Item</h1>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 mt-11 gap-6">
            {Array(4).fill(null).map((_, i) => (
                <img
                    src={`/category${i + 1}.png`}
                    key={i}
                    className="w-full object-cover"
                    alt={`Food category ${i + 1}`}
                />
            ))}
        </div>

    </section>
)

export default HomeCategory
