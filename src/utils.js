import styled, { keyframes } from 'styled-components';

export const renderLabel = function (props) {
  return `${props.toLocaleString()}`;
};

const textFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Title = styled.h1`
  animation-name: ${textFade};
  animation-duration: 1s;
`;
