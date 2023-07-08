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

export const FormWrapper = styled.div`
  height: 50%;
  margin-bottom: 2rem;
`;

export const CustomInput = styled.input`
    width: 100%;
    height: 2rem;
    margin: 1rem 0;
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: "Open Sans", sans-serif;
`;
