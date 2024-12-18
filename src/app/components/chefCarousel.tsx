import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Facebook, Pinterest, Twitter, YouTube } from "@mui/icons-material";

interface Chef {
    name: string;
    role: string;
    image: string;
}

interface ChefCarouselProps {
    chefs: Chef[];
}

const ChefCarousel: React.FC<ChefCarouselProps> = ({ chefs }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true, // Enable infinite loop
        containScroll: false, // Allow free scrolling
    });

    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensures this runs only on the client
    }, []);

    useEffect(() => {
        if (isClient && emblaApi) {
            autoScrollRef.current = setInterval(() => {
                emblaApi.scrollNext();
            }, 3000);

            emblaApi.on("pointerDown", () => {
                if (autoScrollRef.current) clearInterval(autoScrollRef.current);
            });
            emblaApi.on("pointerUp", () => {
                autoScrollRef.current = setInterval(() => {
                    emblaApi.scrollNext();
                }, 3000);
            });
        }
        return () => {
            if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        };
    }, [emblaApi, isClient]);

    if (!isClient) return null; // Prevent rendering on the server

    return (
        <div className="chef-carousel">
            <div className="chef-carousel__viewport" ref={emblaRef}>
                <div className="chef-carousel__container">
                    {chefs.map((chef, index) => (
                        <div key={index} className="chef-carousel__slide group">
                            <div className="shadow-md rounded-md">
                                <div
                                    className="w-[230px] h-[230px] bg-cover relative rounded-t-md"
                                    style={{ backgroundImage: `url(${chef.image})` }}
                                >
                                    <div className="absolute top-3 right-3 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href="#" className="w-7 h-7 bg-[#e88d0a] text-white flex items-center justify-center shadow-md hover:bg-[#ffae3e]">
                                            <Facebook fontSize="small" />
                                        </a>
                                        <a href="#" className="w-7 h-7 bg-[#e88d0a] text-white flex items-center justify-center shadow-md hover:bg-[#ffae3e]">
                                            <Twitter fontSize="small" />
                                        </a>
                                        <a href="#" className="w-7 h-7 bg-[#e88d0a] text-white flex items-center justify-center shadow-md hover:bg-[#ffae3e]">
                                            <YouTube fontSize="small" />
                                        </a>
                                        <a href="#" className="w-7 h-7 bg-[#e88d0a] text-white flex items-center justify-center shadow-md hover:bg-[#ffae3e]">
                                            <Pinterest fontSize="small" />
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-2 rounded-b-md">
                                    <h3 className="text-lg font-semibold">{chef.name}</h3>
                                    <p className="text-sm text-gray-600">{chef.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefCarousel;
