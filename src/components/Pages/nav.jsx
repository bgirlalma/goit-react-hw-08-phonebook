import { NavLink } from "react-router-dom";

const NavPage = () => {
return(
    <nav>
        <ul>
            <li>
                <NavLink to="/">Log in</NavLink>
            </li>
            <li>
                <NavLink to="/register">Registration</NavLink>
            </li>
        </ul>
    </nav>
)
}

export default NavPage;