import { useContext } from "react"
import { authContext } from "../context/auth.context";
import { session } from "../hooks/user.hook";
import { Navigate } from "react-router-dom";

const isPublic = (session:session):boolean => {
    const { userState } = session;
    if(!userState){ return false };
    if(userState == 'guest'){return true};
    if(userState == 'user'){return false};
    return false
};

export const PrivateRoute = ({children}:any) => {
    const { session } = useContext(authContext);
    return (!isPublic(session))
    ? children
    : <Navigate to='/'/>
}

export const PublicRoute = ({children}:any) => {
    const { session } = useContext(authContext);
    return (isPublic(session))
    ? children
    : <Navigate to='/private'/>
}