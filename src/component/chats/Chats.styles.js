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
  min-width: 300px;
  max-width: 300px;
  padding: 10px;
  background: var(--white);
  
  @media screen and (max-width: 600px) {
    margin-left: -300px;
    transition: margin-left 0.8s;
  }

  @media screen and (min-width: 600px) {
    transition: margin-left 0.8s;
    box-shadow: var(--box-shadow-standart);
  }
`;

export const ListChatsHeader = styled.div`
  padding: 10px;
  flex: 0;
`;

export const ListChatsContent = styled.div`
  background: var(--white);
  background: white;
  flex: 1;
  overflow: auto;
  
  a {
    color: black;
    text-decoration: none;
  }
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  background: ${props => props.selected ? 'var(--darkBlue)' : 'none'};
  
  &:hover {
    background: ${props => props.selected ? 'var(--darkBlue)' : 'var(--whiteGrey)'};
  }
`;

export const ChatBoxAvatar = styled.div`
  background: url(${props => props.backgroundImg});
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
`;

export const ChatBoxText = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 5px;
`;

export const ChatBoxTextChatName = styled.div`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  color: ${props => props.selected ? 'white' : 'black'};
`;

export const ChatBoxTextLastMessageText = styled.div`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${props => props.selected ? 'white' : 'var(--grey)'};
`;

export const ChatBoxExtra = styled.div`
  width: 40px;
  font-size: 0.7rem;
  color: ${props => props.selected ? 'white' : 'var(--grey)'};
`;

export const ChatContainer = styled.div`
  width: 100%;
  position: initial;
`;

export const ChatContainerBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(${props => props.backgroundImg});
  background-color: aqua;
  background-size: 800px 800px;
`;

export const ChatContainerBackgroundImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.backgroundImg});
  background-size: 800px 800px;
  opacity: 30%;
`;