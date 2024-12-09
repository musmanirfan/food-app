"use client";

import React from "react";
import InnerPagesHeader from "../components/InnerPagesHeader";
import InnerPageBanner from "../components/innerPageBanner";
import CTA2 from "../components/CTA2";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <InnerPagesHeader />
      <InnerPageBanner currentPage={'404 Error'} previousPage={'Home'} />
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          {/* Error Code */}
          <h1 className="text-9xl font-extrabold text-[#FF9F0D]">404</h1>
          {/* Error Message */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            Oops! Look likes something going wrong
          </h2>
          {/* Subtext */}
          <p className="text-gray-500 mt-2">
           {` Page Cannot be found! we'll have it figured out in no time.`}
            <br />
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 px-6 py-3 bg-[#FF9F0D] text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition"
          >
            Go to home
          </button>
        </div>
      </div>
      <div className='bg-[#0D0D0D]'>
        <CTA2 />
        <Footer />
      </div>
    </>
  );
}
