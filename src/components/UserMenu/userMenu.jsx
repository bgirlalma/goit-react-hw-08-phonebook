import { useAuth } from "components/hooks/userHook";
import { useDispatch } from "react-redux";
import { userLoginOut } from "redux/User/userApi";


 const UserMenu = () => {
  const {user} = useAuth()
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    dispatch(userLoginOut());
  }
    return(
       <div>
         <h2>Welcome, {user.name}</h2>
         <button type="button" onClick={handleLogOut}>Log Out</button>
       </div>
    )
}

export default UserMenu;