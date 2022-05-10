import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
` ;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  padding: 1% 0;
  margin: 0 2%;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  background: red;
  `;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  background: red;
`;


export const LogoImg = styled.img`
  width: 50px;

  @media screen and (max-width: 500px) {
    width: 30px;
  }
  `;

export const Item = styled.div`
  color: var(--white);
  font-size: var(--fontMed);
  margin: 0 5px;
  
  &:first-of-type {
    margin-left: 20px;
  }
  
  @media screen and (max-width: 500px) {
    font-size: var(--fontSmall);
  }
`;