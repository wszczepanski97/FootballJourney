import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import ButtonToOtherSection from 'components/ButtonToOtherSection/ButtonToOtherSection';
import BackgroundHeaderImage from 'assets/football.jpg';

const Wrapper = styled.header`
  @keyframes fade-slide-down {
    0% {
      opacity: 0;
      transform: translateY(-4rem);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes rotate-up {
    100% {
      transform: rotateZ(-4deg);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  perspective: 100px;

  &::before {
    animation: fade-slide-down 2s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
      url(${BackgroundHeaderImage}) no-repeat bottom;
    background-size: cover;
    content: ' ';
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  &::after {
    animation: rotate-up 0.5s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
    background-image: linear-gradient(to bottom, #797777, #8b7474, #7b7979, #c0c1c2, #ffffff);
    content: '';
    height: 40rem;
    left: -5%;
    position: absolute;
    right: -5%;
    top: 90%;
    transform-origin: 0 0;
    z-index: 0;
  }
`;
const Header = () => (
  <Wrapper>
    <Heading>Welcome to the football journey!</Heading>
    <Heading subtitle>It's a place where football is at hand.</Heading>
    <ButtonToOtherSection section={'#livescores'}>Go on!</ButtonToOtherSection>
  </Wrapper>
);
export default Header;
