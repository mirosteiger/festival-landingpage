import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 60vh;
  width: 40vw;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  box-sizing: border-box;

  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 8px;
`;

export const FormWrapper = styled.form`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const CustomInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  margin: 0.2rem 0;
  padding: 1rem;
  border-radius: 10px;
  font-size: 0.6rem;
  border: ${(props) => (props.$error ? "solid red 1px" : "none")};
`

export const CustomLink = styled(Link)`
text-decoration: none;
color: white;
font-family: "Open Sans", sans-serif;
font-weight: 200;
font-size: 0.8rem;

`;

export const ContextLink = styled.p<{ $useFont?: boolean, $size?: string }> `
text-decoration: none;
color: white;
font-family: ${(props) => (props.$useFont ? "PsychoartRegular" : "Open Sans")}, sans-serif;
font-weight: 200;
font-size: ${(props) => (props.$size ? props.$size : "0.8rem")};
cursor: pointer;
`;

export const SubmitButton = styled.button`
width: 100%;
padding: 1rem;
font-size: 0.8rem;
border-radius: 10px;
transition: all 0.3s ease;

  &:hover {
  background-color: yellow;
  cursor: pointer;
}
`