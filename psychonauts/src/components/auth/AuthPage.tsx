import { H3, SectionContainer, Spacer } from "GlobalStyles";
import {
  CardWrapper,
  CustomInput,
  CustomLink,
  FormWrapper,
  SubmitButton,
  ContextLink
} from "./styled.auth";
import React, { useState, useEffect } from "react";

import { useAuthStore } from "store/store.auth";
import { useNavigate } from "react-router"

export const AuthPage = () => {

  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { isLoggedIn, login, register } = useAuthStore()
  const [isRegisterPage, setRegisterPage] = useState<boolean>(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const switchContext = () => {
    setRegisterPage(!isRegisterPage);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setSignUpForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //check password-confirmation
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError(true)
      alert("Passwords not matching!")
    }
    else {
      register(signUpForm)
    }
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(signUpForm)
  }

  //redirect after successful login/registration
  useEffect(() => {
    if (isLoggedIn) {
      setError(false)
      navigate("/")
    }
    //trigger when "isLoggedIn" changes
  }, [isLoggedIn])



  return (
    <SectionContainer>
      <CardWrapper>
        {isRegisterPage && isRegisterPage ? (
          // Register START
          <>
            <H3>Register your account</H3>
            <Spacer size={"2rem"} />
            <FormWrapper onSubmit={handleRegister}>
              <CustomInput placeholder="Email" name="email" required onInput={handleInputChange} type="email" />
              <CustomInput placeholder="Password" name="password" required onChange={handleInputChange} type="password" $error={error} />
              <CustomInput placeholder="Confirm" name="confirmPassword" required onChange={handleInputChange} type="password" $error={error} />
              <Spacer size={"1rem"} />
              <SubmitButton type="submit">
                Register
              </SubmitButton>
            </FormWrapper>
            <ContextLink onClick={switchContext}>Already have an account?</ContextLink>
          </>
          // Register END 

        ) : (
          // Login START
          <>
            < H3 > Login to your account</H3>
            <Spacer size={"2rem"} />
            <FormWrapper onSubmit={handleLogin}>
              <CustomInput placeholder="Email" name="email" required onInput={handleInputChange} type="email" />
              <CustomInput placeholder="Password" name="password" required onChange={handleInputChange} type="password" />
              <Spacer size={"1rem"} />
              <SubmitButton type="submit">
                Login
              </SubmitButton>
            </FormWrapper>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CustomLink to="/signup">Forgot your Password?</CustomLink>
              <ContextLink onClick={switchContext}>Not registered yet?</ContextLink>
            </div>
          </>
          // Login END
        )}
      </CardWrapper>
    </SectionContainer >
  );
};
