import React from 'react'
import '../Styles/Product.css'

const Product = ({ name, price }) => {
  const imgUrl = `../Images/${name}.png`;

  return (
    <div className="product">
      <div className="product-img-container">
        <img src={imgUrl} alt={name} />
      </div>
      <h4>{name.replaceAll("-", " ")}</h4>
      <p>${price}</p>
    </div>
  );
}

export default Product;