import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
