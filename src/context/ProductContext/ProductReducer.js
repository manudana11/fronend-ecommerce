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
            };
        case "REMOVE_FROM_CART":
                const filteredCart = state.cart.filter(
                    (product, i) => i !== action.payload
                );
                localStorage.setItem('Cart', JSON.stringify(filteredCart));
                return {
                    ...state,
                    cart: filteredCart,
                };
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};

export default products;