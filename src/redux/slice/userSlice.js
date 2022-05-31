import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from "../../database/AuthAPI";
import {findChat} from "./chatSlice";

const nameOfSlice = 'userSlice';

export const login = createAsyncThunk(
    'login',
    async (userCreate, { rejectWithValue }) => {
        try {
            return await API.login(userCreate);
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
            console.log(jwtToken);
            return await API.getUser(jwtToken);
        } catch (ex) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
);

const userSlice = createSlice({
    name: nameOfSlice,
    initialState: {
        jwtToken: '',
        user: {},
        isLoadingLogin: false,
        error: ''
    },
    reducers: {
        setLogin: (state, action) => {
            const { jwtToken, user } = action.payload;
            state.jwtToken = jwtToken;
            state.user = user;
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
