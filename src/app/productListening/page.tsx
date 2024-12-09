"use client";

import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, Star } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import CTA2 from "../components/CTA2";
import Footer from "../components/Footer";
import InnerPagesHeader from "../components/InnerPagesHeader";
import InnerPageBanner from "../components/innerPageBanner";
import Link from "next/link";

const ProductListing = () => {
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
        {
            id: 5,
            name: "Country Burger",
            image: "/images/country-burger.jpeg",
            price: "$22.00",
            oldPrice: null,
            discount: false,
        },
        {
            id: 6,
            name: "Drink",
            image: "/images/drink.jpeg",
            price: "$10.00",
            oldPrice: "$12.00",
            discount: true,
        },
        {
            id: 7,
            name: "Cheese Butter",
            image: "/images/cheese-butter.jpeg",
            price: "$15.00",
            oldPrice: null,
            discount: false,
        },

        {
            id: 8,
            name: "Sandwiches",
            image: "/images/sandwiches.jpeg",
            price: "$18.00",
            oldPrice: "$20.00",
            discount: true,
        },
        {
            id: 9,
            name: "Chicken Chop",
            image: "/images/chicken-chop.jpeg",
            price: "$18.00",
            oldPrice: null,
            discount: false,
        },
        {
            id: 10,
            name: "Cheese Butter",
            image: "/images/product-cheese-butter2.jpeg",
            price: "$15.00",
            oldPrice: null,
            discount: false,
        },
        {
            id: 11,
            name: "Sandwiches",
            image: "/images/sandwiches.jpeg",
            price: "$18.00",
            oldPrice: "$20.00",
            discount: true,
        },
        {
            id: 12,
            name: "Chicken Chop",
            image: "/images/chicken-chop.jpeg",
            price: "$18.00",
            oldPrice: null,
            discount: false,
        },
        {
            id: 13,
            name: "Country Burger",
            image: "/images/country-burger.jpeg",
            price: "$22.00",
            oldPrice: null,
            discount: false,
        },
        {
            id: 14,
            name: "Drink",
            image: "/images/drink.jpeg",
            price: "$10.00",
            oldPrice: "$12.00",
            discount: true,
        },
        {
            id: 15,
            name: "Cheese Butter",
            image: "/images/cheese-butter.jpeg",
            price: "$15.00",
            oldPrice: null,
            discount: false,
        },
    ];

    const categories = [
        "Sandwiches",
        "Burger",
        "Chicken Chop",
        "Drink",
        "Pizza",
        "Tea",
        "Uncategorized",
    ];

    const latestProducts = [
        {
            id: 1,
            image: "/images/latest.jpeg",
            name: "Pizza",
        },
        {
            id: 2,
            image: "/images/latest.jpeg",
            name: "Cupchake",
        },
        {
            id: 3,
            image: "/images/latest.jpeg",
            name: "Cookies",
        },
        {
            id: 4,
            image: "/images/latest.jpeg",
            name: "Burger",
        }
        // Add more as needed
    ];

    return (
        <>
            <InnerPagesHeader />
            <InnerPageBanner currentPage={"Our Shop"} previousPage={"Home"} />
            <div className="container pl-5 py-10">
                <div className="grid sm:grid-cols-12 mx-auto grid-cols-10 gap-8">
                    {/* Left Section */}
                    <div className="col-span-7">
                        {/* Sorting and Filter Row */}
                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <p className="whitespace-nowrap">Sort By:</p>
                                <select className="border border-gray-300 p-2 w-full sm:w-52">
                                    <option className="text-gray-300">Newest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <p className="whitespace-nowrap">Show:</p>
                                <select className="border border-gray-300 p-2 w-full sm:w-52">
                                    <option>Default</option>
                                    <option>12</option>
                                    <option>24</option>
                                </select>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {products.map((product, index) => (

                                    <div
                                        key={product.id}
                                        className="relative border border-gray-200"
                                    >
                                        <Link href={`shopDetail/${index}`}>
                                            {/* Product Image */}
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-56 object-cover"
                                            />

                                            {/* Discount Badge */}
                                            {product.discount && (
                                                <span className="absolute top-2 left-2 bg-[#FF9F0D] text-white px-2 py-1 text-xs">
                                                    Sale
                                                </span>
                                            )}

                                            {/* Product Details */}
                                            <div className="py-2">
                                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-[#FF9F0D] font-bold">{product.price}</p>
                                                    {product.oldPrice && (
                                                        <p className="text-gray-400 line-through">{product.oldPrice}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination */}
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

                    {/* Right Section */}
                    <div className="sm:block hidden col-span-5">
                        {/* Search Box */}
                        <div className="flex items-center border border-gray-300  overflow-hidden w-80">
                            <input
                                type="text"
                                name="text"
                                placeholder="Search Your Keyword.."
                                className="flex-1 px-4 py-2 text-sm text-gray-600 outline-none"
                            />
                            <button
                                className="bg-[#FF9F0D] text-white py-3 px-5 flex items-center justify-center transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="25" viewBox="0 0 24 24" width="25">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                </svg>
                            </button>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6 mt-10">
                            <h3 className="font-semibold mb-4">Category</h3>
                            {categories.map((category, index) => (
                                <label key={index} className="flex items-center gap-2 mb-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 border-gray-300"
                                    />
                                    <span>{category}</span>
                                </label>
                            ))}
                        </div>

                        {/* Filter by Price */}
                        <div className="mb-6 mt-10">
                            <h3 className="font-semibold mb-4">Filter by Price</h3>
                            <input type="range" className="w-[70%]" />
                            <div className="flex justify-between w-[70%] text-sm">
                                <span>From $0 to $8000</span>
                                <span>Filter</span>
                            </div>
                        </div>

                        {/* Latest Products */}
                        <div className="mt-10">
                            <h3 className="font-semibold my-4">Latest Products</h3>
                            {latestProducts.map(({ id, image, name }, i) => (
                                <div key={id + i} className='flex gap-3 w-full py-3 '>
                                    <Image className='rounded-md h-[70px] w-[30%]' unoptimized src={image} alt='recent' width={70} height={35} />
                                    <div className='w-[70%] flex flex-col justify-center'>
                                        <p className='text-sm font-bold mb-2'>{name}</p>
                                        <p className='text-sm'><Star style={{ color: "#FF9F0D", fontSize: '16px' }} /><Star style={{ color: "#FF9F0D", fontSize: '16px' }} /><Star style={{ color: "#FF9F0D", fontSize: '16px' }} /><Star style={{ color: "#E0E0E0", fontSize: '16px' }} /><Star style={{ color: "#E0E0E0", fontSize: '16px' }} /></p>
                                        <p className='text-sm'>$35.00</p>
                                    </div>
                                </div>

                            ))}
                        </div>

                        {/* Product Tags */}
                        <div className="mt-10 w-[70%]">
                            <h3 className="font-semibold mb-4">Product Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-3 py-1 border-b hover:text-[#FF9F0D] border-b-gray-300 rounded">
                                    Services
                                </button>
                                <button className="px-3 py-1 border-b hover:text-[#FF9F0D] border-b-gray-300 rounded">
                                    Our Menu
                                </button>
                                <button className="px-3 py-1 border-b hover:text-[#FF9F0D] border-b-gray-300 rounded">
                                    Pizza
                                </button>
                                <button className="px-3 py-1 border-b hover:text-[#FF9F0D] border-b-gray-300 rounded">
                                    Cupcake
                                </button>
                                <button className="px-3 py-1 border-b hover:text-[#FF9F0D] border-b-gray-300 rounded">
                                    Burger
                                </button>
                                <button className="px-3 py-1 border-b hover:text-[#FF9F0D] border-b-gray-300 rounded">
                                    Cookies
                                </button>
                                <button className="px-3 py-1 border-b hover:text-[#FF9F0D] border-b-gray-300 rounded">
                                    Our Shop
                                </button>
                                <button className="px-3 py-1 border-b hover:text-[#FF9F0D] border-b-gray-300 rounded">
                                    Tandoori Chicken
                                </button>
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
    );
};

export default ProductListing;
