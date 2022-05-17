const BASE_URL = "http://198.211.110.141:8002";
const GET_CHATS = `/chats`;
const GET_CHAT = `/chats/get-chat`;
const MESSAGES = `/chats/all-messages`;
var i = 10;
const apiSettings = {
    findChat: async (anotherUserId, jwtToken) => {
        const endpoint = BASE_URL + GET_CHAT + "";
        return await (await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ userId: `${anotherUserId}` })
        })).json();
        // const result = {
        //     "chatRoomId": "6235cfb9-cb8a-4499-8e59-daea3209badc",
        //     "anotherUserId": "44002c89-4e82-4c97-bb1e-802aac16a868",
        //     "userId": null,
        //     "messageId": null,
        //     "text": null,
        //     "sentAt": null,
        //     "amountOfNotReadMessages": 0,
        //     "userInfo": {
        //         "id": 5,
        //         "nickname": null,
        //         "name": null,
        //         "surname": null,
        //         "description": null,
        //         "avatarId": null,
        //         "avatarUrl": null,
        //         "website": null,
        //         "telegram": null,
        //         "whatsapp": null,
        //         "phone": null
        //     }
        // }
        // return result;
    },
    findChats: async (jwtToken) => {
        const endpoint = BASE_URL + GET_CHATS + "";
        return await (await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            }
        })).json();
        // const result = [
        //     {
        //         "chatRoomId": "53d327cc-66b1-4ab5-ba26-8873d671b34a",
        //         "anotherUserId": "07f2fbe7-47ae-4d8e-94bf-05d7763f20c0",
        //         "userId": "07f2fbe7-47ae-4d8e-94bf-05d7763f20c0",
        //         "messageId": "930d9575-c75d-4524-b662-40ee535c3223",
        //         "text": "some massage2",
        //         "sentAt": "8d196f3c-877a-445e-9c9a-4723493ba088",
        //         "amountOfNotReadMessages": 0,
        //         "userInfo": null
        //     },
        //     {
        //         "chatRoomId": "54257819-5203-4293-a17f-474a71b3610e",
        //         "anotherUserId": "cb698067-7a5d-4e9c-9bcf-836d449e4741",
        //         "userId": null,
        //         "messageId": null,
        //         "text": null,
        //         "sentAt": null,
        //         "amountOfNotReadMessages": 0,
        //         "userInfo": null
        //     },
        // ]
        // return result;
    },
    // findMessages: async (chatId, jwtToken) => {
    //     // const endpoint = BASE_URL + MESSAGES + `?chatId=${chatId}&page=0&size=100`;
    //     // const result = await (await fetch(endpoint, {
    //     //     method: 'GET',
    //     //     headers: {
    //     //         'Content-Type': 'application/json',
    //     //         'Authorization': `Bearer ${jwtToken}`,
    //     //     }
    //     // })).json();
    //     //return result.content;
    //     let result = [];
    //     if (chatId === '53d327cc-66b1-4ab5-ba26-8873d671b34a') {
    //         result = [
    //             {
    //                 id:"8d196f3c-877a-445e-9c9a-4723493ba088",
    //                 userId:"027233f8-8a69-4baa-af74-931ddf611d1a",
    //                 text:"some massage2",
    //                 photo:null,
    //                 forwardId:null,
    //                 forwardType:null,
    //                 sentAt:"2022-04-25T13:03:04.534665",
    //                 messageReads: [],
    //                 messageLikes: [],
    //                 messageStatus: null,
    //                 updated: false
    //             },
    //             {
    //                 id:"8d196f3c-877a-445e-9c9a-4723493ba099",
    //                 userId:"027233f8-8a69-4baa-af74-931ddf611d1a",
    //                 text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    //                 photo:null,
    //                 forwardId:null,
    //                 forwardType:null,
    //                 sentAt:"2022-04-26T09:03:04.534665",
    //                 messageReads: ["07f2fbe7-47ae-4d8e-94bf-05d7763f20c0"],
    //                 messageLikes: [],
    //                 messageStatus: null,
    //                 updated: false
    //             },
    //             {
    //                 id:"8d196f3c-877a-445e-9c9a-4723493ba076",
    //                 userId:"07f2fbe7-47ae-4d8e-94bf-05d7763f20c0",
    //                 text:"last last message",
    //                 photo:null,
    //                 forwardId:null,
    //                 forwardType:null,
    //                 sentAt:"2022-04-27T10:03:04.534665",
    //                 messageReads: ["027233f8-8a69-4baa-af74-931ddf611d1a"],
    //                 messageLikes: [],
    //                 messageStatus: null,
    //                 updated: true
    //             },
    //             {
    //                 id:"8d196f3c-877a-445e-9c9a-4723493ba090",
    //                 userId:"07f2fbe7-47ae-4d8e-94bf-05d7763f20c0",
    //                 text:"last message2",
    //                 photo:null,
    //                 forwardId:null,
    //                 forwardType:null,
    //                 sentAt:"2022-04-27T10:03:04.534665",
    //                 messageReads: ["07f2fbe7-47ae-4d8e-94bf-05d7763f20c0"],
    //                 messageLikes: [],
    //                 messageStatus: null,
    //                 updated: false
    //             },
    //             {
    //                 id: 'dd5c1a20-5ebe-44f2-b6b4-6077c6a31a97',
    //                 userId: '07f2fbe7-47ae-4d8e-94bf-05d7763f20c0',
    //                 text: 'last message',
    //                 photo: null,
    //                 forwardId: null,
    //                 forwardType: null,
    //                 sentAt: '2022-04-27T09:55:38.613613',
    //                 messageReads: [],
    //                 messageLikes: [],
    //                 messageStatus: null,
    //                 updated: true
    //             },
    //             {
    //                 id: 'cce0988e-37c9-4c67-844d-3063b33d662b',
    //                 userId: '027233f8-8a69-4baa-af74-931ddf611d1a',
    //                 text: 'hellp',
    //                 photo: null,
    //                 forwardId: null,
    //                 forwardType: null,
    //                 sentAt: '2022-04-27T09:55:27.992762',
    //                 messageReads: [],
    //                 messageLikes: [],
    //                 messageStatus: null,
    //                 updated: true
    //             }
    //         ]
    //     }
    //     return result;
    // },
    sendMessage: async (text, userId) => {
        return {
            id: "8d196f3c-877a-445e-9c9a-4723493ba0" + i,
            userId: userId,
            text: text,
            photo: null,
            forwardId: null,
            forwardType: null,
            sentAt: `2022-05-01T${i++}:03:04.534665`,
            messageReads: [],
            messageLikes: [],
            messageStatus: null,
            updated: false
        }
    },
    updateMessage: async (messageId, text, messages) => {
        let message;
        messages.forEach((m, index) => {
            if(m.id === messageId) {
                message = {...messages[index]};
            }
        });
        message.updated = true;
        message.text = text;
        return message;
    },
    deleteMessage: async (messageId, messages) => {
        let message;
        messages.forEach(m => {
            console.log(m)
            if(m.id === messageId) {
                message = {...m};
            }
        });
        console.log(messageId)
        console.log(messages)
        console.log("as")
        console.log(message)
        return message;
    }
}

export default apiSettings;