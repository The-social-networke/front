import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from "../../API";
import {findChat} from "./chatSlice";

const nameOfSlice = 'userSlice';

export const login = createAsyncThunk(
    'login',
    async (userCreate, { rejectWithValue }) => {
        try {
            return await API.findChat(userCreate);
        } catch (ex) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
);

export const initUser = createAsyncThunk(
    'initUser',
    async (_, { getState, rejectWithValue }) => {
        try {
            let jwtToken = getState().user.jwtToken;
            //return await API.getUser(jwtToken);
            return null;
        } catch (ex) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
);

const userSlice = createSlice({
    name: nameOfSlice,
    initialState: {
        jwtToken: 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJpZCI6MywiZXhwIjoxNjU1MTU0MDAwLCJlbWFpbCI6InZhZGltQGdtYWlsLmNvbSIsImVuYWJsZWQiOnRydWV9.l-6qCkOOUgUHeHaHlBtxAvwnNW0C5Pamd6wqJJrGQqA_weN0dub0fyCVALVRatI3eid16aEZtbKKd0MkpJ1UfA',
        user: {
            "id": 3,
            "avatar": null,
            "name": "Вадім",
            "surname": "Скуратовський",
            "username": "vadim",
            "email": "vadim@gmail.com",
            "phone": "380958827299",
            "sex": "MALE"
        },
        isLoadingLogin: false,
        error: ''
    },
    reducers: {
        setLogin: (state, action) => {
            const { jwtToken, userId } = action.payload;
            state.jwtToken = jwtToken;
            state.userId = userId;
        },
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.isLoadingLogin = true;
        },
        [login.fulfilled]: (state, {payload}) => {
            state.jwtToken = payload;
            state.isLoadingLogin = false;
        },
        [login.rejected]: (state, {payload}) => {
            state.error = payload;
            state.isLoadingLogin = false;
        },

        [initUser.pending]: (state) => {
            state.isLoadingLogin = true;
        },
        [initUser.fulfilled]: (state, {payload}) => {
            state.user = payload;
            state.isLoadingLogin = false;
        },
        [initUser.rejected]: (state, {payload}) => {
            state.error = payload;
            state.isLoadingLogin = false;
        },
    }
    });

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
