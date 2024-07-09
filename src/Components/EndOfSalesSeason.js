import React from 'react';
import '../Styles/EndOfSalesSeason.css'
import { Link } from 'react-router-dom';

const EndOfSalesSeason = () => {
  return (
    <section className="EndOfSalesSeason">
            <img className="EndOfSalesSeason-img" src="./Images/end-of-sales-season.png" /> 

            <div className="EndOfSalesSeason-text">
                <p>End of sales season</p>
                <ul>
                  <li><Link to="#">Men</Link></li>
                  <li><Link to="#">Women</Link></li>
                  <li><Link to="#">Girls</Link></li>
                  <li><Link to="#">Boys</Link></li>
                  <li><Link to="#">Lifestyle</Link></li>
                </ul>
            </div> 
        </section>
  )
}

export default EndOfSalesSeason