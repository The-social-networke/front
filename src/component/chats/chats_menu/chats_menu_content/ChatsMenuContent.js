import React from 'react';
import {
    ChatBox,
    ChatBoxAvatar, ChatBoxExtra,
    ChatBoxText,
    ChatBoxTextChatName,
    ChatBoxTextLastMessageText,
    ListChatsContent, ListChatsContentTitle
} from "../../Chats.styles";
import { setSelectedChat } from "../../../../redux/slice/chatSlice";
import { Link } from "react-router-dom";
import noAvatarImg from "../../../../image/noImage.svg";
import getDateForShow from "../../../util/getDateForShow";

let ChatsMenuContent = ({chatState, dispatch, text}) => {
    let isChatFound = false;

    let content = chatState.chats.map(chat => {
        if (text !== '') {
            if (!(chat.name.toLowerCase().includes(text.toLowerCase())
                || chat.surname.toLowerCase().includes(text.toLowerCase()))) {
                return <></>;
            }
        }
        isChatFound = true;
        let changeSelectedChat = () => {
            dispatch(setSelectedChat(chat.chatId));
        }
        let isSelected = chatState.selectedChat.chatId === chat.chatId;
        if (chat.text != null) {
            return (
                <Link
                    key={chat.chatId}
                    to={'/chat/' + chat.chatId}
                    onClick={changeSelectedChat}>
                    <ChatBox selected={isSelected}>
                        <ChatBoxAvatar backgroundImg={chat.avatar ? "http://localhost:8081/avatars/" + chat.avatar : noAvatarImg}/>
                        <ChatBoxText>
                            <ChatBoxTextChatName selected={isSelected}>
                                {`${chat.name} ${chat.surname}`}
                            </ChatBoxTextChatName>
                            <ChatBoxTextLastMessageText selected={isSelected}>
                                {chat.text}
                            </ChatBoxTextLastMessageText>
                        </ChatBoxText>
                        <ChatBoxExtra selected={isSelected}>
                            {
                                `${getDateForShow(chat.sentAt[3])}:${getDateForShow(chat.sentAt[4])}`
                            }
                        </ChatBoxExtra>
                    </ChatBox>
                </Link>
            )
        }
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
            { content }
        </ListChatsContent>
    )
}

export default ChatsMenuContent;