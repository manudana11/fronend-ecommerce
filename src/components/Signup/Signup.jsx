import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState';

const Signup = () => {
    const { signup } = useContext(UserContext);
    const navigate = useNavigate();
    const initialValues = {
        name: '',
        surname: '',
        email: '',
        direction: '',
        phonenumber: '',
        bithdate: '',
        gendre: '',
        password: ''
    };
    const [data, setData] = useState(initialValues);

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        signup(data);
        navigate('/products');
    }
  return (
    <form onSubmit={handleOnSubmit} className='products-container'>
        <fieldset>
            <legend>Sign Up</legend>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' id='name' onChange={handleInputChange} value={data.name} /><br /><br />
            <label htmlFor="surname">Surname: </label>
            <input type="text" name='surname' id='surname' onChange={handleInputChange} value={data.surname} /><br /><br />
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' id='email' onChange={handleInputChange} value={data.email} /><br /><br />
            <label htmlFor="direction">Direction: </label>
            <input type="text" name='direction' id='direction' onChange={handleInputChange} value={data.direction} /><br /><br />
            <label htmlFor="phonenumber">Phonenumber: </label>
            <input type="text" name='phonenumber' id='phonenumber' onChange={handleInputChange} value={data.phonenumber} /><br /><br />
            <label htmlFor="bithdate">Birthdate: </label>
            <input type="date" name='bithdate' id='bithdate' onChange={handleInputChange} value={data.bithdate} /><br /><br />
            <label htmlFor="gendre">Gendre: </label>
            <input type="text" name='gendre' id='gendre' onChange={handleInputChange} value={data.gendre} /><br /><br />
            <label htmlFor="password">Password: </label>
            <input type="password" name='password' id='password' onChange={handleInputChange} value={data.password} />
        </fieldset>
        <button>Create user</button>
    </form>
  )
}

export default Signup