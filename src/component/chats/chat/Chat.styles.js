import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #c6fdf6;
`;

export const WriteMessageContainer = styled.div`
  width: 100%;
  flex: 0;
  padding: 10px;
`;


export const ChatInfoContainer = styled.div`
  background: gray;
  flex: 0;
  padding: 10px;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow: scroll;
`;



