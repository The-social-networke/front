import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

export const ListChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListChatsHeader = styled.div`
  background: gray;
  padding: 10px;
  flex: 0;
  width: 300px;
`;

export const ListChatsContent = styled.div`
  background: silver;
  flex: 1;
  overflow: auto;
  width: 300px;
`;

export const ChatBox = styled.div`
  padding: 10px;
  background: aqua;
  border: 1px solid black;
`;