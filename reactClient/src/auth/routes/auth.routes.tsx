import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { authContext } from "../context/auth.context";

const zoneBoolean = ({user}:any):boolean => (user == 'CheckingUser' || user == 'NoUser') ? false : true ;

export const PrivateRoute = ({children}:any) => {
    const { user } = useContext(authContext);
    return zoneBoolean(user)
    ? children
    : <Navigate to='/'/>
}

export const PublicRoute = ({children}:any) => {
    const { user } = useContext(authContext).userHook;
    return !zoneBoolean(user)
    ? children
    : <Navigate to='/private'/>
}
