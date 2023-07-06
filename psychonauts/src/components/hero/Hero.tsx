import heroBanner from "assets/images/space_banner.webp";
import astro from "assets/images/astro.png";
import { HeroBanner, HeroWrapper, Astronaut, HeroTitleWrapper, Date } from "./styled.hero";
import { H1, H2 } from "GlobalStyles";


export const Hero = () => {

  return (
    <HeroWrapper>
      <HeroBanner src={heroBanner} alt="HeroImage" />
      <Astronaut src={astro} alt="astronaut" />
      <HeroTitleWrapper id="title" $top={"10%"} $left={"10%"}>
        <H1>
          Psychonauts
        </H1>
        <H2>
          An interstellar music festival
        </H2>
        <Date>
          04.08. - 06.08.
        </Date>
      </HeroTitleWrapper>
    </HeroWrapper>
  )
}
