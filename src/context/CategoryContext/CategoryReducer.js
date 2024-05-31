const category = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_BY_CATEGORY':
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

export default category;