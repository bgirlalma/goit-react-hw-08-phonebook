import { useAuth } from "components/hooks/userHook";
import { NavLink } from "react-router-dom";
export const Navigation = () => {
    const {isLoggIn} = useAuth()
    return (
        <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {isLoggIn && (
                <NavLink to="/contacts">Phonebook</NavLink>
            )}
        </ul>
    </nav>
    )
}