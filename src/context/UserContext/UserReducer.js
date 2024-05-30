const users = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token,
            };
        case 'GET_USER_INFO':
            return {
                ...state,
                user: action.payload,
            };
        case 'CREATE_USER':
            return {
                ...state,
                createUser: [...state.createUser, action.payload],
            };
        default:
            return state;
    }
};

export default users;