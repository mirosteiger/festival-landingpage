import heroBanner from "assets/images/space_banner.webp";
import astro from "assets/images/astro.png";
import { HeroBanner, HeroWrapper, Astronaut } from "./styled.hero";


export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBanner src={heroBanner} alt="HeroImage" />
      <Astronaut src={astro} alt="astronaut" />
    </HeroWrapper>
  )
}
