import { createContext } from "react";
import { GridLoader } from "react-spinners";
import authHook from "../hooks/auth.hook";
import { GoogleOAuthProvider } from "@react-oauth/google";
import environment from "../../env/environment";

export const authContext = createContext<any>({});
export const authProvider = ({children}:any) => {

    //const { token , isLoading , error } = authHook();

    return(
        <GoogleOAuthProvider clientId={environment.googleClientID}>
            <authContext.Provider value={{}}>{children}</authContext.Provider>
        </GoogleOAuthProvider>
    )

    /*
    return(
        (token !== null && !isLoading)
        ? <authContext.Provider value={{token,isLoading}}>{children}</authContext.Provider>
        : <div className="container">
            {(error)
            ? <GridLoader color="#17FF00"/>
            : <GridLoader color="#FF0000"/>
            }
        </div>
    )
    */

}