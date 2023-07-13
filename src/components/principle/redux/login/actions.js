import axios from 'axios';

import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
} from '../../../../redux/actions';

export const loginUserActionError = (message) => async (dispatch) => {
    dispatch({
        type: LOGIN_USER_ERROR,
        payload: { message }
    });
};

export const loginUserActionSuccess = (user) => async (dispatch) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

export const loginUserAction = (data) => async (dispatch) => {
    try {
        const loginData = {
            ...data,
        };
        dispatch({ type: LOGIN_USER });
        // const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        // const result = await axios
        //     .post(`${URL.adminLogin}`, loginData, axiosConfig)
        //     .then((user) => user)
        //     .catch((err) => {
        //         return err.response;
        //     });
        // if (result && result.status === 200) {
        //     const item = result.data;
        //     dispatch(loginUserActionSuccess(result));

        // } else {
        //     dispatch(loginUserActionError(result.statusText));
        // }
    } catch (error) {
        dispatch(loginUserActionError({}));
    }
};
