import UserMenu from "components/UserMenu/userMenu";
import { Navigation } from "./navigation";
import { AuthNav } from "../components/AuthNav/authNav";
import { useAuth } from "components/hooks/userHook";
import styled from "styled-components";

const StyledContainer = styled.div`
display: flex;
justify-content: space-between;
background-color:  #00ff00;
padding: 20px;
border: 3px solid blue;
border-radius: 10px;
`;

const NavPage = () => {
   const {isLoggIn} = useAuth()
return(
   <header>
      <StyledContainer>
    <Navigation/>
    {isLoggIn ? <UserMenu/> : <AuthNav/>}
      </StyledContainer>
   </header>
)
}

export default NavPage;