import React from 'react';
import styled from 'styled-components';

const LinkToSection = styled.a`
  text-decoration: none;
`;

const ButtonToSection = styled.button`
  border: 0;
  padding: 10px 20px;
  margin: 0;
  cursor: pointer;
  width: 300px;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    background-color: #3e8e41;
  }

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const ButtonToOtherSection = ({ section, children }) => (
  <LinkToSection href={section}>
    <ButtonToSection>{children}</ButtonToSection>
  </LinkToSection>
);
export default ButtonToOtherSection;
