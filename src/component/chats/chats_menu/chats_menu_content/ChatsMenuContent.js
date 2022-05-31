import React from 'react';
// Styles
import {
    ChatBox,
    ChatBoxAvatar, ChatBoxExtra,
    ChatBoxText,
    ChatBoxTextChatName,
    ChatBoxTextLastMessageText,
    ListChatsContent, ListChatsContentTitle
} from "../../Chats.styles";
//Redux
import { setSelectedChat } from "../../../../redux/slice/chatSlice";
// Router
import { Link } from "react-router-dom";
// Image
import noAvatarImg from "../../../../image/noImage.svg";
// Other
// import getDateForShow from "../../../util/getDateForShow";
import timeUtil from "../../../util/timeUtil";

let ChatsMenuContent = ({chatState, dispatch, text, searchUsers}) => {
    let isChatFound = false;
    let isUserFound = false;

    let foundChats = chatState.chats.map(chat => {
        if (text !== '') {
            if (!(chat.name.toLowerCase().includes(text.toLowerCase())
                || chat.surname.toLowerCase().includes(text.toLowerCase()))) {
                return <></>;
            }
        }
        isChatFound = true;
        let changeSelectedChat = () => {
            dispatch(setSelectedChat(chat.anotherUserId));
        }
        let isSelected = chatState.selectedChat.anotherUserId === chat.anotherUserId;
        if (chat.text != null) {
            return (
                <Link
                    key={chat.anotherUserId + '_found'}
                    to={'/chat/' + chat.anotherUserId}
                    onClick={changeSelectedChat}>
                    <ChatBox selected={isSelected}>
                        <ChatBoxAvatar backgroundImg={chat.avatar ? "http://localhost:8081/avatars/" + chat.avatar : noAvatarImg}/>
                        <ChatBoxText>
                            <ChatBoxTextChatName selected={isSelected}>
                                { `${chat.name} ${chat.surname}` }
                            </ChatBoxTextChatName>
                            <ChatBoxTextLastMessageText selected={isSelected}>
                                { chat.text }
                            </ChatBoxTextLastMessageText>
                        </ChatBoxText>
                        <ChatBoxExtra selected={isSelected}>
                            {
                                `${timeUtil.toPrintDateTime(chat.sentAt[0], chat.sentAt[1], chat.sentAt[2], chat.sentAt[3], chat.sentAt[4])}`
                            }
                        </ChatBoxExtra>
                    </ChatBox>
                </Link>
            )
        }
    });

    let foundUsers = searchUsers.map(user => {
        if (text === '') {
            return <></>;
        }
        isUserFound = true;
        let changeSelectedChat = () => {
            dispatch(setSelectedChat(user.anotherUserId));
        }
        let isSelected = chatState.selectedChat.anotherUserId === user.id;
        return (
            <Link
                key={user.id + '_user'}
                to={'/chat/' + user.id}
                onClick={changeSelectedChat}>
                <ChatBox selected={isSelected}>
                    <ChatBoxAvatar backgroundImg={user.avatar ? "http://localhost:8081/avatars/" + user.avatar : noAvatarImg}/>
                    <ChatBoxText>
                        <ChatBoxTextChatName selected={isSelected}>
                            {`${user.name} ${user.surname}`}
                        </ChatBoxTextChatName>
                        <ChatBoxTextLastMessageText selected={isSelected}>
                            {user.email}
                        </ChatBoxTextLastMessageText>
                    </ChatBoxText>
                    <ChatBoxExtra selected={isSelected}>
                        { user.sex }
                    </ChatBoxExtra>
                </ChatBox>
            </Link>
        )
    });


    return (
        <ListChatsContent>
            {
                isChatFound && text !== '' ?
                <ListChatsContentTitle>
                    Found chats
                </ListChatsContentTitle>
                    : ''
            }
            { foundChats }
            {
                isUserFound && text !== '' ?
                <ListChatsContentTitle>
                    Found users
                </ListChatsContentTitle>
                : ''
            }
            { foundUsers }
        </ListChatsContent>
    )
}

export default ChatsMenuContent;