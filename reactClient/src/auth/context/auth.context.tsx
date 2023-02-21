import { createContext } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import environment from "../../env/environment";
import useFetchHook from "../hooks/useFetch.hook";
import { useNavigate } from "react-router-dom";
import userHook from "../hooks/user.hook";
import { ClipLoader } from "react-spinners";
export const authContext = createContext<any>({});
export const authProvider = ({children}:any) => {

    const navigate = useNavigate();
    const { user , setUser } = userHook(navigate);

    return(
        <GoogleOAuthProvider clientId={environment.googleClientID}>
            <authContext.Provider value={{authFetch:useFetchHook(),userHook:{user,setUser}}}>
                {(user !== undefined) ? children : <ClipLoader/>}
            </authContext.Provider>
        </GoogleOAuthProvider>
    );

}
