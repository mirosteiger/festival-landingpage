import heroBanner from "assets/images/space_banner.webp";
import astro from "assets/images/astro.png";
import { ArrowDown, HeroBanner, HeroWrapper, Astronaut } from "./styled.hero";
import { CTA } from "GlobalStyles";

/*
    TODO: 
        - Astronaut/Gitarre ausschneiden
        - Parallax-Scroll mit Astronaut
*/

export const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroBanner src={heroBanner} alt="HeroImage" />
        <Astronaut src={astro} alt="astronaut"/>
      </HeroWrapper>
      <CTA to="/tickets">Buy Tickets</CTA>
      <ArrowDown />
    ‚</>
  );
};
