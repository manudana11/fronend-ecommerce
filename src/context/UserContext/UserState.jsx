import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";

const token = localStorage.getItem('token') || '';

const initialState = {
    token: token,
    user: null,
};

const API_URL = 'http://localhost:3000/users';

export const UserContext = createContext(initialState);

export const UserPorivider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const login = async (user) => {
        try {
            const res = await axios.post(API_URL+'/login', user);
            dispatch({
                type: 'LOGIN',
                payload: res.data,
            });
            if (res.data) {
                localStorage.setItem('token', res.data.token);
            } 
        } catch (error) {
            console.error(error)
        }
        
    };

    return (
        <UserContext.Provider
        value={{
            token: state.token,
            user: state.user,
            login,
        }}>
            {children}
        </UserContext.Provider>
    )
}