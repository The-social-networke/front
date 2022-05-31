import React, {useEffect, useLayoutEffect, useState} from 'react';
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
    ListChatsContentTitle,
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
import { findChat, findChats, setSelectedChat } from "../../redux/slice/chatSlice";
import { useDispatch, useSelector } from "react-redux";
// Components
import Chat from "./chat/Chat";
import FindChatsInputContainer from "./chats_menu/find_chats_input_container/FindChatsInputContainer";
import ChatsMenuContent from "./chats_menu/chats_menu_content/ChatsMenuContent";
// Other
import getDateForShow from "../util/getDateForShow";

const Chats = () => {
    const chatUrlId = useParams();
    const dispatch = useDispatch();
    const chatState = useSelector(state => state.chat);

    useLayoutEffect(() => {
        dispatch(findChats())
            .then(() => {
                if (chatUrlId['*'] !== '') {
                    dispatch(findChat(chatUrlId['*']))
                    dispatch(setSelectedChat(parseInt(chatUrlId['*'])));
                }
            });
    }, [dispatch, chatUrlId])

    // useEffect(() => {
    //     if (chatUrlId['*'] !== '') {
    //         dispatch(findChat(chatUrlId['*']))
    //         dispatch(setSelectedChat(parseInt(chatUrlId['*'])));
    //     }
    // }, [chatUrlId]);

    //find chants mode
    const [isFocus, setFocus] = useState(false);
    const [text, setText] = useState('');

    return (
        <Wrapper id='chats'>
            <ListChatsContainer>
                <ListChatsHeader>
                    <FindChatsInputContainer
                        isFocus={isFocus}
                        setFocus={setFocus}
                        text={text}
                        setText={setText}
                    />
                </ListChatsHeader>
                <ChatsMenuContent
                    chatState={chatState}
                    dispatch={dispatch}
                    text={text}
                />
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