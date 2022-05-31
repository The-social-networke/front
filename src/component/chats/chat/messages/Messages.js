import React, {useEffect, useRef} from 'react';
// Styles
import {
    Avatar,
    Content,
    DataContainer,
    DayMessageGroupContainer,
    DayMessageGroupList,
    MessageGroup,
    MessageList,
    Wrapper
} from './Messages.styles';
// Images
import noAvatar from '../../../../image/noImage.svg';
// Redux
import {useSelector} from "react-redux";
// Components
import Message from './message/Message';
// Other
import getDateForShow from "../../../util/getDateForShow";


const Messages = ({ messages }) => {
    const meId = useSelector(state => state.user.user.id);
    const users = useSelector(state => state.chat.chat.users);

    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    if(!messages || messages.length === 0) {
        return (
            <Wrapper>
                <Content>
                </Content>
            </Wrapper>
        )
    }

    let anotherUser = null;
    users.forEach(u => {
        if (u.id !== meId) {
            anotherUser = u;
        }
    })

    let dayGroupMessages = [];
    let tempDayMessagesGroup = {
        year: '',
        date: '',
        groups: []
    }
    let tempMessagesGroup = {
        userId: '',
        messages: [],
    }

    let addGroupMessagesToMonthGroupMessages = () => {
        if (tempMessagesGroup.messages !== []) {
            addGroupToGroupMessages();
        }
        const date = tempDayMessagesGroup.date;
        const year = tempDayMessagesGroup.year;
        dayGroupMessages.push(
            <DayMessageGroupContainer key={`day_messages_group_${year}:${date}`} id={`day_messages_group_${year}:${date}`}>
                <DataContainer>{ date }</DataContainer>
                <DayMessageGroupList>
                    {tempDayMessagesGroup.groups}
                </DayMessageGroupList>
            </DayMessageGroupContainer>
        )
        tempDayMessagesGroup.groups = [];
        tempMessagesGroup.userId = '';
        tempMessagesGroup.messages = [];
    }

    let indexGroup = 0;
    let addGroupToGroupMessages = () => {
        const isMe = tempMessagesGroup.userId !== meId;
        tempDayMessagesGroup.groups.push(
            <MessageGroup key={`messages_group_${indexGroup++}`}>
                { tempMessagesGroup.userId !== meId
                    ? <MessageList>
                        { tempMessagesGroup.messages.map(m => (<Message
                            key={m.id}
                            id={m.id}
                            text={m.text}
                            sentAt={m.sentAt}
                            isEdited={m.updated}
                            isMe={false} />))
                        }
                    </MessageList>
                    : <MessageList me>
                        { tempMessagesGroup.messages.map(m => (<Message
                            key={m.id}
                            id={m.id}
                            text={m.text}
                            sentAt={m.sentAt}
                            isEdited={m.updated}
                            isRead={m.readMessages.length !== 0}
                            isMe={true} />)) }
                    </MessageList>
                }
                { isMe && <Avatar url={ anotherUser.avatar ? "http://localhost:8081/avatars/" + anotherUser.avatar : noAvatar }/>}
            </MessageGroup>
        )
        tempMessagesGroup.messages = [];
    }
    if (messages.length !== 0) {
        tempDayMessagesGroup.date = `${getDateForShow(messages[0].sentAt[1])}:${getDateForShow(messages[0].sentAt[2])}`;
        tempDayMessagesGroup.year = messages[0].sentAt[0];
    }
    for (let i = 0; i <= messages.length; i++) {
        if (tempDayMessagesGroup.date && i < messages.length) {
            if (tempDayMessagesGroup.date !== `${getDateForShow(messages[i].sentAt[1])}:${getDateForShow(messages[i].sentAt[2])}`) {
                addGroupMessagesToMonthGroupMessages();
            }
            tempDayMessagesGroup.date = `${getDateForShow(messages[i].sentAt[1])}:${getDateForShow(messages[i].sentAt[2])}`;
            tempDayMessagesGroup.year = messages[i].sentAt[0];
        }
        if (i < messages.length) {
            if(tempMessagesGroup.userId && tempMessagesGroup.userId !== messages[i].userId) {
                addGroupToGroupMessages();
            }
            tempMessagesGroup.messages.push(messages[i]);
            tempMessagesGroup.userId = messages[i].userId;
        }
        else {
            if (tempDayMessagesGroup.date === '') {
                tempDayMessagesGroup.date = `${getDateForShow(messages[i - 1].sentAt[1])}:${getDateForShow(messages[i - 1].sentAt[2])}`;
                tempDayMessagesGroup.year = messages[i-1].sentAt[0];
            }
            addGroupMessagesToMonthGroupMessages();
        }
    }
    return (
        <Wrapper>
            <Content>
                { dayGroupMessages }
                <div ref={messagesEndRef} />
            </Content>
        </Wrapper>
    )
};

export default Messages;