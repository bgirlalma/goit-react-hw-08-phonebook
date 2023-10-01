import { Navigation } from "Pages/navigation"
import { useAuth } from "./hooks/userHook"

export const RestrictedRoute = ({component: Component, redirectTo = "/"}) => {
    const {isLoggIn} = useAuth()
    return isLoggIn ? <Navigation to={redirectTo}/> : <Component/>;
}