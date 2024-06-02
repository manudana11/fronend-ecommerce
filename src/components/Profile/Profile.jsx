import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Profile.scss';

const Profile = () => {
    const { getLoggedUserInfo, user, token, logout } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        getLoggedUserInfo();
    }, [token]);

    if (!user) {
        return <Spin size='large' />;
    }
  return (
    <div className='profile-container'>
            <div className='profile-card'>
                <h2>Profile Information</h2>
                <p><strong>Name:</strong> {user.user.name}</p>
                <p><strong>Surname:</strong> {user.user.surname}</p>
                <p><strong>Email:</strong> {user.user.email}</p>
                <p><strong>Direction:</strong> {user.user.direction}</p>
                <p><strong>Phone number:</strong> {user.user.phonenumber}</p>
                <p><strong>Birth date:</strong> {new Date(user.user.birthdate).toLocaleDateString()}</p>
                <p><strong>Gender:</strong> {user.user.gendre}</p>
            </div>
            <div className='orders-container'>
                <h2>Orders</h2>
                {user.user.Orders.length > 0 ? (
                    user.user.Orders.map(order => (
                        <div key={order.id} className='order-card'>
                            <p><strong>Amount:</strong> {order.amount} €</p>
                            <p><strong>Status:</strong> {order.status}</p>
                            <p><strong>Created At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                            <h3>Products:</h3>
                            <ul>
                                {order.Products.map((product, index) => (
                                    <li key={index}>
                                        <p><strong>Name:</strong> {product.name}</p>
                                        <p><strong>Price:</strong> ${product.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
            <button className='signoff-button' onClick={() => {
                logout();
                navigate('/products');
            }}>Sign off</button>
        </div>
  )
}

export default Profile