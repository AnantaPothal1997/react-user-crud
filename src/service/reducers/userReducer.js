import { ADD_USER, FETCH_USER_FAILED, FETCH_USER_REQUESTED, FETCH_USER_SUCCESS } from "../actions/user-actions"

import {action} from 'redux'


const intialState = {
    loading:false,
    loaded:false,
    user:[],
    error: '',
}

export const userReducer = (state = intialState, action )=>{
    switch (action.type){
        case FETCH_USER_REQUESTED:{
            return {
                ...state,
                loading:true
            }
        }
        case FETCH_USER_SUCCESS:{
            return{
                ...state,
                loading:false,
                user:action.payload
            }
        }
        case FETCH_USER_FAILED:{
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        }
        case ADD_USER:{
            let newUserList = [...state.user, action.payload];
            return{
                ...state,
                user: newUserList
            }
        }
        default :{
            return{
                ...state
            }
        }
    }
}