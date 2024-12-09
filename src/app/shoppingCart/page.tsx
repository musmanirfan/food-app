"use client";

import React from "react";
import { Add, Remove, Close, Star } from "@mui/icons-material";
import { PiCheckSquareOffset } from "react-icons/pi";
import InnerPagesHeader from "../components/InnerPagesHeader";
import InnerPageBanner from "../components/innerPageBanner";
import CTA2 from "../components/CTA2";
import Footer from "../components/Footer";

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Burger",
      price: 36.0,
      quantity: 1,
      total: 36.0,
      image: "/images/burger.jpeg",
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 25.0,
      quantity: 1,
      total: 25.0,
      image: "/images/fresh-lime.jpeg",
    },
    {
      id: 3,
      name: "Pizza",
      price: 150.0,
      quantity: 1,
      total: 150.0,
      image: "/images/pizza.jpeg",
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      price: 45.0,
      quantity: 1,
      total: 45.0,
      image: "/images/muffin.jpeg",
    },
    {
      id: 5,
      name: "Cheese Butter",
      price: 35.0,
      quantity: 1,
      total: 35.0,
      image: "/images/cheese-butter.jpeg",
    },
  ];

  return (
    <>
      <InnerPagesHeader />
      <InnerPageBanner currentPage={'Shopping Cart'} previousPage={'Home'} />

      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border-b border-gray-200">
              <thead>
                <tr className="hidden sm:table-row">
                  <th className="px-4 py-2 text-left">Product</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-b-gray-300 sm:table-row flex flex-col sm:flex-row gap-4 sm:gap-0 py-2"
                  >
                    <td className="px-4 py-2 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500 text-sm">
                          <Star style={{ color: "#FF9F0D" }} />
                          <Star style={{ color: "#FF9F0D" }} />
                          <Star style={{ color: "#FF9F0D" }} />
                          <Star style={{ color: "#E0E0E0" }} />
                          <Star style={{ color: "#E0E0E0" }} />
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center sm:text-left">
                      <span className="sm:hidden font-semibold">Price:</span> $
                      {item.price.toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-center sm:text-left">
                      <span className="sm:hidden font-semibold">Quantity:</span>
                      <div className="flex items-center w-[130px] mx-auto justify-center gap-2 border border-gray-300 rounded-full">
                        <button className="p-1">
                          <Remove fontSize="small" />
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button className="p-1">
                          <Add fontSize="small" />
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center sm:text-left">
                      <span className="sm:hidden font-semibold">Total:</span> $
                      {item.total.toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-center sm:text-left">
                      <span className="sm:hidden font-semibold">Remove:</span>
                      <button
                        className={index === 1 ? "text-[#FF9F0D]" : "text-black"}
                      >
                        <Close />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          {/* Coupon Code and Total Bill */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Coupon Code */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Coupon Code</h3>
              <div className="border border-gray-300 py-4 rounded space-y-3 px-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Here Code"
                    className="w-full border border-gray-300 rounded-lg pl-4 pr-24 py-3 text-sm h-12 outline-none focus:ring-0"
                  />
                  <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#FF9F0D] text-white px-5 py-3 rounded-lg">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Total Bill */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Total Bill</h3>
              <div className="border border-gray-300 py-4 rounded space-y-2">
                <div className="flex justify-between px-4">
                  <p className="text-gray-500">Cart Subtotal</p>
                  <p>$305.00</p>
                </div>
                <div className="flex justify-between px-4">
                  <p className="text-gray-500">Shipping Charge</p>
                  <p>$0.00</p>
                </div>
                <div className="border-t mt-4 pt-4 flex px-4 justify-between font-semibold text-lg">
                  <p>Total Amount</p>
                  <p>$305.00</p>
                </div>
              </div>
              <button className="flex w-full items-center gap-2 justify-center mt-4 bg-[#FF9F0D] text-white px-6 py-3 rounded">
                Proceed to Checkout
                <PiCheckSquareOffset />
              </button>
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

export default ShoppingCart;
