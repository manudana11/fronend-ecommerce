import React, {  createContext, useReducer } from 'react';
import ProductReducer from "./ProductReducer";
import axios from 'axios';

const initialState = {
    products: [],
    cart: JSON.parse(localStorage.getItem('Cart')) || [],
};

const API_URL = 'http://localhost:3000/products/';

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);
    const getProducts = async () => {
        const res = await axios.get(API_URL);
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
        });
    };
    const addToCart = (ProductId) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: ProductId,
        });
    };
    return (
        <ProductsContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                getProducts,
                addToCart,
            }}>
                {children}
            </ProductsContext.Provider>
    )
}