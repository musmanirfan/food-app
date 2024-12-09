import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { MdEmail, MdLock } from "react-icons/md";
import InnerPageBanner from "../components/innerPageBanner";
import InnerPagesHeader from "../components/InnerPagesHeader";
import CTA2 from "../components/CTA2";
import Footer from "../components/Footer";

const SignIn = () => {
    return (
        <div className="bg-gray-100">
            <InnerPagesHeader />
            <InnerPageBanner currentPage={'404 Error'} previousPage={'Home'} />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white p-6 shadow-lg">
                    <h1 className="text-2xl font-bold mb-6">Sign In</h1>

                    {/* Email Input */}
                    <div className="relative mb-4">
                        <MdEmail className="absolute left-3 top-3 text-gray-500 text-lg" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full pl-10 pr-4 py-2 border focus:outline-none focus:ring focus:ring-[#FF9F0D] placeholder-gray-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative mb-4">
                        <MdLock className="absolute left-3 top-3 text-gray-500 text-lg" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-4 py-2 border focus:outline-none focus:ring focus:ring-[#FF9F0D] placeholder-gray-500"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 text-orange-500 bg-gray-200 border-gray-300 rounded focus:ring-orange-500 checked:bg-orange-500"
                        />
                        <label htmlFor="remember" className="ml-2 text-gray-600">
                            Remember me?
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    <button className="w-full bg-[#FF9F0D] text-white py-2 mt-5 hover:bg-[#cb9139] transition">
                        Sign Up
                    </button>

                    {/* Forgot Password */}
                    <p className="text-right mt-4 text-sm text-gray-600 hover:underline cursor-pointer">
                        Forget password?
                    </p>

                    {/* OR Divider */}
                    <div className="flex items-center my-6">
                        <hr className="w-full border-gray-300" />
                        <span className="px-2 text-gray-500">OR</span>
                        <hr className="w-full border-gray-300" />
                    </div>

                    {/* Sign Up with Google */}
                    <button className="flex items-center justify-center w-full border py-2 rounded-lg mb-2 hover:bg-gray-100">
                        <FcGoogle className="text-xl mr-2" />
                        Sign up with Google
                    </button>

                    {/* Sign Up with Apple */}
                    <button className="flex items-center justify-center w-full border py-2 rounded-lg hover:bg-gray-100">
                        <AiFillApple className="text-2xl mr-2 text-black" />
                        Sign up with Apple
                    </button>
                </div>
            </div>
            <div className='bg-[#0D0D0D]'>
                <CTA2 />
                <Footer />
            </div>
        </div>
    );
};

export default SignIn;
