"use client";

import React from "react";
import { ArrowBackIos, ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import CTA2 from "../components/CTA2";
import Footer from "../components/Footer";
import InnerPagesHeader from "../components/InnerPagesHeader";
import InnerPageBanner from "../components/innerPageBanner";

const Checkout = () => {
  return (
    <>
      <InnerPagesHeader />
      <InnerPageBanner currentPage={'Checkout Page'} previousPage={'Home'} />
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Shipping Address */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-gray-300 p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 p-3 w-full"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="border border-gray-300 p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border border-gray-300 p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="border border-gray-300 p-3 w-full"
                />
                <select className="border border-gray-300 p-3 w-full text-gray-500">
                  <option>Choose country</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>Pakistan</option>
                </select>
                <select className="border border-gray-300 p-3 w-full text-gray-500">
                  <option>Choose city</option>
                  <option>New York</option>
                  <option>Karachi</option>
                  <option>London</option>
                </select>
                <input
                  type="text"
                  placeholder="Zip code"
                  className="border border-gray-300 p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Address 1"
                  className="border border-gray-300 p-3 w-full md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Address 2"
                  className="border border-gray-300 p-3 w-full md:col-span-2"
                />
              </form>

              {/* Billing Address */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-[#FF9F0D] border-gray-300 focus:ring-[#FF9F0D]"
                  />
                  <span className="text-gray-600">Same as shipping address</span>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-10 w-full">
                <button className="w-[48%] px-5 text-center justify-center py-3 flex items-center gap-2 bg-gray-200 text-gray-600">
                  <ArrowBackIos /> Back to cart
                </button>
                <button className="w-[48%] px-5 text-center justify-center py-3 flex items-center gap-2 bg-[#FF9F0D] text-white">
                  Proceed to shipping <ArrowForwardIos />
                </button>
              </div>
            </div>

            {/* Right Section - Order Summary */}
            <div>
              <div className="border border-gray-300 p-4">
                {/* Items */}
                <div className="space-y-4">
                  {[1, 2, 3].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src="/images/chicken-tikka.jpeg"
                        alt="Chicken Tikka Kabab"
                        className="w-16 h-16 object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold">Chicken Tikka Kabab</h3>
                        <p className="text-gray-500 text-sm">
                          Qty: 1 <br /> 105 RS
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-500">Sub-total</p>
                    <p>1050 RS</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-500">Shipping</p>
                    <p>Free</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-500">Discount</p>
                    <p>20%</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-500">Tax</p>
                    <p>51.75 RS</p>
                  </div>
                  <div className="border-t flex justify-between font-semibold text-lg mt-4 pt-4">
                    <p className="">Total</p>
                    <p>432.685 RS</p>
                  </div>
                </div>

                {/* Place Order Button */}
                <button className="w-full mt-6 py-3 bg-[#FF9F0D] text-white flex gap-3 justify-center">
                  Place an order
                  <ArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#0D0D0D]'>
        <CTA2 />
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
