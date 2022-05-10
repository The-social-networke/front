import React, {useEffect} from 'react';
// Styles
import {
    Wrapper,
    StyledFormContainer,
    InputContainer,
    EditContainer,
    EditImg,
    EditImgEnd,
    EditTextContainer,
    EditTextTitle,
    EditTextContent
} from './WriteMessages.styles';
// Images
import sendMessageImg from '../../../../image/sendMessage.png';
import editModeBlueImg from '../../../../image/editedBlue.svg';
import closeImg from '../../../../image/close.png';
// Redux
import {sendMessage, updateMessage} from "../../../../redux/slice/chatSlice";
import { useDispatch, useSelector } from "react-redux";
// Formik
import { Field, Form, Formik } from "formik";
// Other
import TextareaAutosize from 'react-textarea-autosize';


const WriteMessages = () => {
    const dispatch = useDispatch();
    const editMode = useSelector(state => state.chat.editMode)

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    message: editMode.isEdit ? editMode.oldText : '',
                }}
                enableReinitialize
                onSubmit={
                    async (values) => {
                        editMode.isEdit
                            ? dispatch(updateMessage(values.message))
                            : dispatch(sendMessage(values.message));
                    }}
            >
                {formik => {
                    return (
                        <Form>
                            <StyledFormContainer>
                                <InputContainer>
                                    { editMode.isEdit &&
                                    <EditContainer>
                                        <EditImg src={editModeBlueImg}/>
                                        <EditTextContainer>
                                            <EditTextTitle>Editing</EditTextTitle>
                                            <EditTextContent>{editMode.oldText}</EditTextContent>
                                        </EditTextContainer>
                                        <EditImgEnd src={closeImg}/>
                                    </EditContainer> }
                                    <Field name="message">
                                        {({ field, form, meta }) => {
                                            return <TextareaAutosize {...field} id="message" minRows={1} maxRows={10}
                                                                     className='textarea' placeholder="message"/>
                                        }}
                                    </Field>
                                </InputContainer>
                                {formik.values.message
                                    ? <button type="submit" className='submit'>
                                        <img src={sendMessageImg}/>
                                    </button>
                                    : <button type="submit" className='submit' disabled={true}>
                                        <img src={sendMessageImg}/>
                                    </button>
                                }
                            </StyledFormContainer>
                        </Form>
                    )
                }}
            </Formik>
        </Wrapper>
    )
};

export default WriteMessages;