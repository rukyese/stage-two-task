import React from 'react';
import '../Styles/ProductSummary.css';

function ProductSummary() {
  return (
    <div className="product-summary">
        <img src="../Images/main-img-crop.png" alt="Product" className="product-image"/>

      <div className="product-details">
        <h4>CUSTOM DENIM JACKET</h4>
        <h3>Longer Dark Wash Denim Jacket</h3>
        <div className="reviews">10 Reviews</div>
        <div className="price">N150,000.00</div>
        <div className="subtotal">Subtotal <span className='right'>N150,000</span></div>
        <div className="shipping">Shipping <span className='right'>N5,000</span></div>
        <div className="total">Total <span className='right'><span class="small">NGN</span>N155,000</span></div>
        <span class="small">Including N837.21 in taxes</span>
      </div>
    </div>
  );
}

export default ProductSummary;
