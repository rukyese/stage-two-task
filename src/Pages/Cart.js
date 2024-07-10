import React from 'react';
import '../Styles/Cart.css';

const Cart = () => {
  return (
    <div className="product-page">
      <div className="product-images">
        <div className="product-image">
          <img src="../Images/main-img.png" alt="Product" />
        </div>
        <div className="thumbnail-images">
          <img src="../Images/suppl-1.png" alt="Thumbnail 1" />
          <img src="../Images/suppl-2.png" alt="Thumbnail 2" />
          <img src="../Images/suppl-3.png" alt="Thumbnail 3" />
        </div>
      </div>
      <div className="product-details">
        <h4>CUSTOM DENIM JACKET</h4>
        <h3>Longer Dark Wash Denim Jacket</h3>
        <div className="reviews">10 Reviews</div>
        <ul className="features">
          <li>Made in Nigeria</li>
          <li>Uses Deadstock Materials</li>
          <li>Ships Free to USA</li>
          <li>Eligible for 30-day returns</li>
          <li>Unisex size and fit</li>
        </ul>
        <div className="cart-select">
          <select className="size-select">
            <option>Size 1</option>
            <option>Size 2</option>
            <option>Size 3</option>
          </select>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="shipping-returns">
          <p>Free shipping within Lagos. International rates calculated at checkout.</p>
        </div>
        <div className="sku">SKU: VRML-OS-201-1</div>
        <div className="cart-newsletter">
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
