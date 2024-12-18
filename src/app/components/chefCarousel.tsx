import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

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
        align: "start",
        loop: true,
        containScroll: "trimSnaps", // Align properly for looping
    });

    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoScroll = () => {
        if (emblaApi) {
            autoScrollRef.current = setInterval(() => {
                emblaApi.scrollNext();
            }, 3000);
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
        <div className="chef-carousel">
            <div className="chef-carousel__viewport" ref={emblaRef}>
                <div className="chef-carousel__container">
                    {duplicatedChefs.map((chef, index) => (
                        <div key={index} className="chef-carousel__slide group">
                            <div className="shadow-md rounded-md">
                                <div
                                    className="w-[230px] h-[230px] bg-cover relative rounded-t-md"
                                    style={{ backgroundImage: `url(${chef.image})` }}
                                ></div>
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
