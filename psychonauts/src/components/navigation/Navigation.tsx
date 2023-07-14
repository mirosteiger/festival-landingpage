import { NavButton, HSpacer } from "GlobalStyles";
import { Bars, Nav, NavLink, NavMenu, NavBtn, NavWrapper, NavLogo } from "./styled.nav";
import logo from "assets/images/logo512.png"
import { useAuthStore } from "store/store.auth";
import { ContextLink } from "components/auth/styled.auth";
import { IoIosCart } from "react-icons/io";
import { useCartStore } from "store/store.cart";
import { Amount, CartBtn } from "components/tickets/styled.tickets";

export const Navigation = () => {
  const { isLoggedIn, logout } = useAuthStore()
  const { total, tickets, dropCart } = useCartStore()

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
          {isLoggedIn && isLoggedIn ? (<>
            {total ?
              <>
                <HSpacer $size={"2rem"} />
                <CartBtn href="/cart">
                  <NavBtn>
                    <IoIosCart size={"2rem"} />
                    <Amount>{tickets.length}</Amount>
                  </NavBtn>
                </CartBtn>
                <NavBtn onClick={dropCart}>KILL CART</NavBtn>
              </>
              : <></>
            }
            <ContextLink $useFont={true} $size={"1.2rem"} onClick={handleLogout}>Logout</ContextLink>
          </>
          ) : (
            <NavButton to="/auth">Login</NavButton>
          )}
        </NavBtn>
      </Nav>
    </NavWrapper>
  );
};
