import React from 'react'
import InnerPagesHeader from '../components/InnerPagesHeader'
import InnerPageBanner from '../components/innerPageBanner'
import CTA2 from '../components/CTA2'
import Footer from '../components/Footer'

export default function page() {
    return (
        <>
            <InnerPagesHeader />
            <InnerPageBanner currentPage={'About'} previousPage={'Home'} />
            <div className='bg-[#0D0D0D]'>
                <CTA2 />
                <Footer />
            </div>
        </>
    )
}
