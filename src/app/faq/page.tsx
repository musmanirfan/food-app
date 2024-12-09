"use client";

import React, { useState } from "react";
import InnerPagesHeader from "../components/InnerPagesHeader";
import InnerPageBanner from "../components/innerPageBanner";
import CTA2 from "../components/CTA2";
import Footer from "../components/Footer";

const FAQ = () => {
    // State for the active FAQ (default: 1st FAQ open)
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqs = [
        { question: "How we serve food?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt." },
        { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt." },
        { question: "How is our food quality?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt." },
        { question: "What will be delivered? And When?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt." },
        { question: "How do we give home delivery?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt." },
        { question: "Is this restaurant 24 hours open?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt." },
    ];

    return (
        <>
            <InnerPagesHeader />
            <InnerPageBanner currentPage={'Faq'} previousPage={'Home'} />
            <div className="px-6 sm:px-16 py-12 bg-white">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Questions Looks Here</h2>
                    <p className="text-gray-500 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`p-5 border rounded-lg shadow-sm bg-gray-100 ${activeIndex === index ? "border-orange-500" : "border-gray-200"
                                }`}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="font-medium text-gray-800">{faq.question}</h3>
                                <button className="text-2xl text-gray-400">
                                    {activeIndex === index ? "−" : "+"}
                                </button>
                            </div>
                            {activeIndex === index && (
                                <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-[#0D0D0D]'>
                <CTA2 />
                <Footer />
            </div>
        </>
    );
};

export default FAQ;
