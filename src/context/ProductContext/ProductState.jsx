import React, {  createContext, useReducer } from 'react';
import ProductReducer from "./ProductReducer";
import axios from 'axios';

const initialState = {
    products: [],
};

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);
    const getProducts = async () => {
        const res = await axios.get("http://localhost:3000/products/");
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
        });
    };

    return (
        <ProductsContext.Provider
            value={{
                products: state.products,
                getProducts,
            }}>
                {children}
            </ProductsContext.Provider>
    )
}