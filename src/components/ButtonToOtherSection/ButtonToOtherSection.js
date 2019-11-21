import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const LinkToSection = styled.a`
  text-decoration: none;
`;

const ButtonToOtherSection = ({ section, children }) => (
  <LinkToSection href={section}>
    <Button>{children}</Button>
  </LinkToSection>
);

ButtonToOtherSection.propTypes = {
  section: PropTypes.string,
  children: PropTypes.string.isRequired,
};

ButtonToOtherSection.defaultProps = {
  section: '',
};

export default ButtonToOtherSection;
