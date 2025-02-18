import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GuestGuard(props) {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}