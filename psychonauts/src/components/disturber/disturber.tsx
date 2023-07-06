import stage from "assets/images/stage.jpg";
import { CTA, H2, Spacer, SectionContainer, BackdropImage, Description } from "GlobalStyles";

export const Disturber = () => {
    return (
        <SectionContainer>
            <BackdropImage src={stage} width="100%" />
            <H2>Ready for take off?</H2>
            <Spacer size="2rem" />
            <Description>
                Embark on a cosmic journey of mind-expanding sounds and immersive visuals.
                Get ready to transcend earthly boundaries and experience a stellar fusion of music and astral wonders.
                Secure your ticket now and prepare to lose yourself in an otherworldly sonic adventure.
            </Description>
            <Spacer size="3rem" />
            <CTA to="/tickets">Get your tickets now!</CTA>
        </SectionContainer>
    )
}