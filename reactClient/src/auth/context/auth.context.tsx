import { createContext, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import environment from "../../env/environment";
import useFetchHook from "../hooks/useFetch.hook";
import { ClipLoader } from "react-spinners";

export const authContext = createContext<any>({});
export const authProvider = ({children}:any) => {

    return(
        <GoogleOAuthProvider clientId={environment.googleClientID}>
            <authContext.Provider value={undefined}>{children}</authContext.Provider>
        </GoogleOAuthProvider>
    );

}
