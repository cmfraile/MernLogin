import { createContext } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import environment from "../../env/environment";
import { ClipLoader } from "react-spinners";
import userHook from "../hooks/user.hook";
export const authContext = createContext<any>({});
export const authProvider = ({children}:any) => {

    const { user , authCrud } = userHook();

    const loadBoolean = (user:any):boolean => ( user !== 'CheckingUser' ) ? true : false ;

    return(
        <GoogleOAuthProvider clientId={environment.googleClientID}>
            <authContext.Provider value={{user,authCrud}}>
                {(loadBoolean(user)) ? children : <ClipLoader/>}
            </authContext.Provider>
        </GoogleOAuthProvider>
    );

}
