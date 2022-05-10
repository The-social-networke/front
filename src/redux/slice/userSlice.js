import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const nameOfSlice = 'userSlice';

const userSlice = createSlice({
    name: nameOfSlice,
    initialState: {
        jwtToken: '',
        user: {
            userId: '027233f8-8a69-4baa-af74-931ddf611d1a'
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
