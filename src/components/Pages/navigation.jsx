import { useAuth } from "components/hooks/userHook";
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
export const Navigation = () => {
    const {isLoggIn} = useAuth()
    return (
        <nav>
            {isLoggIn && (
        <StyledNavigation>
            <li>
                <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/contacts">Phonebook</StyledNavLink>
            </li>  
        </StyledNavigation>
        )}
    </nav>
    )
}