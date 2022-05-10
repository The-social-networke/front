import React from "react";
// Styles
import {
    Wrapper,
    ContentMessage,
    TextMessage,
    DataMessage,
    AdditionalContent,
    ExtraMessageInfoRow,
    ExtraMessageInfoImg
} from "./Message.styles";
// Image
import editedImg from '../../../../../image/edited.svg';
import copyImg from '../../../../../image/copy.svg';
import seenImg from '../../../../../image/seen.png';
// Redux
import { useDispatch } from "react-redux";
import { setEditMode } from "../../../../../redux/slice/chatSlice";
// Components
import MyCustomContextMenu from "../../../../util/context_menu/ContextMenu";

const Message = ({ id , text, sentAt, isEdited, isRead, isMe }) => {
    const dispatch = useDispatch();
    const shortData = sentAt.substring(11, 16);
    const contextMenuItems = [
        {
            name: 'copy',
            icon: copyImg,
            action: async () => {
                await navigator.clipboard.writeText(text);
            }
        },
    ];

    if (isMe) {
        contextMenuItems.push({
            name: 'edit',
            icon: editedImg,
            action: () => {dispatch(setEditMode({
                text: text,
                messageId: id
            }))}
        })
    }

    return (
        <>
            <Wrapper>
                <ContentMessage>
                    <TextMessage>{text}</TextMessage>
                    <AdditionalContent>
                        <ExtraMessageInfoRow>
                            { isRead && <ExtraMessageInfoImg src={seenImg} /> }
                            { isEdited && <ExtraMessageInfoImg src={editedImg} /> }
                        </ExtraMessageInfoRow>
                        <DataMessage>{shortData}</DataMessage>
                    </AdditionalContent>
                </ContentMessage>
            </Wrapper>
            <MyCustomContextMenu
                targetId={id}
                items={contextMenuItems}
            />
        </>
    )
}

export default Message;