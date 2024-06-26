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
                createUser: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: '',
                user: null,
            }
        default:
            return state;
    }
};

export default users;