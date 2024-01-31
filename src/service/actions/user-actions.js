export const FETCH_USER_REQUESTED = "FETCH USER REQUESTED";
export const FETCH_USER_SUCCESS = "FETCH USER SUCCESS";
export const FETCH_USER_FAILED = "FETCH USER FAILED";
export const ADD_USER = "ADD USER";


export const fetchUserRequested = ()=>{
    return {
        type: FETCH_USER_REQUESTED
    }
}

export const fetchUserSuccess = (userList)=>{
    return {
        type: FETCH_USER_SUCCESS,
        payload: userList
    }
}

export const fetchUserError = (error)=>{
    return {
        type: FETCH_USER_FAILED,
        payload: error
    }
}

export const addUser = (data)=>{
    return{
        type: ADD_USER,
        payload:data
    }
}

export const removeUser = (data)=>{
    return{
        type: ADD_USER,
        payload:data
    }
}