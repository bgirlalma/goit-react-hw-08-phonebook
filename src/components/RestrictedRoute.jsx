import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/userHook"

export const RestrictedRoute = ({component: Component, redirectTo = "/"}) => {
    const {isLoggIn} = useAuth()
    return isLoggIn ? <Navigate to={redirectTo}/> : <Component/>;
}