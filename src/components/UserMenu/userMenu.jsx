import { useAuth } from "components/hooks/userHook";
import { useDispatch } from "react-redux";
import { userLoginOut } from "redux/User/userApi";
import styled from "styled-components";

const StyledMenu = styled.div`
display: flex;
align-items: center;
`

const StyledTitle = styled.h2`
font-family: -apple-system, sans-serif;
font-size: 18px;
color: white;
margin-right: 20px;
`

const StyledButton = styled.button`
font-family: -apple-system, sans-serif;
font-size: 14px;
color: black;
background-color: rgba(150, 0, 119, 0.15);
border: none;
border-radius: 20px;
padding: 10px;
cursor: pointer;

&:hover {
  background-color: rgba(255, 0, 0, 1);
  color: white;
}

`


 const UserMenu = () => {
  const {user} = useAuth()
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    dispatch(userLoginOut());
  }
  console.log(user.name)
    return(
       <StyledMenu>
         <StyledTitle>Welcome, {user.name}</StyledTitle>
         
         <StyledButton type="button" onClick={handleLogOut}>Log Out</StyledButton>
       </StyledMenu>
    )
}

export default UserMenu;