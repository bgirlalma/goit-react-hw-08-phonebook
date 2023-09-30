import { useSelector } from "react-redux"; 
import { selectUser, selectIsLoggIn, selectIsRefreshing } from "redux/User/userSelector";

export const useAuth = () => {
    return {
        isLoggIn: useSelector(selectIsLoggIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
    }

    
}