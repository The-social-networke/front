import React, {useEffect, useRef} from 'react';
// Styles
import {
    Wrapper,
    Content,
    DayMessageGroupContainer,
    DayMessageGroupList,
    DataContainer,
    MessageGroup,
    MessageList,
    Avatar
} from './Messages.styles';
// Images
import noAvatar from '../../../../image/noImage.svg';
// Redux
import { useSelector } from "react-redux";
// Components
import Message from './message/Message';


const Messages = ({ messages }) => {
    const meId = useSelector(state => state.user.user.userId);

    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
        console.log('scroll')
    }, [messages]);


    if(messages.length === 0) {
        return (
            <Wrapper>
                <Content>
                </Content>
            </Wrapper>
        )
    }

    let dayGroupMessages = [];
    let tempDayMessagesGroup = {
        data: '',
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
        const data = tempDayMessagesGroup.data;
        dayGroupMessages.push(
            <DayMessageGroupContainer key={`day_messages_group_${data}`} id={`day_messages_group_${data}`}>
                <DataContainer>{ data }</DataContainer>
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
        const isMe = tempMessagesGroup.userId === meId;
        tempDayMessagesGroup.groups.push(
            <MessageGroup key={`messages_group_${indexGroup++}`}>
                { tempMessagesGroup.userId === meId
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
                            isRead={m.messageReads.length !== 0}
                            isMe={true} />)) }
                    </MessageList>
                }
                { isMe && <Avatar url={noAvatar}/>}
            </MessageGroup>
        )
        tempMessagesGroup.messages = [];
    }
    if (messages.length !== 0) {
        tempDayMessagesGroup.data = messages[0].sentAt.substring(5, 10);
    }
    for (let i = 0; i <= messages.length; i++) {
        if (tempDayMessagesGroup.data && i < messages.length) {
            if (tempDayMessagesGroup.data !== messages[i].sentAt.substring(5, 10)) {
                addGroupMessagesToMonthGroupMessages();
            }
            tempDayMessagesGroup.data = messages[i].sentAt.substring(5, 10);
        }
        if (i < messages.length) {
            if(tempMessagesGroup.userId && tempMessagesGroup.userId !== messages[i].userId) {
                addGroupToGroupMessages();
            }
            tempMessagesGroup.messages.push(messages[i]);
            tempMessagesGroup.userId = messages[i].userId;
        }
        else {
            if (tempDayMessagesGroup.data === '') {
                const data = messages[i - 1].sentAt.substring(5, 10);
                tempDayMessagesGroup.data = data;
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