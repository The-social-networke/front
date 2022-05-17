import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const nameOfSlice = 'userSlice';

const userSlice = createSlice({
    name: nameOfSlice,
    initialState: {
        jwtToken: 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJpZCI6MywiZXhwIjoxNjU0MTE3MjAwLCJlbWFpbCI6InZhZGltQGdtYWlsLmNvbSIsImVuYWJsZWQiOnRydWV9.eKjw-ZSxJIUFp3cCJjD3Wn08NTRKqgex_PDnMKs3WBit0JGVdEEELM2Ar11LEosfeRs9SF_7mML6sdyQ8AbtKw',
        //'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJpZCI6MjEsImV4cCI6MTY1Mzg1ODAwMCwiZW1haWwiOiJ2YWR5bUBnbWFpbC5jb20iLCJlbmFibGVkIjp0cnVlfQ.nEaZY_hTlr0kL7sxJfDjevVYUjn9cdoJzXFfFP69z91zEaeK7KHJ-5lSAYOvHvmWQogen7gnYgnkilniAdeC0g',
        user: {
            userId: 3//'027233f8-8a69-4baa-af74-931ddf611d1a'
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
