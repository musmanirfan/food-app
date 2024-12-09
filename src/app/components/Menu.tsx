import React from 'react'

const Menu = () => {
    return (
        <section className='md:w-[85vw] w-[90vw] mx-auto mt-40'>
            <div className='flex flex-col items-center'>
                <img src="/menu.png" alt="menu" />
                <h1 className='text-4xl font-semibold text-white mt-2'><span className="text-[#FF9F0D]">From</span> Our Menu</h1>
            </div>

            <ul className='flex flex-wrap md:gap-16 gap-x-5 gap-y-2 mt-12 text-xl text-white'>
                <li className='text-[#FF9F0D] font-semibold'>Breakfast</li>
                {["Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((li => (
                    <li key={li}>{li}</li>
                )))}
            </ul>

            <div className='grid md:grid-cols-3 gap-5 mt-14'>
                <div className='relative w-full h-fit md:mx-0'>
                    <img src="/menuImg.png" alt="Menu Image" className='relative z-10 w-full h-96' />
                    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                        <img src="/menuImg2.png" alt="Menu Image" className='z-20 w-80' />
                    </div>
                </div>
                <div className='col-span-2 text-white grid md:grid-cols-2 gap-x-5 gap-y-3'>
                    {["Lettuce Leaf", "Glow Cheese", "Fresh Breakfast", "Italian Pizza", "Mild Butter", "Sllice Beef", "Fresh Bread", "Mushaom Pizza"].map((name, i) => (
                        <div className='flex items-center gap-3' key={i}>
                            <img src={`/menu${i + 1}.png`} alt="Menu Card Images" />
                            <div className='space-y-1'>
                                <h5 className='text-xl font-medium'>{name}</h5>
                                <p className='text-xs'>Lacus nisi, et ac dapibus velit in consequat.</p>
                                <h5 className="text-[#FF9F0D] font-bold">12.5$</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Menu