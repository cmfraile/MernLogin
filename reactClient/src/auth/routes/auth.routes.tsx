import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { authContext } from "../context/login.context";

export const PrivateRoute = ({children}:any) => {
    const { logged } = useContext(authContext);
    return (logged)
    ? children
    : <Navigate to='/'/>
}

export const PublicRoute = ({children}:any) => {
    const { logged } = useContext(authContext);
    return (!logged)
    ? children
    : <Navigate to='/private'/>
}