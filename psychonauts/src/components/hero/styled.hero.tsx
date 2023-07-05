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

export const HeroTitleWrapper = styled.div<{top?: string; left?: string; }>`
  position: absolute; 
  top: ${(props) => props.top ? props.top : "0"};
  left: ${(props) => props.left ? props.left : "0"};
  color: orange;
  text-align: left;
   text-shadow: 0 2px 1px #79a06d, 
       -1px 3px 1px #82ad75, 
       -2px 5px 1px #8ebf80,
       -2px 1px 30px #ff99cc,
       3px 3px 20px #ff99cc;
`

export const H1 = styled.h1`
  font-size: 8rem;
  text-transform: capitalize;
  font-variant: small-caps;
`
export const H2 = styled.h2`
  font-size: 3rem;
  text-transform: capitalize;
  font-variant: small-caps;
`

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
  top: 15vw;
  right:20%;
  width: 30vw;

  animation: ${floating} 6s ease-in-out infinite;
  
  // @media only screen and (max-width: 768px) {
  //   object-fit: cover;
  //   width: 100%;
  //   height: 100%;
  // }
  // @media only screen and (min-width: 481px) {
  //   width: 100vw;
  // }
`;
