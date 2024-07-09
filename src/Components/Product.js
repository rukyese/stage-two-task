import React from 'react'
import '../Styles/Product.css'

const Product = ({ name, price }) => {
  const imgUrl = `../Images/${name}.png`; 

  return (
    <div className="product">
      <img src={imgUrl} alt={name} />
      <h4>{name.replaceAll("-", " ")}</h4>
      <p>${price}</p>
    </div>
  );
}

export default Product;