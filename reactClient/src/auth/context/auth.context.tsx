import { createContext, useEffect, useLayoutEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import environment from "../../env/environment";
import { ClipLoader } from "react-spinners";
import userHook from "../hooks/user.hook";

export const authContext = createContext<any>({});
export const authProvider = ({children}:any) => {

    const { session , authCrud } = userHook();

    const isChecking = ():boolean => {
        const { userState } = session;
        if(!userState){return false};
        return (userState == 'checkingUser') ? true : false;
    }

    return(
        <GoogleOAuthProvider clientId={environment.googleClientID}>
            <authContext.Provider value={{session,authCrud}}>
                {(isChecking()) ? <ClipLoader/> : children}
            </authContext.Provider>
        </GoogleOAuthProvider>
    );

}
