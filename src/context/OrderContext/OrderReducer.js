const orders = (state, action) => {
    switch (action.type) {
        case 'CREATE_ORDER':
            return {
                ...state,
                order: action.payload,
            };
        default:
            return state;
    }
};

export default orders;