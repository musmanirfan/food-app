"use client";

import { KeyboardArrowDown } from "@mui/icons-material";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

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
      { name: "Shipping Cart", link: "shippingCart" },
      { name: "FAQ", link: "faq" },
    ],
  },
  { name: "About", link: "/About" },
  { name: "Shop", link: "/productListening" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full md:py-5 py-3 z-40">
        <div className="md:w-[85vw] w-[95vw] mx-auto">
          <h1 className="text-[#FF9F0D] text-2xl font-semibold text-center md:inline-block w-full hidden">
            Food<span className="text-white">tuck</span>
          </h1>
          <div className="flex justify-between items-center">
            <div className="md:hidden flex gap-2 items-center">
              <IoIosMenu
                className="text-white text-xl"
                onClick={() => setOpen(true)}
              />
              <h1 className="text-[#FF9F0D] md:text-2xl text-xl font-semibold">
                Food<span className="text-white">tuck</span>
              </h1>
            </div>
            <nav className="md:flex hidden gap-8 items-center text-white">
              {navLinks.map((navItem, index) => (
                <div key={index} className="relative group">
                  {!navItem.subMenu ? (
                    <a
                      href={navItem.link}
                      className="hover:text-[#FF9F0D] transition-all"
                    >
                      {navItem.name}
                    </a>
                  ) : (
                    <>
                      <span className="flex items-center gap-1 cursor-pointer">
                        {navItem.name} <KeyboardArrowDown />
                      </span>
                      <ul className="hidden group-hover:block absolute top-full left-0 bg-white text-black rounded-lg p-3 shadow-md">
                        {navItem.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              className="block whitespace-nowrap p-2 hover:text-[#FF9F0D]"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex gap-2 items-center">
              <div className="relative md:w-64 w-32">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent focus:outline-none text-white w-full border md:px-5 md:py-[10px] px-3 py-2 rounded-3xl !border-[#FF9F0D]"
                />
                <img
                  src="/Search.png"
                  alt="Search"
                  className="absolute md:right-5 md:top-3 right-3 top-3 md:h-5 h-4"
                />
              </div>
              <img src="/cart.png" alt="cart" />
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
          <h1 className="text-[#FF9F0D] text-3xl font-semibold">
            Food<span className="text-white">tuck</span>
          </h1>
          <IoClose onClick={() => setOpen(false)} className="text-white text-2xl" />
        </div>
        <nav className="text-white text-2xl w-[90vw] mx-auto mt-14 space-y-10">
          {navLinks.map((navItem, index) => (
            <div key={index} className="relative group">
              {!navItem.subMenu ? (
                <a
                  href={navItem.link}
                  className="block hover:text-[#FF9F0D] transition-all"
                >
                  {navItem.name}
                </a>
              ) : (
                <>
                  <span className="flex items-center gap-1 cursor-pointer">
                    {navItem.name} <KeyboardArrowDown />
                  </span>
                  <ul className="hidden group-hover:block absolute left-0 bg-white text-black rounded-lg p-3 shadow-md">
                    {navItem.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.link}
                          className="block whitespace-nowrap p-2 hover:text-[#FF9F0D]"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
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

export default Header;
