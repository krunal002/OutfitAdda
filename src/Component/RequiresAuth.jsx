import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom"
import { LoginContext } from "../Context/LoginContext";

export const RequiresAuth  = ( {children} ) => {
    const { token } = useContext(LoginContext);
    let location = useLocation();

    return token
        ? children : <Navigate to="/login" state={{ from:location }}/>
}