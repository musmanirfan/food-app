"use client"

import CTA2 from '@/app/components/CTA2'
import Footer from '@/app/components/Footer'
import InnerPageBanner from '@/app/components/innerPageBanner'
import InnerPagesHeader from '@/app/components/InnerPagesHeader'
import { ArrowBack, ArrowForward, FavoriteBorder, Polyline, Redeem, Search, Star } from '@mui/icons-material'
import Image from 'next/image'
import React, { useState } from 'react'

const socialIcons = [
    { src: "/images/vector.png", alt: "vector1" },
    { src: "/images/vector2.png", alt: "vector2" },
    { src: "/images/vector3.png", alt: "vector3" },
    { src: "/images/vector4.png", alt: "vector4" },
    { src: "/images/vector5.png", alt: "vector5" },
];


const products = [
    {
        id: 1,
        name: "Fresh Lime",
        image: "/images/products-fresh-lime.jpeg",
        price: "$20.00",
        oldPrice: "$25.00",
        discount: true,
    },
    {
        id: 2,
        name: "Chocolate Muffin",
        image: "/images/chocolate-muffin.jpeg",
        price: "$15.00",
        oldPrice: "$20.00",
        discount: true,
    },
    {
        id: 3,
        name: "Burger",
        image: "/images/product-burger.jpeg",
        price: "$30.00",
        oldPrice: null,
        discount: false,
    },
    {
        id: 4,
        name: "Pizza",
        image: "/images/product-pizza.jpeg",
        price: "$25.00",
        oldPrice: "$30.00",
        discount: true,
    },
];
export default function Page() {

    const [activeTab, setActiveTab] = useState("description");
    return (
        <>
            <InnerPagesHeader />
            <InnerPageBanner currentPage={"Our Shop"} previousPage={"Blog"} />
            <div className="sm:px-[100px] px-4 flex flex-col lg:flex-row gap-5 mt-10">
                {/* Left Section - Image Grid */}
                <div className="flex flex-col sm:flex-row lg:flex-nowrap gap-3">
                    <div className="sm:flex hidden flex-col gap-4">
                        <img
                            src="/images/products-fresh-lime.jpeg"
                            alt="Thumbnail 1"
                            className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                        />
                        <img
                            src="/images/chocolate-muffin.jpeg"
                            alt="Thumbnail 2"
                            className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                        />
                        <img
                            src="/images/product-burger.jpeg"
                            alt="Thumbnail 3"
                            className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                        />
                        <img
                            src="/images/product-pizza.jpeg"
                            alt="Thumbnail 4"
                            className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                        />
                    </div>
                    {/* Middle Section - Main Image */}
                    <div className="w-full lg:w-auto">
                        <img
                            src="/images/drink.jpeg"
                            alt="Main Product"
                            className="w-full h-[370px] object-cover rounded-lg"
                        />
                    </div>
                </div>
                {/* Right Section - Product Details */}
                <div className="lg:w-1/2 w-full space-y-4 mt-6 lg:mt-0">
                    {/* Stock Status */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-[#FF9F0D] text-white text-sm px-3 py-1 rounded-md">
                            In stock
                        </span>
                        <div className="flex items-center gap-5 mt-2 lg:mt-0 ml-auto">
                            <button className="text-gray-500 hover:text-black flex items-center gap-2">
                                <ArrowBack style={{ fontSize: '18px' }} />Prev
                            </button>
                            <button className="text-gray-500 hover:text-black flex items-center gap-2">
                                Next<ArrowForward style={{ fontSize: '18px' }} />
                            </button>
                        </div>
                    </div>

                    {/* Product Title and Description */}
                    <h1 className="text-2xl md:text-3xl font-semibold">Yummy Chicken Chup</h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                    </p>

                    {/* Price and Ratings */}
                    <div>
                        <p className="text-xl md:text-2xl font-bold mt-4 sm:mt-10">54.00$</p>
                        <div className="flex items-center gap-2">
                            <div>
                                <span className="text-yellow-500">
                                    <Star style={{ color: '#FF9F0D', fontSize: '18px' }} />
                                    <Star style={{ color: '#FF9F0D', fontSize: '18px' }} />
                                    <Star style={{ color: '#FF9F0D', fontSize: '18px' }} />
                                    <Star style={{ color: '#FF9F0D', fontSize: '18px' }} />
                                    <Star style={{ color: '#FF9F0D', fontSize: '18px' }} />
                                </span>
                                <span className="text-gray-500"> | 5.0 Rating | 22 Reviews</span>
                            </div>
                        </div>
                    </div>

                    {/* Quantity Selector and Add to Cart */}
                    <div className="flex flex-wrap items-center gap-4 pb-5">
                        <div className="flex items-center w-full sm:w-auto">
                            <button className="text-gray-500 py-[11px] px-5 border hover:text-black">
                                -
                            </button>
                            <span className="py-[11px] px-5 border">1</span>
                            <button className="text-gray-500 py-[11px] px-5 border hover:text-black">
                                +
                            </button>
                        </div>
                        <button className="bg-[#FF9F0D] text-white flex gap-2 items-center px-6 py-3 w-full sm:w-auto">
                            <Redeem style={{ fontSize: '18px' }} /> Add to cart
                        </button>
                    </div>

                    {/* Wishlist and Compare */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-500 border-t border-t-gray-300 pt-5">
                        <button className="flex items-center gap-3 w-full sm:w-auto">
                            <FavoriteBorder />Add to Wishlist
                        </button>
                        <button className="flex items-center gap-2 w-full sm:w-auto">
                            <Polyline />Compare
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="text-gray-500">
                        <p>Category: Pizza</p>
                        <p>Tag: Our Shop</p>
                    </div>

                    {/* Social Share */}
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                        <span>Share:</span>
                        {socialIcons.map((icon, index) => (
                            <Image
                                key={index}
                                src={icon.src}
                                alt={icon.alt}
                                width={20}
                                height={20}
                                className="w-5 h-5"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 sm:mt-20 sm:px-[100px]">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2">
                    <button
                        className={`px-6 py-2 text-sm font-medium ${activeTab === "description" ? "text-white bg-[#FF9F0D]" : "text-gray-600 bg-white"
                            }`}
                        onClick={() => setActiveTab("description")}
                    >
                        Description
                    </button>
                    <button
                        className={`px-6 py-2 text-sm font-medium ${activeTab === "reviews" ? "text-white bg-[#FF9F0D]" : "text-gray-600 bg-white"
                            }`}
                        onClick={() => setActiveTab("reviews")}
                    >
                        Reviews (24)
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-6 text-sm sm:text-base">
                    {activeTab === "description" && (
                        <div className="bg-white">
                            <div>
                                <p className="text-gray-600 mb-6 leading-7">
                                    Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
                                </p>
                                <p className="text-gray-600 mb-6 leading-7">
                                    Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
                                </p>
                                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                                <ul className="list-disc pl-6 text-gray-600 leading-7">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                                    <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisi.</li>
                                    <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                                    <li>Mauris eget diam magna, in blandit turpis.</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {activeTab === "reviews" && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias perspiciatis incidunt sunt inventore maxime iusto deleniti id aliquid veritatis recusandae molestias ratione nam, error minima voluptatem nihil, ex dolores.</p></div>}
                </div>
            </div>
            <div className="bg-white px-4 sm:px-[100px]">
                <div className="flex flex-col sm:flex-row items-center justify-between my-5 gap-4">
                    <h2 className="text-lg sm:text-xl font-bold">Similar Products</h2>
                    <div className="flex justify-end items-center gap-2">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#FF9F0D] hover:text-white">
                            <ArrowBack fontSize="small" />
                        </button>
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF9F0D] text-white rounded-full flex items-center justify-center">
                            <ArrowForward fontSize="small" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="relative group border border-gray-200">
                            <div className="overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-32 sm:h-48 group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-[#FF9F0D] hover:text-white">
                                    <Search fontSize="small" />
                                </button>
                                <button className="bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-[#FF9F0D] hover:text-white">
                                    <FavoriteBorder fontSize="small" />
                                </button>
                            </div>
                            <div className="mt-4 px-2 sm:px-0">
                                <h3 className="text-sm sm:text-base font-semibold">{product.name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#FF9F0D] font-semibold">{product.price}</span>
                                    {product.oldPrice && (
                                        <span className="line-through text-gray-400 text-sm">{product.oldPrice}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-[#0D0D0D]'>
                <CTA2 />
                <Footer />
            </div>
        </>
    )
}
