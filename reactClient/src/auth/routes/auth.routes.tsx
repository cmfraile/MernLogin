import { useContext } from "react"
import { authContext } from "../context/auth.context";
import { session } from "../hooks/user.hook";

/*
const isPublic = (session:session):boolean => {
    const { userState } = session;
    if(!userState){ return false };
    if(userState == 'guest'){return true};
    if(userState == 'user'){return false};
    return false
};

export const PrivateRoute = ({children}:any) => {
    const { session , navigate } = useContext(authContext);
    return (!isPublic(session))
    ? children
    : navigate('/')
}

export const PublicRoute = ({children}:any) => {
    const { session , navigate } = useContext(authContext);
    return (isPublic(session))
    ? children
    : navigate('/private')
}
*/

export const PrivateRoute = ({children}:any) => children ;
export const PublicRoute =  ({children}:any) => children ;