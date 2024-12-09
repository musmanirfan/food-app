"use client"

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Testimonials = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, embla] = useEmblaCarousel({ loop: false }); // Move this above the useEffect

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
        <section className='md:w-[85vw] w-[90vw] mx-auto mt-40'>
            <img src="/testimonials.png" alt="testimonials" />
            <h1 className='text-4xl font-semibold text-white mt-2'>What our client are saying</h1>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="embla__slide pt-20 cursor-grab h-fit w-fit">
                                <div className="bg-white relative pb-5 px-12 w-full">
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
    )
}

export default Testimonials