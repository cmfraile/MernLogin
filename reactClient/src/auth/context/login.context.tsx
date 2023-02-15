import { createContext } from "react";
import authHook from "../hooks/auth.hook";

export const authContext = createContext<any>({});
export const authProvider = ({children}:any) => {
    return(<authContext.Provider value={{...authHook()}}>{children}</authContext.Provider>)
}