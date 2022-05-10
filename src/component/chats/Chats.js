import React, {useEffect} from 'react';
// Styles
import { Wrapper, ChatBox, ListChatsContainer, ListChatsHeader, ListChatsContent, ccc } from './Chats.styles';
// Routing
import { Link, useParams } from "react-router-dom";
// Redux
import { findChats, findMessages } from "../../redux/slice/chatSlice";
import { useDispatch, useSelector } from "react-redux";
// Components
import Chat from "./chat/Chat";

const Chats = () => {
    const chatUrlId = useParams();
    const dispatch = useDispatch();
    const chats = useSelector(state => state.chat.chats);
    const messages = useSelector(state => state.chat.messages);

    useEffect(() => {
        console.log('fetch')
        dispatch(findChats());
    }, [dispatch])

    useEffect(() => {
        dispatch(findMessages(chatUrlId))
    }, [chatUrlId]);

    return (
        <Wrapper>
            <ListChatsContainer>
                <ListChatsHeader>
                    Search chats
                </ListChatsHeader>
                <ListChatsContent>
                    {
                        chats.map(chat => {
                            return (
                                <Link key={chat.chatRoomId} to={'/chat/' + chat.chatRoomId}>
                                    <ChatBox>{chat.chatRoomId}</ChatBox>
                                </Link>
                            )
                        })
                    }
                </ListChatsContent>
            </ListChatsContainer>
            {chatUrlId['*'] !== '' && <Chat messages={messages}/>}
        </Wrapper>
    );
}

export default Chats;