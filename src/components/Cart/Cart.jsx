import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/ProductContext/ProductState'
import { OrderContext } from '../../context/OrderContext/OrderState'
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrderContext);
  const { token, getLoggedUserInfo, user } = useContext(UserContext);
  const navigate = useNavigate();


  const totalPrice = cart.reduce((acumulator, product) => acumulator + product.price, 0);
  console.log(cart)
  const getProductsIds = () => {
    return cart.map(product => product.id);
  };
  useEffect(() => {
      getLoggedUserInfo();
    }, [token]);
    const handleCreateOrder = () => {
      const order = {
          ProductId: getProductsIds(),
          name: user.user.name
      };
      createOrder(order, token);
      navigate('/users/conecteduser');
      const cart = localStorage.getItem('Cart');
      localStorage.removeItem('Cart');
      clearCart();
    };
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
                                <button onClick={() => removeFromCart(i)}>Remove product</button>
                            </li>
                        ))}
                    </ul>
                    <div className="total">
                        <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
                    </div>
                    <button onClick={handleCreateOrder}>Create order</button>
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
  )
}

export default Cart