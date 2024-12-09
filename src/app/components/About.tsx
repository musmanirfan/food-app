import React from 'react'

const About = () => (
  <section className='grid md:grid-cols-2 grid-cols-1 items-center md:w-[85vw] w-[90vw] mx-auto md:gap-0 gap-12 mt-40'>
    <div className='text-white md:w-[77%]'>
      <img src="/about-us.png" alt="about-us" />
      <h1 className='text-4xl font-semibold'><span className="text-[#FF9F0D]">We</span> Create the best <br />
        foody product
      </h1>
      <p className='mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
      <ul className='mt-6 space-y-3'>
        {["Lacus nisi, et ac dapibus sit eu velit in consequat.", " Quisque diam pellentesque bibendum non dui volutpat fringilla", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"].map(li => (
          <li className='flex gap-3 items-center' key={li}>
            <img src="/tick.png" alt="tick" className='h-2' />
            {li}
          </li>
        ))}
      </ul>
      <button className="bg-[#FF9F0D] text-white px-12 py-4 rounded-full mt-8">Read More</button>
    </div>

    <div className='grid grid-cols-2 gap-2'>
      <img src="/about.png" alt="img" className='col-span-2 w-full object-cover h-64 rounded-lg' />
      <img src="/about2.png" alt="img" className='rounded-lg object-cover h-40 w-full' />
      <img src="/about3.png" alt="img" className='rounded-lg object-cover h-40 w-full' />
    </div>

  </section>
)

export default About
