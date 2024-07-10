import React from 'react'
import ProductSummary from '../Components/ProductSummary.js';
import CheckoutForm from '../Components/CheckoutForm.js';
import '../Styles/Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-page">
      <ProductSummary />
      <CheckoutForm />
    </div>
  )
}

export default Checkout