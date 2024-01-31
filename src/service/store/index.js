import { userReducer } from "../reducers/userReducer";
import {createStore } from 'redux'

export const  store = createStore(userReducer);