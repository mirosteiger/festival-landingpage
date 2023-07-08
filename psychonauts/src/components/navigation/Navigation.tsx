import { NavButton } from "GlobalStyles";
import { Bars, Nav, NavLink, NavMenu, NavBtn, NavWrapper, NavLogo } from "./styled.nav";
import logo from "assets/images/logo512.png"

export const Navigation = () => {
  return (
    <NavWrapper>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/festival-landingpage">Home</NavLink>
          <NavLink to="/lineup">Lineup</NavLink>
          <NavLink to="/timetable">Timetable</NavLink>
          <NavLink to="/tickets">Tickets</NavLink>
        </NavMenu>
        <NavLogo>
          <img src={logo} alt="logo" />
        </NavLogo>
        <NavBtn>
          <NavButton to="/signin">Sign In</NavButton>
        </NavBtn>
      </Nav>
    </NavWrapper>
  );
};
