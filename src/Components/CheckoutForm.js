import React from 'react';
import '../Styles/CheckoutForm.css';
import ShippingMethod from './ShippingMethod.js';
import BillingAddress from './BillingAddress.js'

function CheckoutForm() {
  return (
    <div className="checkout-form">
      <div className="contact">
        <h2>Contact<span class="login">Log in</span></h2>
        <input type="email" placeholder="Email or phone number" />
      </div>
      <div className="delivery">
        <h2>Delivery</h2>
        <select>
          <option>Country/Region</option>
        </select>
        <div className="name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Apartment (optional)" />
        <div className="city-state">
          <input className="city" type="text" placeholder="City" />
          <select>
            <option>State</option>
          </select>
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="shipping-method">
        <h4>Shipping Method</h4>
        <ShippingMethod />
      </div>
<br />
      <div className="payment">
        <h2>Payment</h2>
        <p>All transactions are secure and encrypted</p>
        <div className="payment-methods">
          <button class="round-top">Paystack <img src="../Icons/payment-logos.svg" /></button>
        </div>
      </div>
      <div className="billing-address">
        <h4>Billing Address</h4>
        <BillingAddress />
      </div>
      <br />
      <button className="pay-now">Pay now</button>
    </div>
  );
}

export default CheckoutForm;
