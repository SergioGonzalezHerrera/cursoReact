import React from 'react';
import shoppingCart from './imagenes/shoppingCart.jpg'

function CartWidget() {
    return (
        <div>
            <a href=""><img src={shoppingCart} /></a>
            <p>0</p>
        </div>
    )
}

export default CartWidget