import { createContext, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import environment from "../../env/environment";
import { ClipLoader } from "react-spinners";
import userHook from "../hooks/user.hook";
import { useNavigate } from "react-router-dom";
import { session } from "../hooks/user.hook";

export const authContext = createContext<any>({});
export const authProvider = ({children}:any) => {

    return(
        <GoogleOAuthProvider clientId={environment.googleClientID}>
            <authContext.Provider value={{}}>
                {children}
            </authContext.Provider>
        </GoogleOAuthProvider>
    );

}

/*
export const authProvider = ({children}:any) => {

    const navigate = useNavigate()
    const { session , authCrud } = userHook(navigate);

    const isChecking = (session:session):boolean => {
        if(!session){return true}
        return (session.userState == 'checkingUser') ? true : false ;
    };

    const LoaderComponent = () => <div className="m-5"><ClipLoader/></div>

    return(
        <GoogleOAuthProvider clientId={environment.googleClientID}>
            <authContext.Provider value={{session,authCrud,navigate}}>
                {(isChecking(session)) ? <LoaderComponent/> : children}
            </authContext.Provider>
        </GoogleOAuthProvider>
    );

}
*/
