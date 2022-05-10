import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from "../../API";

const nameOfSlice = 'chatSlice';

export const findChat = createAsyncThunk(
    'fetchChat',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState().user.user;
            return await API.findChat(state.userId, state.jwtToken);
        } catch (ex) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
);

export const findMessages = createAsyncThunk(
    'findMessage',
    async (chatId, { getState, rejectWithValue }) => {
        try {
            const state = getState().chat;
            return await API.findMessages(chatId['*'], state.jwtToken);
        } catch (ex) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
);

export const sendMessage = createAsyncThunk(
    'sendMessage',
    /**
     * @param {string} text - The text for new message
     * @param getState
     * @param rejectWithValue
     */
    async (text, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            return await API.sendMessage(text.trim(), state.user.userId);
        } catch (ex) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
);

export const updateMessage = createAsyncThunk(
    'updateMessage',
    async (text, { getState, rejectWithValue }) => {
        try {
            const stateChat = getState().chat;
            return await API.updateMessage(stateChat.editMode.messageId, text.trim(), stateChat.messages);
        } catch (ex) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
);

export const findChats = createAsyncThunk(
     'findChats',
    async (_, { getState, rejectWithValue }) => {
        try {
            console.log('find')
            const state = getState().user;
            return await API.findChats(state.jwtToken);
        } catch (ex) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
);

const chatSlice = createSlice({
    name: nameOfSlice,
    initialState: {
        chats: [
            {
                chatRoomId: "53d327cc-66b1-4ab5-ba26-8873d671b34a",
                anotherUserId: "07f2fbe7-47ae-4d8e-94bf-05d7763f20c0",
                userId: "07f2fbe7-47ae-4d8e-94bf-05d7763f20c0",
                messageId: "930d9575-c75d-4524-b662-40ee535c3223",
                text: "some massage2",
                sentAt: "8d196f3c-877a-445e-9c9a-4723493ba088",
                amountOfNotReadMessages: 0,
                userInfo: null
            }
        ],
        messages: [],
        editMode: {
            isEdit: false,
            oldText: '',
            messageId: ''
        },
        isLoadingChat: false,
        error: ''
    },
    reducers: {
        setEditMode: (state, { payload }) => {
            state.editMode.isEdit = true;
            state.editMode.oldText = payload.text;
            state.editMode.messageId = payload.messageId;
        },
    },
    extraReducers: {
        [findChat.pending]: (state) => {
            state.isLoadingChat = true;
        },
        [findChat.fulfilled]: (state, { payload }) => {
            state.chat = payload;
            state.isLoadingChat = false;
        },
        [findChat.rejected]: (state, { payload }) => {
            state.error = payload;
            state.isLoadingChat = false;
        },

        [findMessages.pending]: (state) => {
            state.isLoadingChat = true;
        },
        [findMessages.fulfilled]: (state, { payload }) => {
            state.messages = payload;
            state.isLoadingChat = false;
        },
        [findMessages.rejected]: (state, { payload }) => {
            state.error = payload;
            state.isLoadingChat = false;
        },

        [findChats.pending]: (state) => {
            state.isLoadingChat = true;
        },
        [findChats.fulfilled]: (state, { payload }) => {
            state.chats = payload;
            state.isLoadingChat = false;
        },
        [findChats.rejected]: (state, { payload }) => {
            state.error = payload;
            state.isLoadingChat = false;
        },

        [sendMessage.pending]: (state) => {
            state.isLoadingChat = true;
        },
        [sendMessage.fulfilled]: (state, { payload }) => {
            state.messages.push(payload);
            state.isLoadingChat = false;
        },
        [sendMessage.rejected]: (state, { payload }) => {
            state.error = payload;
            state.isLoadingChat = false;
        },

        [updateMessage.pending]: (state) => {
            state.isLoadingChat = true;
        },
        [updateMessage.fulfilled]: (state, { payload }) => {
            state.messages.forEach((m, index) => {
                if(m.id === payload.id) {
                    state.messages[index] = payload;
                }
            });
            state.isLoadingChat = false;
        },
        [updateMessage.rejected]: (state, { payload }) => {
            console.log(payload)
            state.error = payload;
            state.isLoadingChat = false;
        }
    }
});

export const { setEditMode } = chatSlice.actions;
export default chatSlice.reducer;
