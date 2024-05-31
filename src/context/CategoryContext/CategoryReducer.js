const category = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_CATEGORY_BY_ID':
            return {
                ...state,
                category: action.payload,
            };
        default:
            return state;
    }
};

export default category;