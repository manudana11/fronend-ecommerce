import React, { createContext, useReducer } from "react";
import axios from "axios";
import CategoryReducer from './CategoryReducer';

const initialState = {
    products: [],
};

const API_URL = 'http://localhost:3000/categories/';

export const CategoryContext = createContext(initialState);

export const CategoryProvider = ({children}) => {
    const [state, dispatch] = useReducer(CategoryReducer, initialState);
    const getProductsByCategory = async () => {

    };

    return (
        <CategoryContext.Provider
        value={{
            products: state.products,
        }}>
            {children}
        </CategoryContext.Provider>
    )
}