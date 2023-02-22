import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom";
import { authContext } from "../context/auth.context";

const isPublic = (user:any):boolean => (user == 'CheckingUser' || user == 'NoUser') ? true : false ;

export const PrivateRoute = ({children}:any) => {
    const { user } = useContext(authContext);
    return (isPublic(user))
    ? children
    : <Navigate to='/'/>
}

export const PublicRoute = ({children}:any) => {
    const { user } = useContext(authContext);
    return (!isPublic(user))
    ? children
    : <Navigate to='/private'/>
}
