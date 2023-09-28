import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
        <nav>
            <ul>
            <li>
                <NavLink to="/login">Log in</NavLink>
            </li>
            <li>
                <NavLink to="/register">Registration</NavLink>
            </li>
            </ul>
        </nav>
    )
}