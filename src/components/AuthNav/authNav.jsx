import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.ul`
display: flex;
list-style: none;
gap: 20px;
`;

const StyledNavLink = styled(NavLink)`
font-family: -apple-system, sans-serif;
font-size: 24px;
color: blue;
`;

export const AuthNav = () => {
    return (
        <nav className="Nav">
            <StyledNavigation>
            <li>
                <StyledNavLink to="/login">Log in</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/register">Registration</StyledNavLink>
            </li>
            </StyledNavigation>
        </nav>
    )
}