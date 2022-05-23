import React from 'react'
import Banner from './Banner'
import BusinessSummary from './BusinessSummary'
import Subscribe from './Subscribe'
import Footer from './Footer'
import ProductWeMake from './ProductWeMake'
import Reviews from './Reviews'

const Home = () => {
    return (
        <div className="bg-[#011520]">
            <Banner />
            <ProductWeMake />
            <Reviews />
            <BusinessSummary />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Home
