import { Navigate, Outlet } from "react-router-dom";
import useAuthState from "../../hooks/useAuthState";

function PrivateRoute() {
    const {isLogin} = useAuthState()

    if (!isLogin) {
        return <Navigate to='/signin' />
    }
    return <Outlet />
}

export default PrivateRoute;