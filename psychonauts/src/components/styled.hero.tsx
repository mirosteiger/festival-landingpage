import { IoIosArrowDown } from "react-icons/io";
import styled, { keyframes } from "styled-components";

export const HeroWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HeroBanner = styled.img`
  // pull up the CTA
  margin-bottom: -12rem;

  @media only screen and (max-width: 768px) {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 481px) {
    width: 100vw;
  }
`;

const bump = keyframes`
0% {
  transform: translateY(0px);
}
50% {
  transform: translateY(10px);
}
100% {
  transform: translateY(0px);
}
`;

const floating = keyframes`
0% {
  transform: translate(0px, 0px);
}
25% {
  transform: translate(10px, 3px);
}
50% {
  transform: translate(-3px, 10px);
}
75% {
  transform: translate(-10px, 10px);
}
100% {
  transform: translate(0px, 0px);
}
`;

export const ArrowDown = styled(IoIosArrowDown)`
  font-size: 7rem;
  stroke: black;
  stroke-width: 10px;
  animation: ${bump} 1s ease-in-out infinite;
`;

export const Astronaut = styled.img`
  position: absolute;
  top: 5.5rem;
  left:16rem;

  animation: ${floating} 6s ease-in-out infinite;
  @media only screen and (max-width: 768px) {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 481px) {
    width: 100vw;
  }
`;
