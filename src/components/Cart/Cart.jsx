import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/ProductContext/ProductState'

const Cart = () => {
  const { products, cart } = useContext(ProductsContext);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    const filterProducts = products.filter(product => cart.includes(product.id));
    setCartProducts(filterProducts);
  }, [products, cart]);

  const totalPrice = cartProducts.reduce((acumulator, product) => acumulator + product.price, 0);
  return (
    <div className="cart">
            <h2>Shopping Cart</h2>
            {cartProducts.length > 0 ? (
                <div>
                    <ul>
                        {cartProducts.map(product => (
                            <li key={product.id}>
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