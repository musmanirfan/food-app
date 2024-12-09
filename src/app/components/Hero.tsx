import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const Hero = () => (
    <main className="bg-[url(/banner-background.jpg)] bg-center h-fit md:h-screen w-full bg-cover bg-no-repeat relative">
        <section className="md:w-[91vw] w-[95vw] mx-auto h-fit md:h-screen z-20 relative pt-28">
            <div className="grid items-center md:grid-cols-2 grid-cols-1 h-full md:w-[91vw] w-[95vw]">
                <div className="flex md:gap-12 gap-5 items-center">
                    <div className="flex flex-col !w-fit gap-12 justify-center">
                        <div className="md:h-40 h-32 w-px bg-white ml-2"></div>
                        <div className="flex flex-col gap-7 justify-center !w-fit">
                            <FaFacebookF className="text-white" />
                            <FaTwitter className="text-[#FF9F0D]" />
                            <FaPinterestP className="text-white" />
                        </div>
                        <div className="md:h-40 h-32 w-px bg-white ml-2"></div>
                    </div>
                    <div className="md:w-[80%]">
                        <img src='/bannerfont.png' alt='bannerfont' className="h-8" />
                        <h1 className="mt-4 text-5xl text-white font-semibold"><span className="text-[#FF9F0D]">The</span> Art of speed
                            food Quality</h1>
                        <p className="mt-8 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Varius sed pharetra dictum neque massa congue</p>
                        <button className="bg-[#FF9F0D] text-white px-12 py-4 rounded-full mt-8">See Menu</button>
                    </div>
                </div>
                <img src='/hero.png' alt='' />
            </div>
        </section>

        <div className="absolute top-0 left-0 z-10 bg-black opacity-90 w-full h-full"></div>
    </main>
)

export default Hero
