import React from 'react';
import '../Styles/Cart.css'

// const Cart = () => {

//   return (
//     <section className="cart">
//       <div class="description">
//       <div className="image-description">
//         <div className="main-img">
//           <img src="../Images/main-img.png" />
//         </div>
//         <div className="suppl-imgs">
//           <img src="../Images/suppl-1.png" />
//           <img src="../Images/suppl-2.png" />
//           <img src="../Images/suppl-3.png" />
//         </div>
//       </div>
//       {/* <div className="text-description">
//         <h1 class="title">CUSTOM DENIM JACKET</h1>
//         <h2>Longer Dark Wash Denim Jacket</h2>
//         <p>10 Reviews</p>

//         <h1>N150,000.00</h1>

//         <ul>
//           <li>MADE IN NIGERIA</li>
//           <li>USES DEADTOCK MATERIALS</li>
//           <li>SHIPS FREE TO USA</li>
//           <li>ELIGIBLE FOR 30-DAY RETURNS</li>
//           <li>UNISEX SIZE AND FIT</li>
//         </ul>

//         <form>
//           <select>
//             <option>Size 1</option>
//             <option>Size 2</option>
//             <option>Size 3</option>
//           </select>

//           <button>ADD TO CART</button>
//         </form>

//         <p>Shipping & Returns</p>
//         <p>Free shipping within Lagos.<br /> International rates calculated at checkout</p>

//         <p>SKU: VRML-OS-201-1</p>

//         <h4>Subscribe to our Newsletter</h4>
//         <form>
//           <input type="email" placeholder="Email" />
//           <input type="submit" value="Subscribe" />
//         </form>
//       </div> */}
//       </div>
//     </section>
//   )
// }

// export default Cart


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
        <h1>Longer Dark Wash Denim Jacket</h1>
        <div className="reviews">10 Reviews</div>
        <div className="price">N150,000.00</div>
        <ul className="features">
          <li>Made in Nigeria</li>
          <li>Uses Deadstock Materials</li>
          <li>Ships Free to USA</li>
          <li>Eligible for 30-day returns</li>
          <li>Unisex size and fit</li>
        </ul>
        <select className="size-select">
          <option>Size 1</option>
          <option>Size 2</option>
          <option>Size 3</option>
        </select>
        <button className="add-to-cart">Add to Cart</button>
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
  )
}

export default Cart