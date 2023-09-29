import { useAuth } from "components/hooks/userHook";

 const UserMenu = () => {
  const {user} = useAuth()
    return(
       <div>
         <h2>Welcome, {user.name}</h2>
         <button type="button">Log Out</button>
       </div>
    )
}

export default UserMenu;