import { Button } from "GlobalStyles";
import { Bars, Nav, NavLink, NavMenu, NavBtn, NavWrapper } from "./styled.nav";

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
        <NavBtn>
          <Button to="/signin">Sign In</Button>
        </NavBtn>
      </Nav>
    </NavWrapper>
  );
};
