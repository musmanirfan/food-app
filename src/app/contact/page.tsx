import React from "react";
import InnerPageBanner from "../components/innerPageBanner";
import InnerPagesHeader from "../components/InnerPagesHeader";
import CTA2 from "../components/CTA2";
import Footer from "../components/Footer";

const SignUp = () => {
    return (
        <div className="bg-gray-100">
            <InnerPagesHeader />
            <InnerPageBanner currentPage={'Contact'} previousPage={'Home'} />
            <div className="flex items-center justify-center min-h-screen pt-20 sm:pt-20 bg-gray-100">
                <div className="sm:w-[80vw] w-[95vw] bg-white rounded-lg shadow-md p-8">
                    <form className="space-y-6">
                        {/* Full Name */}
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <i className="fas fa-user"></i>
                            </span>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                            />
                        </div>

                        {/* Two Columns for Small Inputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Email */}
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                                />
                            </div>

                            {/* Phone */}
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">
                                    <i className="fas fa-phone"></i>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <i className="fas fa-tag"></i>
                            </span>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                            />
                        </div>

                        {/* Address - Two Columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Address Line 1 */}
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Address Line 1"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                                />
                            </div>

                            {/* Address Line 2 */}
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Address Line 2"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <i className="fas fa-comment-dots"></i>
                            </span>
                            <textarea
                                placeholder="Message"
                                rows={5}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#FF9F0D] text-white hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] rounded-lg text-lg font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>


            <div className='bg-[#0D0D0D]'>
                <CTA2 />
                <Footer />
            </div>
        </div>
    );
};

export default SignUp;
