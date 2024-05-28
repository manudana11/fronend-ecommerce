const products = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "ADD_TO_CART":
            const addProductToCart = [...state.cart, action.payload];
            localStorage.setItem('Cart', JSON.stringify(addProductToCart));
            return {
                ...state,
                cart: addProductToCart,
            }
        default:
            return state;
    }
};

export default products;