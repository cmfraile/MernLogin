import { useReducer } from "react";

interface auth {logged:boolean} ; const initialState = {logged:false};
enum acts {login = '[ AUTH ] Login' , logout = '[ AUTH ] Logout'} ; interface action { type:acts , payload?:auth }

const authReducer = ( state:auth  , action:action ) => {

    if(!action){return state};

    const { type , payload } = action ;
    const { login , logout } = acts ;
    switch(type){
        //case login : ; break ;
        case logout : return {logged:false} ;
        default : throw new Error('Error en el agente de autenticación');
    };

}

const authHook = () => {

    const dispatchCallback = () => {
        //Este callback es el que se inicia para determinar desde el Token que el usuario es válido o no
        return initialState
    }

    const { login , logout } = acts;
    const [ auth , authDispatch ] = useReducer(authReducer,initialState,dispatchCallback);
    
    const crud = {
        logout:() => {authDispatch({type:logout})}
    }

    return ({auth,authCrud:auth})
}

export default authHook ;