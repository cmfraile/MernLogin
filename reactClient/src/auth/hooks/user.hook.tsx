import { fetchComponent } from "../../components/fetch";
import { useEffect, useLayoutEffect, useReducer } from "react";
import { NavigateFunction } from "react-router-dom";

enum authTypes { login = '[AUTH] Login' , check = '[AUTH] Check' , logout = '[AUTH] Logout' };
export type userLoading = 'user'|'checkingUser'|'guest';
export interface session {userState:userLoading,user?:{email:string,name:string,picture:string},token?:string};
interface action {type:authTypes,payload?:session};

const initialState:session = {userState:'checkingUser'};

const userHook = () => {

    const fetchCallback = async(token:string,loginOrCheck:'LOGIN'|'CHECK'):Promise<void> => {

        const route = ():string => {
            let string = 'user/'
            switch(loginOrCheck){
                case 'LOGIN' : string = string+'google' ; break ;
                case 'CHECK' : string = string+'checkToken' ; break ;
            }
            return string
        }

        try{
            const headers = {token};
            if(loginOrCheck == 'CHECK'){dispatchSession({type:authTypes.check})}
            await fetchComponent({route:route(),method:'POST',body:undefined,headers})
            .then((payload:any) => {dispatchSession({type:authTypes.login,payload})})
            .catch(() => {dispatchSession({type:authTypes.logout})})
        }catch(err){console.log}

    }

    const AuthReducer = (state:session = initialState,action:action) => {
        
        if(!action){return state};
        
        const { type , payload } = action ; 
        const { login , check , logout } = authTypes;
        
        switch(type){
            case login  : {
                const newState = { userState:'user' , ...payload } ;
                localStorage.setItem('session',JSON.stringify(newState));
                return newState;
            };
            case check  : {
                return { ...state , userState:'checkingUser' };
            };
            case logout : {
                localStorage.removeItem('session');
                return { userState:'guest' };
            };
            default : return state ;
        }
        
    }

    const authCrud = {
        loginAuth:async(token:string) => {try{await fetchCallback(token,'LOGIN')}catch(err){console.log}},
        checkAuth:async(token:string) => {try{await fetchCallback(token,'CHECK')}catch(err){console.log}},
        logout:() => {dispatchSession({type:authTypes.logout})},
    }

    const [ session , dispatchSession ] = useReducer<React.Reducer<any,any>>(AuthReducer,initialState);

    useEffect(() => {
        const caso = localStorage.getItem('session');
        if(!caso){authCrud.logout()}else{
            const { token } = JSON.parse(caso);
            if(!token){authCrud.logout()}
            authCrud.checkAuth(token)
        }
    },[]);

    useEffect(() => {console.log(session)},[session])

    return({session , authCrud})

}

export default userHook