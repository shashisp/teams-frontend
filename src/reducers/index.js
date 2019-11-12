import { combineReducers } from 'redux';
import { GET_USERS, DELETE_USER, ADD_USER, SELECT_USER, EDIT_USER } from "../actions/types";
import { reducer as formReducer } from 'redux-form';

const initalState = {
    users: [
        {
            "id": 1,
            "firstName": "Adrien",
            "lastName": "Olczak",
            "phone": "415-210-1619",
            "email": "adrien@instawork.com",
            "userType": "admin"
        },
        {
            "id": 2,
            "firstName": "Charlene",
            "lastName": "Pham",
            "phone": "415-210-1619",
            "email": "charlene@instawork.com",
            "userType": "regular"
        },
        {
            "id": 3,
            "firstName": "Benson",
            "lastName": "Mach",
            "phone": "415-210-1619",
            "email": "benson@instawork.com",
            "userType": "regular"
        },
        {
            "id": 4,
            "firstName": "Dan",
            "lastName": "Petrie",
            "phone": "415-210-1619",
            "email": "dan@instawork.com",
            "userType": "regular"
        }
    ],
    user: {}
};


const usersReducers = (state = initalState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...state.users]
            }
        case SELECT_USER:
            return {
                ...state,
                user: action.payload
            }
        case ADD_USER:
            return {
                
                ...state,
                users: [...state.users, action.payload]
            };
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id
                        ? (user = action.payload)
                        : user
                )
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(
                    user => user.id !== action.payload
                )

            }
        default:
            return state;
    }

};

export default combineReducers({
    users: usersReducers,
    form: formReducer,
});