import heroBanner from "assets/images/space_banner.webp";
import astro from "assets/images/astro.png";
import { HeroBanner, HeroWrapper, Astronaut, H1, H2, HeroTitleWrapper } from "./styled.hero";


export const Hero = () => {

  window.onscroll = () => {
    window.document.getElementById("title")!.style.bottom = -((window.scrollY / 2) + "px") as unknown as string
  }


  return (
    <HeroWrapper>
      <HeroBanner src={heroBanner} alt="HeroImage" />
      <Astronaut src={astro} alt="astronaut" />
      <HeroTitleWrapper id="title" top={"11.5rem"} left={"11.5rem"}>
        <H1>
          Psychonauts
        </H1>
        <H2>
          An interstellar music festival
        </H2>
      </HeroTitleWrapper>
    </HeroWrapper>
  )
}
