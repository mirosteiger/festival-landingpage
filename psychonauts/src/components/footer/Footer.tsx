import { FooterElement, FooterSection, FooterWrapper } from "./styled.footer";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterElement>
          <a
            href="mailto:miro.steiger@outlook.de"
            style={{ textDecoration: "none", color: "white" }}
          >
            {/* TODO: Hier onClick ein Popup mit Kontaktformular, das wirklich funktioniert */}
            Contact me!
          </a>
        </FooterElement>
      </FooterSection>
      <FooterSection>
        <FooterElement>
          <a
            href="https://mirosteiger.github.io/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            © 2023 Miro Steiger
          </a>
        </FooterElement>
      </FooterSection>
    </FooterWrapper>
  );
};
