import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ProductsContext } from '../../context/ProductContext/ProductState'
import { UserContext } from '../../context/UserContext/UserState'

const Header = () => {
  const { cart } = useContext(ProductsContext);
  const { token } = useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartCounter = cart.length;


  const renderUserLink = token ? <Link to="/users/conecteduser" className="user-icon">
    <img src="https://cdn-icons-png.freepik.com/512/64/64573.png" alt="Usuario" />
  </Link> : <Link to="/users/login" className="user-icon">
    <img src="https://cdn-icons-png.freepik.com/512/64/64573.png" alt="Login" />
  </Link>

  return (
    <header className="header">
      <div className="logo">
        <img src="https://t3.ftcdn.net/jpg/04/13/51/78/360_F_413517864_HYCYKz7cQZOimyBcGhmQ874hnU9NYdvg.jpg" alt="ecommerce-golf" />
      </div>
      <nav className="nav-links">
        <span><Link to="/">Home</Link></span>
        <span onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}><Link to="/products">Products</Link>{isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/golfClubs">Golf Clubs</Link>
              <Link to="/drivers">Drivers</Link>
            </div>
          )}</span>
        <span><Link to="/offers">Offers</Link></span>
        <span><Link to="/golfClubs">Golf Clubs</Link></span>
      </nav>
      <div className="user-cart">
      {renderUserLink}
        <Link to="/cart" className="cart-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/4379/4379539.png" alt="Carrito de Compras" />
          <span className="cart-count">{cartCounter}</span>
        </Link>
      </div>
    </header>
  )
}

export default Header