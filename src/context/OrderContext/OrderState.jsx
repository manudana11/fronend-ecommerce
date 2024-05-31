import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import OrderReducer from "./OrderReducer";
import { ProductsContext } from "../ProductContext/ProductState";

const initialState = {
    order: {},
};

const API_URL = 'http://localhost:3000/orders';

export const OrderContext = createContext(initialState);

export const OrderProvider = ({children}) => {
    const { cart } = useContext(ProductsContext);
    const [state, dispatch] = useReducer(OrderReducer, { ...initialState, order:cart });
    

    const createOrder = async (order, token) => {
        try {
            const res = await axios.post(API_URL + '/', order, {
                headers: {
                    Authorization: token
                }
            });
            dispatch({
                type: 'CREATE_ORDER',
                payload: res.data.order,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <OrderContext.Provider
        value={{
            order: state.order,
            createOrder,
        }}>
            {children}
        </OrderContext.Provider>
    )
}