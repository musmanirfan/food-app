"use client"

import React, { use } from 'react'
import Image from 'next/image'
import { CalendarMonth, ChatSharp, Facebook, FormatQuote, Instagram, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, Pinterest, Star, Twitter, Visibility, YouTube } from '@mui/icons-material'
import { blogs, comments } from '@/app/components/data'
import InnerPagesHeader from '@/app/components/InnerPagesHeader'
import InnerPageBanner from '@/app/components/innerPageBanner'
import CTA2 from '@/app/components/CTA2'
import Footer from '@/app/components/Footer'
import { PiArrowBendDoubleUpLeft, PiUserCirclePlus } from 'react-icons/pi'

interface BlogDetailProps {
    params: Promise<{ slug: string }>;
}

export default function BlogDetail({ params }: BlogDetailProps) {
    const resolvedParams = use(params);
    const { slug } = resolvedParams;

    const blog = blogs.find((_, index) => index.toString() === slug);

    if (!blog) {
        return <div className="text-center mt-10">Blog not found</div>;
    }

    const recentPost = [
        {
            image: "/blogImages/recent1.jpeg",
            date: "June 22, 2020",
            para: "Lorem ipsum dolor sit cing elit, sed do."
        },
        {
            image: "/blogImages/recent2.jpeg",
            date: "June 22, 2020",
            para: "Lorem ipsum dolor sit cing elit, sed do."
        },
        {
            image: "/blogImages/recent3.jpeg",
            date: "June 22, 2020",
            para: "Lorem ipsum dolor sit cing elit, sed do."
        },
        {
            image: "/blogImages/recent4.jpeg",
            date: "June 22, 2020",
            para: "Lorem ipsum dolor sit cing elit, sed do."
        },
    ]
    const FilterByMenu = [
        {
            image: "/blogImages/menu1.jpeg",
            name: "Chicken Fry",
            num: "26"
        },
        {
            image: "/blogImages/menu2.jpeg",
            name: "Burger Food",
            num: "46"
        },
        {
            image: "/blogImages/menu3.jpeg",
            name: "Pizza",
            num: "16"
        },
        {
            image: "/blogImages/menu4.jpeg",
            name: "Fresh Fruits",
            num: "36"
        },
        {
            image: "/blogImages/menu5.jpeg",
            name: "Vegetables",
            num: "16"
        },
    ]



    return (
        <>
            <InnerPagesHeader />
            <InnerPageBanner currentPage={"BLog Details"} previousPage={"Blog details"} />
            <div className='sm:mx-[120px] mx-[10px] flex gap-8'>
                <div className='w-[100%] sm:w-[70%]'>
                    <div className='flex flex-col gap-10 mt-20'>
                        <div
                            className="sm:h-[520px] h-[300px] bg-cover bg-center pt-5 pl-5"
                            style={{ backgroundImage: `url(${blog.image})` }}
                        >
                        </div>
                        <div className='flex items-center gap-2 '>

                            <p><CalendarMonth style={{ color: '#FF9F0D' }} />Feb 14, 2022 /</p>

                            <p><ChatSharp style={{ color: '#FF9F0D' }} /> 3 /</p>
                            <div className='flex items-center gap-1'>
                                <PiUserCirclePlus style={{ color: '#FF9F0D', fontSize: '1.5rem' }} />
                                <p className='text-nowrap'> Admin</p>
                            </div>
                        </div>
                        <div>
                            {blog.para1}
                        </div>
                        <div>
                            {blog.para2}
                        </div>
                        <div className='text-white bg-[#FF9F0D] px-4 py-3 flex gap-3'>
                            <FormatQuote className='' style={{ fontSize: '2rem' }} />
                            {blog.para3}
                        </div>
                        <div className='flex gap-5 sm:flex-row flex-col'>
                            <div className='sm:w-[50%] w-[100%] flex flex-col gap-6'>
                                <div>
                                    {blog.para4}
                                </div>
                                <div>
                                    {blog.para5}
                                </div>
                            </div>
                            <div className='sm:w-[50%] w-[100%] h-[366px]'>
                                <Image unoptimized className='w-[424px] h-[366px]' src={blog.image} alt='blog' width={50} height={50} />
                            </div>
                        </div>
                        <div>
                            {blog.para6}
                        </div>
                        <div>
                            {blog.para7}
                        </div>
                    </div>

                    <div className='border p-3 border-[#E0E0E0] flex sm:flex-row flex-col mt-5 gap-3 sm:justify-between sm:mt-10'>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-bold text-sm'>Tags:</h1>
                            <p className='text-sm'>{blog.tags}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-bold text-sm'>Share:</h1>
                            <Facebook className='text-[#4F4F4F]' style={{ fontSize: '1rem' }} />
                            <Twitter className='text-[#4F4F4F]' style={{ fontSize: '1rem' }} />
                            <Instagram className='text-[#4F4F4F]' style={{ fontSize: '1rem' }} />
                            <Pinterest className='text-[#4F4F4F]' style={{ fontSize: '1rem' }} />
                        </div>
                    </div>

                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold'>Comments - 03</h1>
                        {comments?.length > 0 ? (
                            comments.map(({ image, name, date, para }, i) => (
                                <div className={`flex gap-4 mt-7 sm:mt-10 ${i === 1 ? 'sm:pl-12 pl:0' : ''}`} key={i}>
                                    <div className='w-[12%]'>
                                        <Image unoptimized className='rounded-full w-[62px] sm:w-[72px] sm:h-[65px] h-[45px]' src={image} alt='man' width={50} height={50} />
                                    </div>
                                    <div className='w-[88%] '>
                                        <div className='flex items-center gap-5'>
                                            <h1>{name}</h1>
                                            <h1 className={`text-sm whitespace-nowrap flex items-center gap-1 ${i === 1 ? 'text-[#FF9F0D]' : ''
                                                }`}>
                                                <PiArrowBendDoubleUpLeft />
                                                Reply
                                            </h1>
                                        </div>
                                        <p className='flex items-center text-sm text-[#828282]'><CalendarMonth style={{ color: '#FF9F0D', fontSize: '15px' }} />{date}</p>
                                        <p className='text-sm text-[#4F4F4F]'>{para}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No comments available</p>
                        )}
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold'>Post a comment</h1>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Name*"
                                className="w-1/2 border h-14 border-gray-300 focus:outline-none px-3 py-2"
                            />
                            <input
                                type="email"
                                placeholder="Email*"
                                className="w-1/2 border border-gray-300 focus:outline-none px-3 py-2"
                            />
                        </div>
                        <textarea
                            name="textarea"
                            rows={10}
                            cols={50}
                            placeholder='Write a comment'
                            className="border border-gray-300 mt-5 p-2 w-full"
                        ></textarea>
                        <button className='w-[212px] h-[56px] transition-all text-white mt-5 bg-[#FF9F0D] hover:bg-white hover:text-black hover:border hover:border-black'>Post a Comment</button>

                    </div>

                    <div className='flex gap-3 mx-auto w-fit mt-20'>
                        <div className="border border-[#F2F2F2] h-[48px] w-[48px] flex justify-center items-center hover:bg-[#FF9F0D] group">
                            <KeyboardDoubleArrowLeft className="text-[#FF9F0D] group-hover:text-white" />
                        </div>
                        <div className="border border-[#F2F2F2] h-[48px] w-[48px] flex justify-center items-center hover:bg-[#FF9F0D] group">
                            <h1 className="text-[#FF9F0D] group-hover:text-white">1</h1>
                        </div>
                        <div className="border border-[#F2F2F2] h-[48px] w-[48px] flex justify-center items-center hover:bg-[#FF9F0D] group">
                            <h1 className="text-[#FF9F0D] group-hover:text-white">2</h1>
                        </div>
                        <div className="border border-[#F2F2F2] h-[48px] w-[48px] flex justify-center items-center hover:bg-[#FF9F0D] group">
                            <h1 className="text-[#FF9F0D] group-hover:text-white">3</h1>
                        </div>
                        <div className="border border-[#F2F2F2] h-[48px] w-[48px] flex justify-center items-center hover:bg-[#FF9F0D] group">
                            <KeyboardDoubleArrowRight className="text-[#FF9F0D] group-hover:text-white" />
                        </div>
                    </div>
                </div>
                <div className='sm:block hidden sm:w-[30%] my-20'>
                    <div className="flex items-center border border-gray-300  overflow-hidden w-80">
                        <input
                            type="text"
                            name="text"
                            placeholder="Search Your Keyword.."
                            className="flex-1 px-4 py-4 text-sm text-gray-600 outline-none"
                        />
                        <button
                            className="bg-[#FF9F0D] text-white py-5 px-5 flex items-center justify-center transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="25" viewBox="0 0 24 24" width="25">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex flex-col justify-center mt-5 items-center gap-2 border border-gray-300 px-5 py-10'>
                        <Image className='rounded-full' src={"/blogImages/sider-image.jpeg"} alt='sider' width={100} height={100} />
                        <h2 className='font-bold'>Prince Miyako</h2>
                        <p>Blogger/Photographer</p>
                        <div><Star style={{ color: '#FF9F0D' }} /><Star style={{ color: '#FF9F0D' }} /><Star style={{ color: '#FF9F0D' }} /><Star style={{ color: '#FF9F0D' }} /><Star style={{ color: '#FF9F0D' }} /> (1 Review)</div>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod dolorum aperiam asperiores omnis? Nesciunt porro maxime magnam quis tempore explicabo, quisquam quasi in tempora temporibus deleniti maiores ex a!</p>
                        <div className='flex gap-2'><Facebook /><Twitter /><Instagram /><Pinterest /></div>
                    </div>
                    <div className='border border-gray-300 px-5 py-10 mt-5'>
                        <h2 className='font-bold'>Recent Post</h2>
                        {recentPost.map(({ image, date, para }, i) => (
                            <div key={i} className='flex gap-3 w-full py-3 border-b border-gray-300'>
                                <Image className='rounded-md h-[70px] w-[30%]' unoptimized src={image} alt='recent' width={70} height={35} />
                                <div className='w-[70%] flex flex-col justify-center gap-2'>
                                    <p className='text-sm'>{date}</p>
                                    <p className='text-sm'>{para}</p>
                                </div>
                            </div>

                        ))}
                        <div>
                        </div>
                    </div>
                    <div className='border border-gray-300 px-5 py-10 mt-5'>
                        <h2 className='font-bold'>Filter By Menu</h2>
                        {FilterByMenu.map(({ image, name, num }, i) => (
                            <div key={i} className='flex gap-3 w-full py-3 items-center'>
                                <Image className='rounded-md h-[50px] w-[25%]' unoptimized src={image} alt='recent' width={70} height={35} />
                                <div className='w-[75%] flex item-center justify-between gap-2'>
                                    <p className='text-sm font-bold'>{name}</p>
                                    <p className='text-sm'>{num}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                    <div className='border border-gray-300 px-5 py-10 mt-5'>
                        <h2 className='font-bold'>Filter By Menu</h2>
                        <div className='flex flex-wrap gap-4 mt-5'>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Sandwich</button>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Tikka</button>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Bbq</button>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Restaurant</button>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Chicken Sharma</button>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Health</button>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Fastfood</button>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Food</button>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Pizza</button>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Burger</button>
                            <button className='px-4 py-2 text-sm border border-gray-300'>Chicken</button>
                        </div>

                    </div>
                    <div className='border border-gray-300 px-5 py-10 mt-5'>
                        <h2 className='font-bold'>Photo Gallery</h2>
                        <div className='flex flex-wrap gap-1 mt-5'>
                            <div className="relative group w-[90px] h-[65px]">
                                <Image
                                    alt="gallery"
                                    width={50}
                                    unoptimized
                                    height={50}
                                    className="w-full h-full object-cover"
                                    src="/blogImages/gallery1.jpeg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Visibility className="text-white w-8 h-8" />
                                </div>
                            </div>
                            <div className="relative group w-[90px] h-[65px]">
                                <Image
                                    alt="gallery"
                                    width={50}
                                    unoptimized
                                    height={50}
                                    className="w-full h-full object-cover"
                                    src="/blogImages/gallery2.jpeg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Visibility className="text-white w-8 h-8" />
                                </div>
                            </div>
                            <div className="relative group w-[90px] h-[65px]">
                                <Image
                                    alt="gallery"
                                    width={50}
                                    unoptimized
                                    height={50}
                                    className="w-full h-full object-cover"
                                    src="/blogImages/gallery3.jpeg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Visibility className="text-white w-8 h-8" />
                                </div>
                            </div>
                            <div className="relative group w-[90px] h-[65px]">
                                <Image
                                    alt="gallery"
                                    width={50}
                                    unoptimized
                                    height={50}
                                    className="w-full h-full object-cover"
                                    src="/blogImages/gallery4.jpeg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Visibility className="text-white w-8 h-8" />
                                </div>
                            </div>
                            <div className="relative group w-[90px] h-[65px]">
                                <Image
                                    alt="gallery"
                                    width={50}
                                    unoptimized
                                    height={50}
                                    className="w-full h-full object-cover"
                                    src="/blogImages/gallery5.jpeg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Visibility className="text-white w-8 h-8" />
                                </div>
                            </div>
                            <div className="relative group w-[90px] h-[65px]">
                                <Image
                                    alt="gallery"
                                    width={50}
                                    unoptimized
                                    height={50}
                                    className="w-full h-full object-cover"
                                    src="/blogImages/gallery2.jpeg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Visibility className="text-white w-8 h-8" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='border border-gray-300 px-5 py-10 mt-5'>
                        <h2 className='font-bold'>Follow Us</h2>
                        <div className='flex justify-between mt-10'>
                            <div className="group transition-all relativ bg-slate-200 hover:bg-[#FF9F0D] flex items-center justify-center w-12 h-12">
                                {/* Default Icon */}
                                <Instagram
                                    className="absolute text-gray-800 group-hover:opacity-0 transition-opacity duration-300"
                                    style={{ fontSize: 24 }}
                                />
                                {/* Hover Icon */}
                                <Instagram
                                    className="absolute opacity-0 group-hover:opacity-100 text-white bg-[#FF9F0D] rounded-full p-1 transition-all duration-300"
                                    style={{ fontSize: 32 }}
                                />
                            </div>
                            <div className="group transition-all relativ bg-slate-200 hover:bg-[#FF9F0D] flex items-center justify-center w-12 h-12">
                                {/* Default Icon */}
                                <YouTube
                                    className="absolute text-gray-800 group-hover:opacity-0 transition-opacity duration-300"
                                    style={{ fontSize: 24 }}
                                />
                                {/* Hover Icon */}
                                <YouTube
                                    className="absolute opacity-0 group-hover:opacity-100 text-white bg-[#FF9F0D] rounded-full p-1 transition-all duration-300"
                                    style={{ fontSize: 32 }}
                                />
                            </div>
                            <div className="group transition-all relativ bg-slate-200 hover:bg-[#FF9F0D] flex items-center justify-center w-12 h-12">
                                {/* Default Icon */}
                                <Pinterest
                                    className="absolute text-gray-800 group-hover:opacity-0 transition-opacity duration-300"
                                    style={{ fontSize: 24 }}
                                />
                                {/* Hover Icon */}
                                <Pinterest
                                    className="absolute opacity-0 group-hover:opacity-100 text-white bg-[#FF9F0D] rounded-full p-1 transition-all duration-300"
                                    style={{ fontSize: 32 }}
                                />
                            </div>
                            <div className="group transition-all relativ bg-slate-200 hover:bg-[#FF9F0D] flex items-center justify-center w-12 h-12">
                                {/* Default Icon */}
                                <Instagram
                                    className="absolute text-gray-800 group-hover:opacity-0 transition-opacity duration-300"
                                    style={{ fontSize: 24 }}
                                />
                                {/* Hover Icon */}
                                <Instagram
                                    className="absolute opacity-0 group-hover:opacity-100 text-white bg-[#FF9F0D] rounded-full p-1 transition-all duration-300"
                                    style={{ fontSize: 32 }}
                                />
                            </div>
                            <div className="group transition-all relativ bg-slate-200 hover:bg-[#FF9F0D] flex items-center justify-center w-12 h-12">
                                {/* Default Icon */}
                                <Facebook
                                    className="absolute text-gray-800 group-hover:opacity-0 transition-opacity duration-300"
                                    style={{ fontSize: 24 }}
                                />
                                {/* Hover Icon */}
                                <Facebook
                                    className="absolute opacity-0 group-hover:opacity-100 text-white bg-[#FF9F0D] rounded-full p-1 transition-all duration-300"
                                    style={{ fontSize: 32 }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-[#0D0D0D]'>
                <CTA2 />
                <Footer />
            </div>
        </>
    )
}
