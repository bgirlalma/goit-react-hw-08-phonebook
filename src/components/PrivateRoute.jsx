import { useAuth } from "./hooks/userHook"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({component: Component, redirectTo = "/login"}) => {
    const {isLoggIn, isRefreshing} = useAuth();
    const redirectShould = !isLoggIn && !isRefreshing;
    return redirectShould ? <Navigate to={redirectTo}/> : <Component/>;
}