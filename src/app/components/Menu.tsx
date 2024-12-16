"use client"

import React, { useState } from 'react'


const menuData: Record<string, string[]> = {
    Breakfast: [
        "Mild Butter",
        "Glow Cheese",
        "Fresh Breakfast",
        "Italian Pizza",
        "Mild Butter",
        "Slice Beef",
        "Fresh Bread",
        "Mushroom Pizza",
        "Extra Item 1",
        "Extra Item 2",
    ],
    Lunch: [
        "Fresh Breakfast",
        "Italian Pizza",
        "Mild Butter",
        "Slice Beef",
        "Fresh Bread",
        "Mushroom Pizza",
        "Extra Lunch Item 1",
        "Extra Lunch Item 2",
        "Extra Lunch Item 3",
    ],
    Dinner: [
        "Mild Butter",
        "Slice Beef",
        "Fresh Bread",
        "Mushroom Pizza",
        "Grilled Chicken",
        "Steak",
        "Pasta",
        "Garlic Bread",
        "Salmon Dinner",
    ],
    Dessert: [
        "Ice Cream",
        "Brownie",
        "Cheesecake",
        "Pudding",
        "Mousse",
        "Fruit Salad",
        "Cupcake",
        "Tart",
        "Macaron",
    ],
    Drink: [
        "Fresh Orange Juice",
        "Cold Coffee",
        "Mojito",
        "Milkshake",
        "Soda",
        "Iced Tea",
        "Hot Chocolate",
        "Smoothie",
    ],
    Snack: [
        "Nachos",
        "Veggie Sandwich",
        "Fries",
        "Popcorn",
        "Cheese Balls",
        "Chicken Wings",
        "Spring Rolls",
        "Chips",
    ],
};

const Menu = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof menuData>("Breakfast");
    return (
        <section className='md:w-[85vw] w-[90vw] mx-auto mt-40'>
            <div className='flex flex-col items-center'>
                <img src="/menu.png" alt="menu" />
                <h1 className='text-4xl font-semibold text-white mt-2'><span className="text-[#FF9F0D]">From</span> Our Menu</h1>
            </div>

            <ul className="flex flex-wrap md:gap-8 gap-x-5 gap-y-2 mt-12 !justify-center text-xl text-black">
                {Object.keys(menuData).map((tab) => (
                    <li
                        key={tab}
                        className={`cursor-pointer ${activeTab === tab ? "text-[#e88d0a] font-semibold underline" : "text-white"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>


            <div className="grid md:grid-cols-3 gap-5 mt-14">
                <div className="relative w-full h-fit md:mx-0">
                    <img src="/menuImg.png" alt="Menu Image" className="relative z-10 w-full h-96" />
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <img src="/menuImg2.png" alt="Menu Image" className="z-20 w-80" />
                    </div>
                </div>
                <div className="col-span-2 text-black grid md:grid-cols-2 gap-x-5 gap-y-3">
                    {menuData[activeTab as keyof typeof menuData]
                        .slice(0, 8)
                        .map((name, i) => (
                            <div
                                className="items-start flex justify-evenly"
                                key={i}
                            >
                                <img src={`/menu${i + 1}.png`} alt="Menu Card Images" />
                                <div className="space-y-1">
                                    <h5 className="text-xl font-medium text-white">{name}</h5>
                                    <p className="text-xs text-white mt-5">Lacus nisi, et ac dapibus velit in consequat.</p>
                                    <h5 className="text-[#e88d0a] font-bold">14.5$</h5>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </section>
    )
}

export default Menu