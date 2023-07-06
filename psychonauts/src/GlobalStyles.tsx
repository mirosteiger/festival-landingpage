import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    overflow-x: hidden;

    @media only screen and (max-width: 1200px){
      font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
      font-size: 1.5rem;
    }
  }

  body{
    font-family: PsychoartRegular;
    background-color: #152c50;
    font-size: 100%;
    margin: 0;
    line-height: 1.6;
    font-size: 100%;
    color: #e2e2e2;
  }

  main{
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 5rem;
  }
`;

export default GlobalStyles;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const SectionContainer = styled.div`
    height: auto;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 3rem 10rem;

    @media (max-width: 600px) {
      padding: 3rem 5rem;
    }
    @media (max-width: 900px) {
      padding: 3rem 10rem;
    }
`


export const Spacer = styled.div<{size: string}>`
  margin: ${(props) => props.size}
`

export const NavButton = styled(Link) <{
  $borderRadius?: boolean;
  $primary?: boolean;
  $big?: boolean;
  $bigFont?: boolean;
}>`
  border-radius: ${(props) => (props.$borderRadius ? "30px" : "20px")};
  background-color: ${(props): any => (props.$primary ? "#E38B06" : "#000")};
  color: ${(props): any => (props.$primary ? "#000" : "#fff")};
  padding: ${(props): any => (props.$big ? "18px 30px" : "10px 28px")};
  font-size: ${(props): any => (props.$bigFont ? "20px" : "18px")};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  text-decoration: none;

  &:hover {
    background-color: ${({ $primary }) => ($primary ? "#fff" : "#E38B06")};
    transform: scale(1.1);
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${(props) => (props.$big ? "18px 30px" : "10px 20px")};
  }
  @media only screen and (max-width: 375px) {
    padding: ${(props) => (props.$big ? "12px 20px" : "10px 20px")};
    font-size: ${(props) => (props.$bigFont ? "16px" : "18px")};
  }
`;

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

export const Description = styled.p`
    font-size: 1.4rem;
`

export const CTA = styled(Link) <{
  $bigRadius?: boolean;
  $big?: boolean;
  $fontBig?: boolean;
}>`
  border-radius: ${(props) => (props.$bigRadius ? "40px" : "30px")};
  border: 2px solid #333;
  color: #333;
  outline: none;
  padding: ${(props) => (props.$big ? "15px 60px" : "13px 55px")};
  font-size: ${(props) => (props.$fontBig ? "22px" : "18px")};
  transition: all 0.5s ease;
  background-color: #fefefe;
  text-transform: capitalize;
  font-variant: small-caps;
  font-family

  &:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1200px) {
    border-radius: ${(props) => (props.$bigRadius ? "20px" : "18px")};
    padding: ${(props) => (props.$big ? "9px 30px" : "8px 28px")};
    font-size: ${(props) => (props.$fontBig ? "18px" : "16px")};
  }
`;


export const BackdropImage = styled.img`
    filter: brightness(20%);
    position: absolute;
    z-index: -1;
`
