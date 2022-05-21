import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from "../../API";

const nameOfSlice = 'chatSlice';

export const findChat = createAsyncThunk(
    'fetchChat',
    async (userId, { getState, rejectWithValue }) => {
        try {
            const state = getState().user;
            return await API.findChat(userId, state.jwtToken);
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

export const sendMessage = createAsyncThunk(
    'sendMessage',
    /**
     * @param {string} chatId
     * @param {string} text - The text for new message
     * @param getState
     * @param rejectWithValue
     */
    async ({ text }, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            return await API.sendMessage(state.chat.chat.id, text.trim(), state.user.jwtToken);
        } catch (ex) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
);

export const updateMessage = createAsyncThunk(
    'updateMessage',
    async (text, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            return await API.updateMessage(state.chat.editMode.messageId, text.trim(), state.user.jwtToken);
        } catch (ex) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
);

export const deleteMessage = createAsyncThunk(
    'deleteMessage',
    async ({ messageId }, { getState, rejectWithValue }) => {
        try {
            const stateChat = getState();
            return await API.deleteMessage(messageId, stateChat.user.jwtToken);
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
                "chatId": 2,
                "anotherUserId": 2,
                "userId": 3,
                "name": "name",
                "surname": "surname",
                "messageId": 7,
                "text": "А ти якк?",
                "sentAt": [
                    2022,
                    5,
                    9,
                    17,
                    19,
                    0,
                    594468000
                ],
                "amountNotReadMessages": 0
            }
        ],
        chat: {
            "id": 2,
            "users": [
                {
                    "id": 3,
                    "avatar": null,
                    "name": "Вадім",
                    "surname": "Скуратовський",
                    "username": "vadim",
                    "email": "vadim@gmail.com",
                    "phone": "380958827299",
                    "sex": "MALE"
                },
                {
                    "id": 2,
                    "avatar": null,
                    "name": "Богдан",
                    "surname": "Ткачук",
                    "username": "pro100user",
                    "email": "bogdan@gmail.com",
                    "phone": "380972553991",
                    "sex": "MALE"
                }
            ],
            "messages": [
                {
                    "id": 2,
                    "userId": 3,
                    "chatId": 2,
                    "text": "Привіт",
                    "photo": null,
                    "forwardId": null,
                    "sentAt": [
                        2022,
                        5,
                        9,
                        17,
                        17,
                        0,
                        594468000
                    ],
                    "readMessages": [
                        2
                    ],
                    "likedMessages": [],
                    "updated": false
                },
                {
                    "id": 7,
                    "userId": 3,
                    "chatId": 2,
                    "text": "А ти як?",
                    "photo": null,
                    "forwardId": 3,
                    "sentAt": [
                        2022,
                        5,
                        9,
                        17,
                        19,
                        0,
                        594468000
                    ],
                    "readMessages": [],
                    "likedMessages": [],
                    "updated": false
                },
                {
                    "id": 6,
                    "userId": 3,
                    "chatId": 2,
                    "text": "Все добре",
                    "photo": null,
                    "forwardId": 4,
                    "sentAt": [
                        2022,
                        5,
                        9,
                        17,
                        18,
                        30,
                        594468000
                    ],
                    "readMessages": [],
                    "likedMessages": [],
                    "updated": false
                },
                {
                    "id": 3,
                    "userId": 2,
                    "chatId": 2,
                    "text": "Шо робиш?",
                    "photo": null,
                    "forwardId": null,
                    "sentAt": [
                        2022,
                        5,
                        9,
                        17,
                        17,
                        30,
                        594468000
                    ],
                    "readMessages": [
                        3
                    ],
                    "likedMessages": [],
                    "updated": false
                },
                {
                    "id": 4,
                    "userId": 2,
                    "chatId": 2,
                    "text": "Як справи?",
                    "photo": null,
                    "forwardId": null,
                    "sentAt": [
                        2022,
                        5,
                        9,
                        17,
                        18,
                        0,
                        594468000
                    ],
                    "readMessages": [
                        3
                    ],
                    "likedMessages": [],
                    "updated": false
                },
                {
                    "id": 1,
                    "userId": 2,
                    "chatId": 2,
                    "text": "Привіт",
                    "photo": null,
                    "forwardId": null,
                    "sentAt": [
                        2022,
                        5,
                        9,
                        17,
                        16,
                        30,
                        594468000
                    ],
                    "readMessages": [
                        3
                    ],
                    "likedMessages": [],
                    "updated": false
                },
                {
                    "id": 5,
                    "userId": 3,
                    "chatId": 2,
                    "text": "Пишу проект",
                    "photo": null,
                    "forwardId": 3,
                    "sentAt": [
                        2022,
                        5,
                        9,
                        17,
                        18,
                        30,
                        594468000
                    ],
                    "readMessages": [
                        2
                    ],
                    "likedMessages": [
                        2
                    ],
                    "updated": false
                }
            ],
        },
        selectedChat: {
            chatRoomId: ""
        },
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
            state.editMode.isEdit = payload.isEdit;
            state.editMode.oldText = payload.text;
            state.editMode.messageId = payload.messageId;
        },
        setSelectedChat: (state, { payload }) => {
            state.selectedChat.chatId = payload;
        }
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
            state.chat.messages.push(payload);
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
            state.chat.messages.forEach((m, index) => {
                if(m.id === payload.id) {
                    state.chat.messages[index] = payload;
                }
            });
            state.isLoadingChat = false;
        },
        [updateMessage.rejected]: (state, { payload }) => {
            console.log(payload)
            state.error = payload;
            state.isLoadingChat = false;
        },

        [deleteMessage.pending]: (state) => {
            state.isLoadingChat = true;
        },
        [deleteMessage.fulfilled]: (state, { payload }) => {
            let index = -1;
            state.chat.messages.forEach((m, i) => {
                if(m.id === payload.id) {
                    index = i;
                }
            });
            state.chat.messages.splice(index, 1);
            state.isLoadingChat = false;
        },
        [deleteMessage.rejected]: (state, { payload }) => {
            console.log(payload)
            state.error = payload;
            state.isLoadingChat = false;
        }
    }
});

export const { setEditMode, setSelectedChat } = chatSlice.actions;
export default chatSlice.reducer;
