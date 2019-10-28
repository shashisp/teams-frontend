import { GET_USERS, DELETE_USER, ADD_USER, SELECT_USER, EDIT_USER } from "../actions/types";


export const getUsers = () => {
    return {
      type: GET_USERS,
      payload: ""
    };
  };

  export const selectUser = (user) => {
    return {
      type: SELECT_USER,
      payload: user
    } ;
  };
  
  export const deleteUser = (user) => {
    try {
      return {
        type: DELETE_USER,
        payload: user
      };
    } catch (e) {
      return {
        type: DELETE_USER,
        payload: user
      } ;
    }
  };

  let previousId = 4;
  export const addUser = (user) => {
    const id = previousId + 1;
    user.id = id;
    const action = {
      type: ADD_USER,
      payload: user
    };
    previousId = id;
    return action;
  };
  
  export const editUser = (user) => {
    return { type: EDIT_USER, payload: user };
  };


