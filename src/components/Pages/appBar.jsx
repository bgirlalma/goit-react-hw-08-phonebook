// import UserMenu from "components/UserMenu/userMenu";
import { Navigation } from "./navigation";
import { AuthNav } from "../AuthNav/authNav";


const NavPage = () => {
return(
   <header>
    <Navigation/>
{/* {isLoggin ? <UserMenu/> : <AuthNav/>} */}

<AuthNav/>
   </header>
)
}

export default NavPage;