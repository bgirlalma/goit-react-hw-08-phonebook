import { Outlet } from "react-router-dom"
import NavPage from "../Pages/appBar";
import { GlobalStyled } from "globalStyled";

const Layout = () => {
return(
    <div className="Layout">
        <NavPage/>
    <GlobalStyled/>
        <Outlet/>
    </div>
)
}

export default Layout