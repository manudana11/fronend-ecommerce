import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ProductsContext } from '../../context/ProductContext/ProductState'

const Header = () => {
  const { cart } = useContext(ProductsContext);
  const cartCounter = cart.length;
  return (
    <header className="header">
      <div className="logo">
        <img src="https://t3.ftcdn.net/jpg/04/13/51/78/360_F_413517864_HYCYKz7cQZOimyBcGhmQ874hnU9NYdvg.jpg" alt="ecommerce-golf" />
      </div>
      <nav className="nav-links">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/products">Products</Link></span>
        <span><Link to="/offers">Offers</Link></span>
      </nav>
      <div className="user-cart">
        <Link to="/profile" className="user-icon">
          <img src="https://cdn-icons-png.freepik.com/512/64/64573.png" alt="Usuario" />
        </Link>
        <Link to="/cart" className="cart-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/4379/4379539.png" alt="Carrito de Compras" />
          <span className="cart-count">{cartCounter}</span>
        </Link>
      </div>
    </header>
  )
}

export default Header