import { Link } from "react-router-dom";
import { FooterElement, FooterSection, FooterWrapper } from "./styled.footer";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterElement>
          {/* TODO: Hier onClick ein Popup mit Kontaktformular, das wirklich funktioniert */}
          Contact
        </FooterElement>
      </FooterSection>
      <FooterSection>
        <FooterElement>
          <Link
            to="https://mirosteiger.github.io/"
            style={{ textDecoration: "none", color: "white" }}
          >
            © 2023 Miro Steiger
          </Link>
        </FooterElement>
      </FooterSection>
    </FooterWrapper>
  );
};
