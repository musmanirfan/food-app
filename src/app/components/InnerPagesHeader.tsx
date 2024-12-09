"use client";

import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { KeyboardArrowDown } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/productListening" },
    { name: "Blog", link: "/blog" },
    {
        name: "Pages",
        subMenu: [
            { name: "SignUp", link: "signup" },
            { name: "Log In", link: "login" },
            { name: "checkout", link: "checkout" },
            { name: "404 Error", link: "notFound" },
            { name: "Our Chefs", link: "ourChefs" },
            { name: "Shop Detail", link: "shopDetail/0" },
            { name: "Shipping Cart", link: "shippingCart" },
            { name: "Blog Detail", link: "blogDetail/0" },
            { name: "FAQ", link: "faq" },
        ],
    },
    { name: "About", link: "/about" },
    { name: "Shop", link: "/productListening" },
    { name: "Contact", link: "/contact" },
];

const InnerPagesHeader = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    return (
        <>
            <header className="absolute top-0 left-0 w-full md:py-5 py-3 z-40 bg-[#0D0D0D]">
                <div className="md:w-[85vw] w-[95vw] mx-auto">
                    <div className="flex justify-between items-center">
                        {/* Mobile Menu Icon */}
                        <div className="flex gap-2 items-center">
                            <IoIosMenu
                                className="text-white text-xl md:hidden inline"
                                onClick={() => setOpen(true)}
                            />
                            <h1
                                className="text-[#FF9F0D] md:text-2xl text-xl font-semibold cursor-pointer"
                                onClick={() => {
                                    router.push("/");
                                }}
                            >
                                Food<span className="text-white">tuck</span>
                            </h1>
                        </div>

                        {/* Main Navigation */}
                        <nav className="md:flex hidden gap-8 items-center text-white">
                            {navLinks.map((navItem, index) => (
                                <div key={index} className="relative group">
                                    {!navItem.subMenu ? (
                                        <a
                                            href={navItem.link}
                                            className={`${pathname === navItem.link
                                                ? "text-[#FF9F0D]"
                                                : ""
                                                } hover:text-[#FF9F0D] transition-all`}
                                        >
                                            {navItem.name}
                                        </a>
                                    ) : (
                                        <>
                                            <span className="flex items-center gap-1 cursor-pointer">
                                                {navItem.name}{" "}
                                                <KeyboardArrowDown />
                                            </span>
                                            <ul className="hidden group-hover:block absolute top-full left-0 bg-white text-black rounded-lg p-3 shadow-md">
                                                {navItem.subMenu.map(
                                                    (subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <a
                                                                href={
                                                                    subItem.link
                                                                }
                                                                className="block whitespace-nowrap p-2 hover:text-[#FF9F0D]"
                                                            >
                                                                {subItem.name}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Search and Cart */}
                        <div className="flex md:gap-4 gap-2 items-center">
                            {["Search", "User", "cart"].map((src, i) => (
                                <img
                                    key={i}
                                    src={`/${src}.png`}
                                    alt={src}
                                    className="h-5 object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar for Mobile */}
            <aside
                className={`w-full bg-[#0D0D0D] fixed top-0 ${open ? "left-0" : "-left-[200vw]"
                    } h-screen z-50 transition-[left] duration-700`}
            >
                <div className="w-[90vw] pt-5 mx-auto flex justify-between items-center">
                    <h1
                        className="text-[#FF9F0D] text-3xl font-semibold cursor-pointer"
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        Food<span className="text-white">tuck</span>
                    </h1>
                    <IoClose
                        onClick={() => setOpen(false)}
                        className="text-white text-2xl"
                    />
                </div>
                <nav className="text-white text-2xl w-[90vw] mx-auto mt-14 space-y-10">
                    {navLinks.map((navItem, index) => (
                        <div key={index} className="relative group">
                            {!navItem.subMenu ? (
                                <a
                                    href={navItem.link}
                                    className={`${pathname === navItem.link
                                        ? "text-[#FF9F0D]"
                                        : ""
                                        } block hover:text-[#FF9F0D] transition-all`}
                                >
                                    {navItem.name}
                                </a>
                            ) : (
                                <>
                                    <span className="flex items-center gap-1 cursor-pointer">
                                        {navItem.name}{" "}
                                        <RiArrowDropDownLine className="text-3xl" />
                                    </span>
                                    <ul className="hidden group-hover:block absolute left-0 bg-white text-black rounded-lg p-3 shadow-md">
                                        {navItem.subMenu.map(
                                            (subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <a
                                                        href={subItem.link}
                                                        className="block whitespace-nowrap p-2 hover:text-[#FF9F0D]"
                                                    >
                                                        {subItem.name}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default InnerPagesHeader;
