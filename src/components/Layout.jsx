import { Outlet } from "react-router-dom"
import NavPage from "./Pages/appBar";

const Layout = () => {
return(
    <div className="Layout">
        <NavPage/>

        <Outlet/>
    </div>
)
}

export default Layout