import { createContext, useEffect } from "react";
import { GridLoader } from "react-spinners";
import authHook from "../hooks/auth.hook";
import { GoogleOAuthProvider } from "@react-oauth/google";
import environment from "../../env/environment";
import useFetchHook, { useFetchDefaultObject } from "../hooks/useFetch.hook";

export const authContext = createContext<any>({});
export const authProvider = ({children}:any) => {

    const authFetchProps:useFetchDefaultObject = {route:'/user/google',method:'GET',body:undefined,headers:undefined};

    return(
        <GoogleOAuthProvider clientId={environment.googleClientID}>
            <authContext.Provider value={{authFetch:useFetchHook(authFetchProps)}}>{children}</authContext.Provider>
        </GoogleOAuthProvider>
    );

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