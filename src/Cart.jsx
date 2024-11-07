import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartQty = useSelector((state) => {
        console.log(state);
        return state.cart;
    })
    return (
        <div>Cart ({cartQty})</div>
    )
}

export default Cart