import React, {useEffect, useLayoutEffect} from 'react';
// Styles
import {
    Wrapper,
    ChatBox,
    ChatBoxAvatar,
    ChatBoxText,
    ChatBoxTextChatName,
    ChatBoxTextLastMessageText,
    ChatBoxExtra,
    ListChatsContainer,
    ListChatsHeader,
    ListChatsContent,
    ChatContainer,
    ChatContainerBackground,
    ChatContainerBackgroundImg
} from './Chats.styles';
// Images
import backgroundChatImg from '../../image/backgroundChat.png';
import noAvatarImg from '../../image/noImage.svg';
// Routing
import { Link, useParams } from "react-router-dom";
// Redux
import {findChat, findChats, setSelectedChat} from "../../redux/slice/chatSlice";
import { useDispatch, useSelector } from "react-redux";
// Components
import Chat from "./chat/Chat";

const Chats = () => {
    const chatUrlId = useParams();
    const dispatch = useDispatch();
    const chatState = useSelector(state => state.chat);

    useLayoutEffect(() => {
        console.log('fetch')
        dispatch(findChats());
    }, [dispatch])

    useLayoutEffect(() => {
        if (chatUrlId['*'] !== '') {
            dispatch(findChat(chatUrlId['*']))
            dispatch(setSelectedChat(parseInt(chatUrlId['*'])));
        }
    }, [chatUrlId]);

    return (
        <Wrapper id='chats'>
            <ListChatsContainer>
                <ListChatsHeader>
                    Search chats
                </ListChatsHeader>
                <ListChatsContent>
                    {
                        chatState.chats.map(chat => {
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
                                            <ChatBoxAvatar backgroundImg={noAvatarImg}/>
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
                                                    `${chat.sentAt[3]}:${chat.sentAt[4]}`
                                                }
                                            </ChatBoxExtra>
                                        </ChatBox>
                                    </Link>
                                )
                            }
                        })
                    }
                </ListChatsContent>
            </ListChatsContainer>
            <ChatContainer>
                {chatUrlId['*'] !== '' && <Chat messages={chatState.chat.messages}/>}
            </ChatContainer>
            <ChatContainerBackground id='background_chat'>
                <ChatContainerBackgroundImg backgroundImg={backgroundChatImg}/>
            </ChatContainerBackground>
        </Wrapper>
    );
}

export default Chats;