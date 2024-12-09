import React from "react";
import InnerPageBanner from "../components/innerPageBanner";
import InnerPagesHeader from "../components/InnerPagesHeader";
import CTA2 from "../components/CTA2";
import Footer from "../components/Footer";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const SignUp = () => {
    return (
        <div className="bg-gray-100">
            <InnerPagesHeader />
            <InnerPageBanner currentPage={'404 Error'} previousPage={'Home'} />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Sign Up
                    </h2>
                    <form className="space-y-4">
                        {/* Name Field */}
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 text-[#FF9F0D] bg-gray-200 border-gray-300 rounded focus:ring-[#FF9F0D] checked:bg-[#FF9F0D]"
                            />
                            <label htmlFor="remember" className="ml-2 text-gray-600">
                                Remember me?
                            </label>
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-[#FF9F0D] text-white hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                        >
                            Sign Up
                        </button>

                        {/* Forgot Password */}
                        <p className="text-right mt-4 text-sm text-gray-600 hover:underline cursor-pointer">
                            Forget password?
                        </p>

                        {/* Divider */}
                        <div className="flex items-center justify-center my-4">
                            <span className="w-1/5 border-b"></span>
                            <span className="text-sm text-gray-500 mx-2">OR</span>
                            <span className="w-1/5 border-b"></span>
                        </div>

                        {/* Social Login */}
                        <button
                            type="button"
                            className="flex items-center justify-center w-full py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                        >
                            <img
                                src="https://www.google.com/favicon.ico"
                                alt="Google"
                                className="w-5 h-5 mr-2"
                            />
                            Sign up with Google
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center w-full py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                        >
                            <img
                                src="https://www.apple.com/favicon.ico"
                                alt="Apple"
                                className="w-5 h-5 mr-2"
                            />
                            Sign up with Apple
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
