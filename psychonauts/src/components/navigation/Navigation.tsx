import { Button } from "GlobalStyles";
import { Bars, Nav, NavLink, NavMenu, NavBtn, NavWrapper, NavLogo } from "./styled.nav";
import logo from "assets/images/logo512.png"

export const Navigation = () => {
  return (
    <NavWrapper>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/lineup">Lineup</NavLink>
          <NavLink to="/timetable">Timetable</NavLink>
          <NavLink to="/tickets">Tickets</NavLink>
        </NavMenu>
        <NavLogo>
          {/* <img src={logo} alt="logo" /> */}
        </NavLogo>
        <NavBtn>
          <Button to="/signin">Sign In</Button>
        </NavBtn>
      </Nav>
    </NavWrapper>
  );
};
