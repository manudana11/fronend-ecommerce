import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/ProductContext/ProductState'

const Cart = () => {
  const { cart } = useContext(ProductsContext);

  const totalPrice = cart.reduce((acumulator, product) => acumulator + product.price, 0);
  console.log(cart)
  return (
    <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length > 0 ? (
                <div>
                    <ul>
                        {cart.map((product, i ) => (
                            <li key={i}>
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="total">
                        <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
  )
}

export default Cart