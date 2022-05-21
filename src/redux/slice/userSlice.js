import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const nameOfSlice = 'userSlice';

const userSlice = createSlice({
    name: nameOfSlice,
    initialState: {
        jwtToken: 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJpZCI6MywiZXhwIjoxNjU0MjkwMDAwLCJlbWFpbCI6InZhZGltQGdtYWlsLmNvbSIsImVuYWJsZWQiOnRydWV9.g2bokvWgj6gvij9uXWhc3QT2FrK15W-o-sgIhGEeLmtFR-4fGjxVbmDdPsQ-lramo37t2OuWSRZr7X3kwPkMRg',
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
    },
    reducers: {
        setLogin: (state, action) => {
            const { jwtToken, userId } = action.payload;
            state.jwtToken = jwtToken;
            state.userId = userId;
        },
    },
});

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
