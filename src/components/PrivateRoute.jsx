import { Navigation } from "Pages/navigation"
import { useAuth } from "./hooks/userHook"

export const PrivateRoute = ({component: Component, redirectTo = "/"}) => {
    const {isLoggIn, isRefreshing} = useAuth();
    const redirectShould = !isLoggIn && !isRefreshing;
    return redirectShould ? <Navigation to={redirectTo}/> : <Component/>;
}