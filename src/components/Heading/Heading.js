import styled, { css } from 'styled-components';

const Heading = styled.h1`
  @keyframes pop-in {
    0% {
      opacity: 0;
      transform: translateY(-4rem) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  color: #fff;
  animation: pop-in 0.6s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
  opacity: 0;
  animation-delay: 0.8s;
  font-size: 2em;
  margin-bottom: 2rem;
  ${({ subtitle }) =>
    subtitle &&
    css`
      text-transform: uppercase;
      font-size: 1.5em;
      margin-bottom: 5rem;
      animation-delay: 1.2s;
    `}
`;

export default Heading;
