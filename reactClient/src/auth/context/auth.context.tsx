import { createContext } from "react";
import { GridLoader } from "react-spinners";
import authHook from "../hooks/auth.hook";

export const authContext = createContext<any>({});
export const authProvider = ({children}:any) => {

    const { data , isLoading , error } = authHook();

    return(
        (data !== null && !isLoading)
        ? <authContext.Provider value={{logged,authCrud}}>{children}</authContext.Provider>
        : <div className="container">
            {(error)
            ? <GridLoader color="#17FF00"/>
            : <GridLoader color="#FF0000"/>
            }
        </div>
    )
}