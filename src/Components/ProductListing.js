import React from 'react'
import '../Styles/ProductListing.css'
import Product from './Product'

const ProductListing = () => {
  return (
    <section id="product-listing">
      <div className="product-box">
        <Product name="The-Jackman-Jacket" price="320" />
        <Product name="The-Tattoo-stitch-series" price="520" />
        <Product name="The-Ikorodu-Jacket" price="820" />
        <Product name="The-Monochrome-series" price="3,220" />
        <Product name="The-Suit-dress" price="920" />
        <Product name="The-Freedom-hat-and-frekle-Jacket" price="1,820" />
      </div>
    </section>
  )
}

export default ProductListing