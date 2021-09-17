import axios from 'axios'
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./UserType"

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}
export const fetchSuccess = (users) => {
    return {
        type: FETCH_SUCCESS,
        payload: users
    }
}
export const fetchfailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchRequest)
        axios.get('https://jsonplaceholder.typicode.com/users').then(responce => {
            const users = responce.data
            dispatch(fetchSuccess(users))
        }).catch(error => {
            const errormsg = error.message
            dispatch(fetchfailure(errormsg))
        })
    }
}