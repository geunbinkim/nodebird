export const initalState = {
    isLoggedIn : false,
    me: null,
    signUpData: {},
    loginData: {}
}

export const loginAction = (data) => {
    return {
        type : 'LOG_IN',
        data
    }
}

export const logoutAction = () => {
    return {
        type : 'LOG_OUT',
    }
}

const reducer = (state = initalState, action) => {
    switch (action.type){
        case 'LOG_IN' :
            return {
                ...state,
                isLoggedIn: true,
                me : action.data
            }
            break;
        case 'LOG_OUT' :
            return {
                ...state,
                isLoggedIn: false,
                me : null
            }
            break;
        default : return state;
    }
};

export default reducer;