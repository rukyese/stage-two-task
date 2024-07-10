import React from 'react'
import '../Styles/ShippingMethod.css'

const BillingMethod = () => {
    return (
        <>
            <form>
                <label class="container no-btm round-top">Same as shipping address
                    <input type="radio" name="radio" checked />
                    <span class="checkmark"></span>
                </label>
                <label class="container">Use a different billing address
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
            </form>
        </>
    )
}

export default BillingMethod