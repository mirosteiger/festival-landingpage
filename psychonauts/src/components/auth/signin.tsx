import { H3, SectionContainer, Spacer } from "GlobalStyles";
import {
  CardWrapper,
  CustomInput,
  CustomLink,
  FormWrapper,
} from "./styled.auth";

export const SignIn = () => {





  return (
    <SectionContainer>
      <CardWrapper>
        <H3>Login to your account</H3>
        <Spacer size={"2rem"} />
        <FormWrapper>
          <form>
            <CustomInput placeholder="Email" />
            <CustomInput placeholder="Password" />
            <Spacer size={"1rem"} />
            <div style={{ textAlign: "center" }}>
              <button>
                Sign In
              </button>
            </div>
          </form>
        </FormWrapper>
        <CustomLink to="/signup">Already have an account?</CustomLink>
      </CardWrapper>
    </SectionContainer>
  );
};
