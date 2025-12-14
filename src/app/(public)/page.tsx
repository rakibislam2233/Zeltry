import FreshVegetables from '@/components/pages/home/FreshVegetables'
import Newsletter from '@/components/pages/home/Newsletter'
import PromotionBanner from '@/components/pages/home/PromotionBanner'
import TodayHotSale from '@/components/pages/home/TodayHotSale'
import React from 'react'

const HomePage = () => {
    return (
        <section className='w-full space-y-5 md:space-y-7'>
            <PromotionBanner />
            <TodayHotSale />
            <FreshVegetables />
            <Newsletter />
        </section>
    )
}

export default HomePage