"use client";

import React from "react";
import Image from "next/image";
import CTA2 from "../components/CTA2";
import Footer from "../components/Footer";
import InnerPagesHeader from "../components/InnerPagesHeader";
import InnerPageBanner from "../components/innerPageBanner";

const chefs = [
    {
        name: "Tahmina Rumi",
        role: "Chef",
        image: "/images/chef1.jpeg",
    },
    {
        name: "Jorina Begum",
        role: "Chef",
        image: "/images/chef2.jpeg",
    },
    {
        name: "M. Mohammad",
        role: "Chef",
        image: "/images/chef3.jpeg",
    },
    {
        name: "Munna Kathy",
        role: "Chef",
        image: "/images/chef4.jpeg",
    },
    {
        name: "Tahmina Rumi",
        role: "Chef",
        image: "/images/chef5.jpeg",
    },
    {
        name: "Bisnu Devgon",
        role: "Chef",
        image: "/images/chef6.jpeg",
    },
    {
        name: "Motin Molladif",
        role: "Chef",
        image: "/images/chef7.jpeg",
    },
    {
        name: "William Rumi",
        role: "Chef",
        image: "/images/chef8.jpeg",
    },
    {
        name: "Kets William Roy",
        role: "Chef",
        image: "/images/chef9.jpeg",
    },
    {
        name: "Mahmud Hoqil",
        role: "Chef",
        image: "/images/chef10.jpeg",
    },
    {
        name: "Abuar Rahman",
        role: "Chef",
        image: "/images/chef11.jpeg",
    },
    {
        name: "Monalisa Holly",
        role: "Chef",
        image: "/images/chef12.jpeg",
    },
];

const OurChefs = () => {
    return (
        <>
            <InnerPagesHeader />
            <InnerPageBanner currentPage={'Our Chef'} previousPage={'Home'} />
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {chefs.map((chef, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center border rounded-lg"
                            >
                                <Image
                                    unoptimized
                                    src={chef.image}
                                    alt={chef.name}
                                    width={200}
                                    height={200}
                                    className="object-cover w-[400px] h-[400px]"
                                />
                                <h3 className="text-lg font-semibold mt-4">{chef.name}</h3>
                                <p className="text-sm text-gray-600">{chef.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className='bg-[#0D0D0D]'>
                <CTA2 />
                <Footer />
            </div>
        </>
    );
};

export default OurChefs;
