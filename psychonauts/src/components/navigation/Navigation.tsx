import { NavButton } from "GlobalStyles";
import { Bars, Nav, NavLink, NavMenu, NavBtn, NavWrapper, NavLogo } from "./styled.nav";
import logo from "assets/images/logo512.png"
import { useAuthStore } from "store/store.auth";
import { ContextLink } from "components/auth/styled.auth";

export const Navigation = () => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)
  const logout = useAuthStore(state => state.logout)

  const handleLogout = () => {
    logout()
  }

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
        {/* <NavLogo>
          <img src={logo} alt="logo" />
        </NavLogo> */}
        <NavBtn>
          {isLoggedIn && isLoggedIn ? (
            <ContextLink $useFont={true} $size={"1.2rem"} onClick={handleLogout}>Logout</ContextLink>
          ) : (
            <NavButton to="/auth">Login</NavButton>
          )}
        </NavBtn>
      </Nav>
    </NavWrapper>
  );
};
