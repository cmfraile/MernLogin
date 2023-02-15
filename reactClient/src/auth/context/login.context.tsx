import { createContext } from "react";

export const loginContext = createContext<any>({});
export const todoProvider = ({children}:any) => {
    return(<loginContext.Provider value={{}}>{children}</loginContext.Provider>)
}