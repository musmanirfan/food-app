"use client"

import React, { useCallback, useEffect, useState } from 'react'
import InnerPagesHeader from '../components/InnerPagesHeader'
import InnerPageBanner from '../components/innerPageBanner'
import CTA2 from '../components/CTA2'
import Footer from '../components/Footer'
import { Coffee,/*  Facebook, Pinterest, */ PlayArrow, School, /* Twitter, YouTube */ } from '@mui/icons-material'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import useEmblaCarousel from 'embla-carousel-react'
import ChefCarousel from '../components/chefCarousel'
import { chefs } from '../components/chef-arrow'



export default function Page() {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [activeTab, setActiveTab] = useState<keyof typeof menuData>("Breakfast");
    const [emblaRef, embla] = useEmblaCarousel({ loop: false }); // Move this above the useEffect


    const menuData: Record<string, string[]> = {
        Breakfast: [
            "Alder Grilled Chinook Salmon",
            "Glow Cheese",
            "Fresh Breakfast",
            "Italian Pizza",
            "Mild Butter",
            "Slice Beef",
            "Fresh Bread",
            "Mushroom Pizza",
            "Extra Item 1",
            "Extra Item 2",
        ],
        Lunch: [
            "Fresh Breakfast",
            "Italian Pizza",
            "Mild Butter",
            "Slice Beef",
            "Fresh Bread",
            "Mushroom Pizza",
            "Extra Lunch Item 1",
            "Extra Lunch Item 2",
            "Extra Lunch Item 3",
        ],
        Dinner: [
            "Mild Butter",
            "Slice Beef",
            "Fresh Bread",
            "Mushroom Pizza",
            "Grilled Chicken",
            "Steak",
            "Pasta",
            "Garlic Bread",
            "Salmon Dinner",
        ],
        Dessert: [
            "Ice Cream",
            "Brownie",
            "Cheesecake",
            "Pudding",
            "Mousse",
            "Fruit Salad",
            "Cupcake",
            "Tart",
            "Macaron",
        ],
        Drink: [
            "Fresh Orange Juice",
            "Cold Coffee",
            "Mojito",
            "Milkshake",
            "Soda",
            "Iced Tea",
            "Hot Chocolate",
            "Smoothie",
        ],
        Snack: [
            "Nachos",
            "Veggie Sandwich",
            "Fries",
            "Popcorn",
            "Cheese Balls",
            "Chicken Wings",
            "Spring Rolls",
            "Chips",
        ],
    };




    useEffect(() => {
        if (!embla) return;

        const onSelect = () => {
            const index = embla.selectedScrollSnap();
            console.log("Selected Snap Index:", index); // Debug log
            setSelectedIndex(index);
        };

        embla.on("select", onSelect);
        onSelect();

        return () => {
            console.log("Cleaning up listener"); // Debug log
            embla.off("select", onSelect);
        };
    }, [embla]);

    const scrollTo = useCallback(
        (index: number) => {
            if (!embla) {
                console.warn("Embla is not initialized"); // Debug log
                return;
            }
            embla.scrollTo(index);
        },
        [embla]
    );
    return (
        <div className='bg-[#f5f5f5]'>
            <InnerPagesHeader />
            <InnerPageBanner currentPage={'About'} previousPage={'Home'} />
            {/* top section */}
            <div className='justify-center sm:mt-[100px] flex sm:gap-32 gap-10 sm:flex-row flex-col items-center'>
                <div className='flex gap-3 mt-10 sm:mt-0'>
                    <div>
                        <div className='w-48 !h-[300px] bg-cover' style={{ backgroundImage: "url('/images/about1.jpeg')" }}></div>
                    </div>
                    <div className='flex flex-col gap-3 sm:mt-7 mt-0'>
                        <div className='w-40 !h-40 bg-cover bg-center' style={{ backgroundImage: "url('/images/about2.jpeg')" }}></div>
                        <div className='w-40 !h-52 bg-cover bg-center' style={{ backgroundImage: "url('/images/about3.jpeg')" }}></div>
                    </div>
                </div>
                <div className='sm:w-[40%] w-[90%]'>
                    <img className='w-fit' src="/about-us.png" alt="about-us" />
                    <h1 className="text-2xl md:text-4xl font-semibold -mt-1">Food is an important
                        part Of a balanced Diet</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <div className='mt-4 flex items-center gap-3'>
                        <button className="bg-[#e88d0a] text-white flex gap-2 w-fit items-center px-6 sm:py-3 py-2 sm:w-fit hover:bg-[#e88d0a] hover:shadow-lg transition duration-300">
                            Add to cart
                        </button>
                        <button className="bg-[#e88d0a] text-white flex gap-2 w-fit items-center px-2 sm:px-3 sm:py-3 py-2 rounded-full sm:w-fit hover:bg-[#e88d0a] hover:shadow-lg transition duration-300">
                            <PlayArrow />
                        </button>
                        <h2 className='font-bold text-lg'>Watch video </h2>
                    </div>
                </div>
            </div>


            {/* why choose us section */}
            <div className='sm:mt-[120px] mt-[50px] sm:mx-[120px] mx-[15px]'>
                <div>
                    <h1 className="text-2xl md:text-4xl font-semibold text-center">Why Choose us</h1>
                    <p className='text-center sm:w-[50%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
                    <div className='w-[97%] mx-auto h-[300px] sm:mt-10 mt-2 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/images/about-banner.jpeg')" }}></div>
                    <div className='flex gap-10 sm:mt-10 mt-5 px-10 sm:px-0 flex-col sm:flex-row'>
                        <div className='flex flex-col items-center gap-2'>
                            <School />
                            <h2 className='font-bold'>Best Chef</h2>
                            <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <Coffee />
                            <h2 className='font-bold'>120 Item food</h2>
                            <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <DirectionsWalkIcon />
                            <h2 className='font-bold'>Clean Environment</h2>
                            <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

            {/* Team Member */}
            <div>
                <div style={{ backgroundImage: "url('/team-bg.jpeg')" }} className='bg-cover  bg-center mb-[250px] mt-[120px]'>
                    <div className='bg-[#FF9F0DD9] sm:px-[140px] px-[20px] pt-[80px] relative h-[350px]'>
                        <div>
                            <h1 className="text-2xl md:text-4xl font-semibold text-white text-center">Team Member</h1>
                            <p className='text-center text-white sm:w-[50%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue </p>

                        </div>
                        <ChefCarousel chefs={chefs} />
                    </div>

                </div>
            </div>

            {/* testimonial section */}
            <section className='md:w-[77vw] w-[90vw] mx-auto mt-80'>
                <img src="/testimonials.png" alt="testimonials" />
                <h1 className='text-4xl font-semibold text-black mt-2'>What our client are saying</h1>
                <div className="embla">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="embla__slide pt-20 cursor-grab h-fit w-fit">
                                    <div className="bg-white shadow-lg relative pb-5 px-12 w-full">
                                        <img
                                            src="/alamin.png"
                                            alt={`Slide Image ${i + 1}`}
                                            className="absolute left-[50%] right-[50%] -translate-x-[50%] !z-50 h-24 w-24 -top-14 rounded-full"
                                        />
                                        <img src="/quote.png" alt="Quotes Sign" className="mt-14 mx-auto" />
                                        <p className="font-light text-gray-600 text-sm text-center mt-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                                        </p>
                                        <img src="/stars.png" alt="Rating Stars" className="mx-auto mt-6" />
                                        <h1 className="text-2xl mt-4 font-semibold text-center">Alamin Hasan</h1>
                                        <p className="font-thin text-center text-sm text-gray-700">Food Specialist</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="embla__dots">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <button
                                key={index}
                                className={`embla__dot ${index === selectedIndex ? "embla__dot--active" : ""}`}
                                onClick={() => scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`} // Accessibility improvement
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Food Menu */}
            <section className='md:w-full sm:px-[140px] w-[90vw] flex flex-col mx-auto sm:mt-40 mt-20'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl font-semibold text-black mt-2'>Our Food Menu</h1>
                    <p className='text-center sm:w-[40%] w-[100%] mt-5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue </p>
                </div>

                <ul className='flex flex-wrap md:gap-8 gap-x-5 gap-y-2 mt-12 !justify-center text-xl text-black'>
                    {Object.keys(menuData).map((tab) => (
                        <li
                            key={tab}
                            className={`cursor-pointer ${activeTab === tab ? "text-[#e88d0a] font-semibold underline" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>

                <div className='grid md:grid-cols-2 gap-5 mt-14'>
                    <div className='col-span-2 text-black grid md:grid-cols-2 gap-x-5 gap-y-3'>
                        {menuData[activeTab as keyof typeof menuData]
                            .slice(0, 8)
                            .map((name, i) => (
                                <div className="flex items-start justify-between border-b border-b-gray-300 pb-3" key={i}>
                                    <div className="space-y-1">
                                        <h5 className="text-xl font-medium">{name}</h5>
                                        <p className="text-xs">Toasted French bread topped with romano, cheddar</p>
                                        <p className="text-xs">560 CAL</p>
                                    </div>
                                    <h5 className="text-[#e88d0a] font-bold">12.5$</h5>
                                </div>
                            ))}
                    </div>
                </div>
                <button className='w-[180px] h-[56px] transition-all mt-20 !mx-auto border text-[#FF9F0D] border-[#FF9F0D] hover:text-white hover:bg-[#FF9F0D]'>View Menu</button>
            </section>
            <div className='bg-[#0D0D0D]'>
                <CTA2 />
                <Footer />
            </div>
        </div>
    )
}
