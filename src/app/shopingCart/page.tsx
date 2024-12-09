"use client";

import React from "react";
import { Add, Remove, Close } from "@mui/icons-material";

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Burger",
      price: 20.0,
      quantity: 1,
      total: 20.0,
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
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Product</th>
                <th className="border border-gray-200 px-4 py-2">Price</th>
                <th className="border border-gray-200 px-4 py-2">Quantity</th>
                <th className="border border-gray-200 px-4 py-2">Total</th>
                <th className="border border-gray-200 px-4 py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-200 px-4 py-2 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-500 text-sm">⭐⭐⭐⭐⭐</p>
                    </div>
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">${item.price.toFixed(2)}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1 border border-gray-300 rounded">
                        <Remove fontSize="small" />
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button className="p-1 border border-gray-300 rounded">
                        <Add fontSize="small" />
                      </button>
                    </div>
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    ${item.total.toFixed(2)}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    <button className="text-red-500">
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
            <textarea
              className="w-full border border-gray-300 p-3 rounded resize-none"
              rows={3}
              placeholder="Enter coupon code"
            ></textarea>
            <button className="mt-4 bg-[#FF9F0D] text-white px-4 py-2 rounded">
              Apply
            </button>
          </div>

          {/* Total Bill */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Total Bill</h3>
            <div className="border border-gray-300 p-4 rounded space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-500">Cart Subtotal</p>
                <p>$305.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Shipping Charge</p>
                <p>$0.00</p>
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-lg">
                <p>Total Amount</p>
                <p>$305.00</p>
              </div>
              <button className="w-full mt-4 bg-[#FF9F0D] text-white px-6 py-3 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
