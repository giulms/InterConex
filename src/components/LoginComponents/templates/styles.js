import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export const TemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 75vw;
  position: relative;
  overflow: hidden;
`;

export const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;

  // Animação condicional com base no estado de login
  animation: ${({ isLogin }) => (isLogin ? slideIn : slideOut)} 0.5s ease-in-out;
`;