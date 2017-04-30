import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 25vh;
  width: 100vw;
  background-color: rgb(64,64,64);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: rgb(30,144,255);
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 2px;
`;

const Header = () => (
  <HeaderContainer>
    <Title>NHOLE</Title>
  </HeaderContainer>
);

export default Header;
