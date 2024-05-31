import React, { createContext, useReducer } from "react";
import axios from "axios";
import CategoryReducer from './CategoryReducer';

const initialState = {
    categoryById: [],
};

const API_URL = 'http://localhost:3000/categories/';

export const CategoryContext = createContext(initialState);

export const CategoryProvider = ({children}) => {
    const [state, dispatch] = useReducer(CategoryReducer, initialState);
    const getProductsByCategory = async (id) => {
        try {
            const res = await axios.get(API_URL + 'id/' + id);
            dispatch({
                type: 'GET_PRODUCTS_CATEGORY_BY_ID',
                payload: res.data,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CategoryContext.Provider
        value={{
            categoryById: state.categoryById,
            getProductsByCategory,
        }}>
            {children}
        </CategoryContext.Provider>
    )
}