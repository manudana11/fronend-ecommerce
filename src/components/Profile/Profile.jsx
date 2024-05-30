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
        <p>Orders: {user.user.orders}</p>
    </div>
  )
}

export default Profile