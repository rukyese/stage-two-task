import React from 'react';
import '../Styles/Cart.css'

const Cart = () => {
  return (
    <section className="cart">
      <div className="image-description">
        <div className="main-img">
          <img src="../Images/main-img.png" />
        </div>
        <div className="suppl-imgs">
          <img src="../Images/suppl-1.png" />
          <img src="../Images/suppl-2.png" />
          <img src="../Images/suppl-3.png" />
        </div>
      </div>
      <div className="text-description">
        
      </div>
    </section>
  )
}

export default Cart