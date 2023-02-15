import { useReducer } from "react";
import { useFetchHook } from "./useFetch.hook";
import { getFetch as typeAuthFetch , initialState } from "./useFetch.hook";

/*
enum acts {login = '[ AUTH ] Login' , logout = '[ AUTH ] Logout'};
interface action { type:acts , payload:typeAuthFetch }
*/

/*
const authReducer = ( state:typeAuthFetch = initialState , action:action ) => {

    if(!action){return state};

    const { type , payload } = action ;
    const { login , logout } = acts ;
    switch(type){
        case login : ; break ;
        case logout : return {...state,data:null,isLoading:false} ;
        default : throw new Error('Error en el agente de autenticación');
    };

}
*/

const authHook = () => {
    const { fetchState } = useFetchHook();
    return ({...fetchState})
}

export default authHook ;