import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 15vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`;

const Footer = () => (
  <FooterContainer>
    Build with love&nbsp;<span style={{ color: 'rgb(220,20,60)' }}>&#10084;</span>
  </FooterContainer>
);

export default Footer;
