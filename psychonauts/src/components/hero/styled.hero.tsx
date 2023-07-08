import { IoIosArrowDown } from "react-icons/io";
import styled, { keyframes } from "styled-components";

export const HeroWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

export const HeroBanner = styled.img`
  @media only screen and (max-width: 768px) {
    object-fit: cover;
    width: 100vw;
  }
  @media only screen and (min-width: 481px) {
    width: 100vw;
  }
`;

export const HeroTitleWrapper = styled.div<{ $top?: string; $left?: string }>`
  position: absolute;
  top: ${(props) => (props.$top ? props.$top : "0")};
  left: ${(props) => (props.$left ? props.$left : "0")};
  color: orange;
  text-align: right;
  text-shadow: 0 2px 1px #79a06d, -1px 3px 1px #82ad75, -2px 5px 1px #8ebf80,
    -2px 1px 30px #ff99cc, 3px 3px 20px #ff99cc;
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
    transform:  translate(0)  rotate(0deg)  scale(1);
  }
  20% {
    transform:  translate(10px,-4px)  rotate(-3deg) scale(0.95);
  }
  40% {
    transform:translate(15px,px) rotate(-3deg) scale(0.9);
  }
  60% {
    transform:translate(15px,3px) rotate(1deg) scale(0.85);
  }
  80% {
    transform:translate(-5px,5px) scale(0.9);
  }
  100% {
    transform:translate(0) rotate(0deg) scale(1);
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
  top: 15vw;
  right: 10%;
  width: 30vw;
  overflow: hidden;

  animation: ${floating} 10s linear infinite;

  // @media only screen and (max-width: 768px) {
  //   object-fit: cover;
  //   width: 100%;
  //   height: 100%;
  // }
  // @media only screen and (min-width: 481px) {
  //   width: 100vw;
  // }
`;

export const Date = styled.h1`
  font-size: 4rem;
  text-transform: capitalize;
  font-variant: small-caps;
  color: #e2e2e2;
`;
