import React from 'react'

const Footer = () => <>
    <footer className='md:w-[85vw] w-[90vw] mx-auto mt-40 grid md:grid-cols-4 md:gap-0 gap-11 text-white'>
        <div className='space-y-4'>
            <h3 className='text-2xl font-medium'>About Us.</h3>
            <p className='text-gray-200'>Corporate clients and leisure travelers has
                been relying on Groundlink for dependab
                safe, and professional chauffeured car
                service in major cities across World.
            </p>
            <div className='flex items-center gap-3'>
                <img src="/Watch.png" alt="Watch" />
                <div className='space-y-1'>
                    <h5 className='text-lg font-medium'>Opening Hours</h5>
                    <p className='text-sm'>{"Mon - Sat(8.00 - 6.00)"}</p>
                    <p className='text-sm'>Sunday - Closed</p>
                </div>
            </div>
        </div>
        <div className='md:mx-auto'>
            <h3 className='text-2xl font-medium'>Useful Links</h3>
            <ul className='space-y-5 mt-7'>
                {["About", "News", "Partners", "Team", "Menu", "Contacts"].map(val => (
                    <li className='text-gray-400' key={val}>{val}</li>
                ))}
            </ul>
        </div>
        <div className='md:mx-auto'>
            <h3 className='text-2xl font-medium'>Help?</h3>
            <ul className='space-y-5 mt-7'>
                {["FAQ", "Term & conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map(val => (
                    <li className='text-gray-400' key={val}>{val}</li>
                ))}
            </ul>
        </div>
        <div className='md:ml-auto'>
            <h3 className='text-2xl font-medium'>Recent Post</h3>
            <ul className="space-y-5 mt-7">
                {Array(3).fill(null).map((_, i) => (
                    <li key={i} className="flex gap-2">
                        <img
                            src={`/post${i + 1}.png`}
                            alt={`Recent Post Image ${i + 1}`}
                            className="w-16 h-16 object-cover"
                        />
                        <div className="space-y-px">
                            <p className="text-gray-500 text-sm">20 Feb 2022</p>
                            <h5>Keep Your Business {i + 1}</h5>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
    <div className='bg-[#4F4F4F] py-7 mt-12 text-white'>
        <div className='md:w-[85vw] w-[90vw] mx-auto md:flex items-center justify-between'>
            <p className='text-gray-300'>Copyright © 2024 by Saif. All Rights Reserved.</p>
            <img src="/socialIcons.png" alt="Social Icons" className='mt-5 md:mt-0' />
        </div>
    </div>

</>

export default Footer