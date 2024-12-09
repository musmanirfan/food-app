import React from 'react'

const Counters = () => {
    const data = [
        {
            name: "Professional Chefs",
            count: "420"
        },
        {
            name: "Items Of Food",
            count: "320"
        },
        {
            name: "Years Of Experienced",
            count: "30+"
        },
        {
            name: "Happy Customers",
            count: "220"
        },
    ]
    return (
        <section className='w-full bg-[url(/counterbg.png)] bg-center bg-cover bg-no-repeat mt-40 py-24 relative'>
            <div className='md:w-[85vw] w-[90vw] mx-auto grid md:grid-cols-4 md:gap-0 gap-12 items-center z-20 relative text-white'>
                {data.map(({count, name}, i) => (
                    <div key={i} className='mx-auto md:space-y-5 space-y-2'>
                        <img className='h-24 mx-auto' src={`/counterIcon${i+1}.png`} alt="Count Section Icons" />
                        <p className='text-xl font-semibold text-center'>{name}</p>
                        <p className='text-4xl font-semibold text-center'>{count}</p>
                    </div>
                ))}
            </div>

            <div className="absolute top-0 left-0 z-10 bg-black opacity-80 w-full h-full"></div>
        </section>
    )
}

export default Counters