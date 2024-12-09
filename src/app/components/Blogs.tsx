import React from 'react'

const Blogs = () => (
    <section className='md:w-[85vw] w-[90vw] mx-auto mt-40'>
        <div className='flex flex-col items-center'>
            <img src="/blog.png" alt="blog" />
            <h1 className='text-4xl font-semibold text-white mt-2'><span className="text-[#FF9F0D]">Latest</span> News & Blogs</h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 mt-11 gap-6'>
            {["Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis", "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A", "Curabitur rutrum velit ac congue malesuada"].map((title, i) => (
                <div className='border' key={i}>
                    <img src={`/blog${i + 1}.png`} className='w-full object-cover' alt="Chefs list" />
                    <div className='p-6 text-white'>
                        <p className='text-[#FF9F0D]'>10 February 2022</p>
                        <h3 className='text-xl font-medium mt-2'>{title}</h3>
                        <div className='flex justify-between items-center mt-5'>
                            <div className='text-gray-200'>Learn More</div>
                            <img src="/blogIcon.png" alt="blogIcon" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
)

export default Blogs