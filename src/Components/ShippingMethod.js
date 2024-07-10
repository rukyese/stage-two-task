import React from 'react'
import '../Styles/ShippingMethod.css'

const ShippingMethod = () => {
    return (
        <>
            <form>
                <label class="container no-btm round-top">Standard
                    <input type="radio" name="radio" checked />
                    <span class="checkmark"></span>
                </label>
                <label class="container no-btm">Mainland Delivery
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">Island Delivery
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
            </form>
        </>
    )
}

export default ShippingMethod