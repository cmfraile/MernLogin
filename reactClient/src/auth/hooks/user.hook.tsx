import { createContext, useReducer } from "react";

enum types {login = '[AUTH] Login',logout = '[AUTH] Logout'};
interface session {user:{email:string,name:string,picture:string},token:string};
interface action {type:string,payload?:session};

const AuthReducer = (state:session|null,action:action) => {
    if(!action){return state};
    const { type , payload } = action ; const { login , logout } = types;
    switch(type){
        case login  : return payload;
        case logout : return null;
    }
    return state;
}

const AuthContext = createContext<any>({});
export const AuthProvider = ({children}:any) => {
    const [ StateAuth , DispatchAuth ] = useReducer<any,any>(AuthReducer,null,() => {});
    return(<AuthContext.Provider value={{user:StateAuth}}>{children}</AuthContext.Provider>)
}