import UserMenu from "components/UserMenu/userMenu";
import { Navigation } from "./navigation";
import { AuthNav } from "../AuthNav/authNav";
import { useAuth } from "components/hooks/userHook";


const NavPage = () => {
   const {isLoggIn} = useAuth()
return(
   <header>
    <Navigation/>
{isLoggIn ? <UserMenu/> : <AuthNav/>}
   </header>
)
}

export default NavPage;