import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity } from './redux/actions/cart-action';

const ProductDetail = () => {
    const cartQty = useSelector((state) => {
        return state.cart
    });
    const dispath = useDispatch();
    const increaseQty = () => {
        dispath(increaseQuantity(1))
    }
    return (
        <>
            <div> list cart</div>
            <button>-</button>
            <input value={cartQty} />
            <button onClick={increaseQty}>+</button>
        </>
    )
}

export default ProductDetail