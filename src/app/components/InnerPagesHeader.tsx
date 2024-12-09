"use client"

import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const InnerPagesHeader = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <header className='absolute top-0 left-0 w-full md:py-5 py-3 z-40 bg-[#0D0D0D]'>
                <div className='md:w-[85vw] w-[95vw] mx-auto'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <IoIosMenu className='text-white text-xl md:hidden inline' onClick={() => setOpen(true)} />
                            <h1 className='text-[#FF9F0D] md:text-2xl text-xl font-semibold'>Food<span className='text-white'>tuck</span></h1>
                        </div>
                        <nav className='md:flex hidden gap-8 items-center text-white'>
                            <div className='text-[#FF9F0D]'>Home</div>
                            {["Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((val, i) => (
                                <div key={i}>{val}</div>
                            ))}
                        </nav>
                        <div className='flex md:gap-4 gap-2 items-center'>
                            {["Search", "User", "cart"].map((src, i) => (
                                <img key={i} src={`/${src}.png`} alt={src} className='h-5 object-contain' />
                            ))}
                        </div>
                    </div>
                </div>
            </header>
            <aside className={`w-full bg-[#0D0D0D] fixed top-0 ${open ? "left-0" : "-left-[200vw]"} h-screen z-50 transition-[left] duration-700`}>
                <div className='w-[90vw] pt-5 mx-auto flex justify-between items-center'>
                    <h1 className='text-[#FF9F0D] text-3xl font-semibold'>Food<span className='text-white'>tuck</span></h1>
                    <IoClose onClick={() => setOpen(false)} className='text-white text-2xl' />
                </div>
                <nav className='text-white text-2xl w-[90vw] mx-auto mt-14 space-y-10'>
                    <div className='w-fit relative'>Home <div className='absolute -bottom-2 left-[50%] right-[50%] -translate-x-[50%] h-2 w-2 rounded-full bg-[#FF9F0D]'></div></div>
                    <div>Menu</div>
                    <div>Blog</div>
                    <div>Pages</div>
                    <div className='flex items-center'>
                        <div>About</div>
                        <RiArrowDropDownLine className='text-3xl' />
                    </div>
                    <div>Shop</div>
                    <div>Contact</div>
                </nav>
            </aside>
        </>
    );
};

export default InnerPagesHeader;