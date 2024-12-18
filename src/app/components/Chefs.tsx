"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react';

interface Chef {
    name: string;
    role: string;
    image: string;
}

interface ChefCarouselProps {
    chefs: Chef[];
}

const ChefCarousel2: React.FC<ChefCarouselProps> = ({ chefs }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        containScroll: "trimSnaps", // Align properly for looping
    });

    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoScroll = () => {
        if (emblaApi) {
            autoScrollRef.current = setInterval(() => {
                emblaApi.scrollNext();
            }, 5000);
        }
    };

    const stopAutoScroll = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        }
    };

    useEffect(() => {
        if (emblaApi) {
            startAutoScroll();

            emblaApi.on("pointerDown", stopAutoScroll);
            emblaApi.on("pointerUp", startAutoScroll);

            emblaApi.reInit(); // Force Embla to reinitialize
        }

        return () => stopAutoScroll();
    }, [emblaApi]);

    // Duplicate chefs to ensure the loop works
    const duplicatedChefs = [...chefs, ...chefs];
    return (
        <section className='md:w-[100vw] px-48 relative w-[90vw] mx-auto mt-40'>
            <div className='flex flex-col items-center'>
                <img src="/chef.png" alt="chef" />
                <h1 className='text-4xl font-semibold text-white mt-2'><span className="text-[#FF9F0D]">Meet</span> Our Chefs</h1>
            </div>
            <div className="chef-carousel mt-5 md:mt-10 z-10">
                <div className="chef-carousel__viewport" ref={emblaRef}>
                    <div className="chef-carousel__container">
                        {duplicatedChefs.map((chef, index) => (
                            <div key={index} className="chef-carousel__slide relative group">
                                {/* Chef Image */}
                                <Image
                                    src={chef.image}
                                    className="w-full object-cover h-[300px]"
                                    alt={chef.name}
                                    width={100}
                                    height={100}
                                />
                                {/* Chef Details */}
                                <div className="p-2 w-[60%] bg-white text-left absolute bottom-[0.60rem] left-[0.60rem]">
                                    <h3 className="font-bold text-md text-black">{chef.name}</h3>
                                    <p className="text-gray-600 text-sm">{chef.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div
                style={{
                    backgroundImage: "url('/bg/chef-bg.png')",
                }}
                className="w-[500px] h-[500px] absolute bg-contain bg-no-repeat bottom-0 -left-0 z-0"
            ></div> */}
            <div className='flex justify-center mt-14'>
                <button className='border-[#FF9F0D] border text-white px-10 py-3 rounded-3xl'>See More</button>
            </div>
        </section>
    )
}

export default ChefCarousel2
