import { combineReducers } from 'redux';

const usersReducer = () => {
    return [
        {
            "id": 1,
            "firstName": "Adrien",
            "lastName": "Olczak",
            "phone": "415-210-1619",
            "email": "adrien@instawork.com",
            "is_admin": true
        },
        {
            "id": 2,
            "firstName": "Charlene",
            "lastName": "Pham",
            "phone": "415-210-1619",
            "email": "charlene@instawork.com",
            "is_admin": false
        },
        {
            "id": 3,
            "firstName": "Benson",
            "lastName": "Mach",
            "phone": "415-210-1619",
            "email": "benson@instawork.com",
            "is_admin": false
        },
        {
            "id": 4,
            "firstName": "Dan",
            "lastName": "Petrie",
            "phone": "415-210-1619",
            "email": "adrien@instawork.com",
            "is_admin": false
        }
    ];
};


const selectedUserReducer = (user = null, action) => {
    if (action.type === 'USER_SELECTED') {
        return action.payload
    }
    return user
};

export default combineReducers({
    users: usersReducer,
    user: selectedUserReducer,
});