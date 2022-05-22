import React from 'react'
import Banner from './Banner'
import BusinessSummary from './BusinessSummary'
import Footer from './Footer'
import ProductWeMake from './ProductWeMake'
import Reviews from './Reviews'

const Home = () => {
    return (
        <div>
            <Banner />
            <ProductWeMake />
            <BusinessSummary />
            <Reviews />
            <Footer />
        </div>
    )
}

export default Home
