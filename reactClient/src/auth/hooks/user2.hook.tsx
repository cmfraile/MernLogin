import { fetchComponent } from "../../components/fetch";
import { useReducer } from "react";

enum authTypes { login = '[AUTH] Login' , check = '[AUTH] Check' , logout = '[AUTH] Logout' };
type userLoading = 'CheckingUser'|'NoUser'
interface session {user:{email:string,name:string,picture:string}|userLoading,token?:string};
interface action {type:authTypes,payload?:session};

const initialState:session = {user:'CheckingUser'};

const userHook = () => {

    const AuthReducer = (state:session = initialState,action:action) => {

        if(!action){return state};
        const loginOrCheck = () => {
            if(!payload){throw new Error('El login no posee un payload correcto')}
            localStorage.setItem('user',JSON.stringify(payload))
            return payload
        };
        
        const { type , payload } = action ; 
        const { login , check , logout } = authTypes;
        
        switch(type){
            case login  : return loginOrCheck() ;
            case check  : return loginOrCheck() ;
            case logout : { localStorage.clear() ; return {user:'NoUser'} } ;
            default : throw new Error() ;
        }
        
    }

    const [ user , dispatchUser ] = useReducer<React.Reducer<any,any>,any>(AuthReducer,initialState,() => {
        const caso = localStorage.getItem('user');
        if(!caso){
            return {user:'NoUser'} ;
        }else{
            const { token } = JSON.parse(caso);
            fetchCallback(token,'CHECK')
        }
    });

    const { login , check , logout } = authTypes;

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
            await fetchComponent({route:route(),method:'POST',body:undefined,headers})
            .then((payload:any) => {dispatchUser({type:check,payload})})
            .catch(() => {dispatchUser({type:logout})})
        }catch(err){console.log}

    }

    const authCrud = {
        loginAuth:async(token:string) => {try{await fetchCallback(token,'LOGIN')}catch(err){console.log}},
        check:async(token:string) => {try{await fetchCallback(token,'CHECK')}catch(err){console.log}},
        logout:() => {dispatchUser({type:logout})},
    }

}

export default userHook