import React from 'react'
import ProductListing from '../Components/ProductListing.js';
import Header from '../Components/Header.js';
import Explore from '../Components/Explore.js';
import EndOfSalesSeason from '../Components/EndOfSalesSeason.js'

const Home = () => {
  return (
    <>
      <Header />
      <ProductListing />
      <Explore />
      <EndOfSalesSeason />
    </>
  )
}

export default Home