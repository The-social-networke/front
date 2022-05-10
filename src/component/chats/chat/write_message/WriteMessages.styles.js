import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export const StyledFormContainer = styled.div`
  margin: 0 15%;
  display: flex;
  flex-direction: row;
  align-items: end;

  .textarea {
    width: 100%;
    max-height: 300px;
    height: fit-content;
    font-size: 1em;
    padding: 12px 20px;
    display: inline-block;
    background: none;
    box-sizing: border-box;
    resize: none;
    border: none;
    outline: none;
  }

  .submit {
    max-width: 45px;
    max-height: 45px;
    min-width: 45px;
    min-height: 45px;
    margin: 0 0 8px 8px;
    color: white;
    background-color: #77bae1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const EditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 0 8px;
`;

export const EditImg = styled.img`
  padding: 3px;
  margin-right: 5px;
  width: 25px;
  height: 25px;
`;

export const EditImgEnd = styled.img`
  padding: 3px;
  width: 25px;
  height: 25px;
  margin-left: auto;
`;

export const EditTextContainer = styled.div`
  width: 100%;
  padding-left: 10px;
  border-left: #77bae1 solid 3px;
  border-radius: 5px;
`;

export const EditTextTitle = styled.span`
  color: #77bae1;
  font-size: 0.7rem;
`;

export const EditTextContent = styled.div`
  height: 1rem;
  width: 100%;
  font-size: 0.8rem;
  color: #808080;
  overflow: hidden;
`;