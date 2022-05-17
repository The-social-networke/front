import React, {useEffect} from 'react';
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
import {findChats, findMessages, setSelectedChat} from "../../redux/slice/chatSlice";
import { useDispatch, useSelector } from "react-redux";
// Components
import Chat from "./chat/Chat";

const Chats = () => {
    const chatUrlId = useParams();
    const dispatch = useDispatch();
    const chatState = useSelector(state => state.chat);
    const messages = useSelector(state => state.chat.messages);

    useEffect(() => {
        console.log('fetch')
        dispatch(findChats());
    }, [dispatch])

    useEffect(() => {
        dispatch(findMessages(chatUrlId))
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
                                dispatch(setSelectedChat(chat.chatRoomId));
                            }
                            let isSelected = chatState.selectedChat.chatRoomId === chat.chatRoomId;

                            return (
                                <Link
                                    key={chat.chatRoomId}
                                    to={'/chat/' + chat.chatRoomId}
                                    onClick={changeSelectedChat}>
                                    <ChatBox selected={isSelected}>
                                        <ChatBoxAvatar backgroundImg={noAvatarImg}/>
                                        <ChatBoxText>
                                            <ChatBoxTextChatName selected={isSelected}>
                                                chat name chat name chat name
                                            </ChatBoxTextChatName>
                                            <ChatBoxTextLastMessageText selected={isSelected}>
                                                Hello, john, it's me, mario
                                            </ChatBoxTextLastMessageText>
                                        </ChatBoxText>
                                        <ChatBoxExtra selected={isSelected}>
                                            20:10
                                        </ChatBoxExtra>
                                    </ChatBox>
                                </Link>
                            )
                        })
                    }
                </ListChatsContent>
            </ListChatsContainer>
            <ChatContainer>
                {chatUrlId['*'] !== '' && <Chat messages={messages}/>}
            </ChatContainer>
            <ChatContainerBackground id='background_chat'>
                <ChatContainerBackgroundImg backgroundImg={backgroundChatImg}/>
            </ChatContainerBackground>
        </Wrapper>
    );
}

export default Chats;