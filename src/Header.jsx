import React from 'react'
import Cart from './Cart'

const Header = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                backgroundColor: 'gray',
                padding: '15px'
            }}>
                <div>Header</div>
                <Cart />
            </div>

        </>

    )
}

export default Header