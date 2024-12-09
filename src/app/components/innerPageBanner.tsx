"use client"

import { ChevronRight } from '@mui/icons-material'
import React from 'react'
import { BannerProps } from '../../../types/bannerPropTypes';

export default function InnerPageBanner({ currentPage, previousPage }: BannerProps) {
    return (
        <>
            <div
                className="h-[45vh] sm:mt-[70px] mt:50px bg-cover bg-center flex flex-col justify-center items-center gap-3"
                style={{ backgroundImage: "url('/innerPageBanner.jpeg')" }}
            >
                <h1 className="text-white text-center font-bold text-3xl">{currentPage}</h1>
                <div className="flex">
                    <h3 className='text-white'>{previousPage}</h3>
                    <ChevronRight style={{ color: 'white' }} />
                    <h3 className='text-[#FF9F0D] text-center'>{currentPage}</h3>
                </div>
            </div>
        </>
    );
}
