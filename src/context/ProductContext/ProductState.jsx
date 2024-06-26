import React, {  createContext, useReducer } from 'react';
import ProductReducer from "./ProductReducer";
import axios from 'axios';

const cart = JSON.parse(localStorage.getItem('Cart')) || [];

const initialState = {
    products: [],
    cart: cart,
    searchResults: [],
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
    const addToCart = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        });
    };
    const removeFromCart = (i) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: i,
        });
    };
    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
        });
    };
    const searchProducts = async (name) => {
        try {
            const res = await axios.get(API_URL + `name/${name}`);
            dispatch({
                type: 'SEARCH_PRODUCTS',
                payload: res.data,
            });
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <ProductsContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                searchResults:state.searchResults,
                getProducts,
                addToCart,
                removeFromCart,
                clearCart,
                searchProducts,
            }}>
                {children}
            </ProductsContext.Provider>
    )
}