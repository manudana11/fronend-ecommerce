import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Spin } from 'antd';

const Profile = () => {
    const { getLoggedUserInfo, user, token } = useContext(UserContext);
    useEffect(() => {
        getLoggedUserInfo();
    }, [token]);

    if (!user) {
        return <Spin size='large' />;
    }
  return (
    <div>
        <p>Name: {user.user.name}</p>
        <p>Surname: {user.user.surname}</p>
        <p>Email: {user.user.email}</p>
        <p>Direction: {user.user.direction}</p>
        <p>Phone number: {user.user.phonenumber}</p>
        <p>Birth date: {user.user.birthdate}</p>
        <p>Gendre: {user.user.gendre}</p>
        <div>
                <h3>Orders:</h3>
                {user.user.Orders.map(order => (
                    <div key={order.id} className="order">
                        <p>Amount: {order.amount}</p>
                        <p>Status: {order.status}</p>
                        <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
                        <h4>Products:</h4>
                        <ul>
                            {order.Products.map((product, index) => (
                                <li key={index}>
                                    <p>Name: {product.name}</p>
                                    <p>Price: ${product.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Profile