import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

const LinkToSection = styled.a`
  text-decoration: none;
`;

const ButtonToOtherSection = ({ section, children }) => (
  <LinkToSection href={section}>
    <Button>{children}</Button>
  </LinkToSection>
);

export default ButtonToOtherSection;
