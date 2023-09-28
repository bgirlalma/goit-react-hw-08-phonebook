import { Outlet } from "react-router-dom"
import NavPage from "./Pages/nav"


const Layout = () => {
return(
    <div>
        <NavPage/>
        <hr/>

        <Outlet/>
    </div>
)
}

export default Layout