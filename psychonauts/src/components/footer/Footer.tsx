import { FooterWrapper } from "./styled.footer";

export const Footer = () => {
  return (
    <FooterWrapper>
      <ul>
        <li>
          <p className="footer-link">Contact</p>
        </li>
        <li>
          <p className="footer-logo">Logo</p>
        </li>
      </ul>
    </FooterWrapper>
  );
};
