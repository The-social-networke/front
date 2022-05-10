import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: auto;
  width: fit-content;
  padding: 10px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: white;
  border-radius: 10px;
  display: ${state => state.visible ? 'block' : 'none'};
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
  padding: 5px;
  
  &:hover {
    background: #e0e0e0;
  }
`;

export const ItemContent = styled.div`
  width: 100%;
  font-size: 1em;
  padding-right: 10px;
`;

export const ItemImg = styled.img`
  height: 25px;
  width: 25px;
  margin: 0 8px;
  padding: 3px;
`;