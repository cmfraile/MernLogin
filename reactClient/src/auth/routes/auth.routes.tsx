import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { authContext } from "../context/auth.context";

export const PrivateRoute = ({children}:any) => {
    const { user } = useContext(authContext).userHook;
    return ( user )
    ? children
    : <Navigate to='/'/>
}

export const PublicRoute = ({children}:any) => {
    const { user } = useContext(authContext).userHook;
    return ( user == null )
    ? children
    : <Navigate to='/private'/>
}

//export const PrivateRoute = ({children}:any) => children;
//export const PublicRoute = ({children}:any) => children;