/*
import { useContext } from "react"
import { AuthContext } from "../context/authcontext"
import { Navigate } from "react-router-dom";
import { Login } from "../pages/login";

export const PrivateRoute = ({children}:any) => {
    const { aname } = useContext(AuthContext);
    return (aname !== undefined)
    ? children
    : <Navigate to='/'/>
}

export const PublicRoute = ({children}:any) => {
    const { aname } = useContext(AuthContext);
    return (aname == undefined)
    ? children
    : <Navigate to='/marvel'/>
}
*/