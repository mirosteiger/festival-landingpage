import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 11rem;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const FooterSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

export const FooterElement = styled.p`
  color: #e2e2e2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
`;
