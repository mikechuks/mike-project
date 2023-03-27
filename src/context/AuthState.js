import React, {useState, useReducer } from 'react'
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { LoginStart, LoginSuccess, LoginFailure } from './Authaction';
const AuthState = (props) => {
    const INITIAL_STATE = {
        useAllOne:[],
        useAll: [],
        userForm: '',
        password: '',
        conPass:'',
        email:'',
        address:'',
        genders: '',
        coinname: '',
        sold:'',
    }
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
        //Login success
        const authLoginSuccess = (e) => {
            dispatch({
                type: LoginSuccess,
                payload: e,
            })
        }
    //Login start
    const authUseAllOne = (e) => {
        dispatch({
            type: LoginStart,
            fieldName: 'useAllOne',
            payload: e,
        })
    }
    const authUseAll = (e) => {
        dispatch({
            type: LoginStart,
            fieldName: 'useAll',
            payload: e,
        })
    }
    const authLoginConPass = (start) => {
        dispatch({
            type: LoginStart,
            fieldName: 'conPass',
            payload: start.currentTarget.value,
        })
} 
const authLoginGender = (start) => {
        dispatch({
            type: LoginStart,
            fieldName: 'genders',
            payload: start.currentTarget.value,
        })
} 
const authLoginCoinName = (start) => {
    dispatch({
        type: LoginStart,
        fieldName: 'coinname',
        payload: start.currentTarget.value,
    })
}
const authLoginSold = (start) => {
    dispatch({
        type: LoginStart,
        fieldName: 'sold',
        payload: start.currentTarget.value,
    })
}
    const authLoginAddress = (start) => {
        dispatch({
            type: LoginStart,
            fieldName: 'address',
            payload: start.currentTarget.value,
        })
} 
const authLoginEmail = (start) => {
        dispatch({
            type: LoginStart,
            fieldName: 'email',
            payload: start.currentTarget.value,
        })
}
const authLoginPass = (start) => {
    dispatch({
        type: LoginStart,
        fieldName: 'password',
        payload: start.currentTarget.value,
    })
}
const authLoginStart = (e) => {
    dispatch({
        type: LoginStart,
        fieldName: 'userForm',
        payload:e.target.value,
    })
}
    //Login Failure
    const authLoginFailure = (Failure) => {
        dispatch({
            type: LoginFailure,
            payload: Failure,
        })
    }
  return (
    <AuthContext.Provider 
    value={{
        user:state.user, 
        isFetching:state.isFetching, 
        error:state.error,
        useAll: state.useAll,
        useAllOne: state.useAllOne,
        userForm: state.userForm,
        password: state.password,
        conPass: state.conPass,
        email: state.email,
        address: state.address,
        genders: state.genders,
        coinname: state.coinname,
        sold: state.sold,
        authUseAll,
        authLoginEmail,
        authLoginPass,
        authLoginConPass,
        authLoginGender,
        authLoginAddress,
        authLoginStart,
        authLoginSuccess,
        authLoginFailure,
        authLoginCoinName,
        authLoginSold,
        authUseAllOne,
        dispatch,
     }}>
      {props.children}
    </AuthContext.Provider >
  )
}
export default AuthState