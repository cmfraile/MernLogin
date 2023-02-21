import { useState , useEffect } from "react";
import environment from "../../env/environment";

const url:string = environment.backendURL;
type method = 'GET'|'POST'|'PUT'|'DELETE';
interface getFetch <T>{data:T|null,isLoading:boolean,error:any}
export interface useFetchDefaultObject { route:string , method:method , body:any , headers:any };

const useFetchHook = <queryData = any>() => {

    const [ state , setState ] = useState<getFetch<queryData>>({data:null,isLoading:false,error:null});

    const getFetch = async(argument:useFetchDefaultObject):Promise<void> => new Promise(
    async(resolve,reject) => {
        const { route , method , body , headers } = argument ;
        setState({...state,isLoading:true});
        await(await fetch(`${url}${route}`,{method,mode:'cors',body,headers})).json()
        .then(data => { setState((prevState:any) => {
            const newState = {data,isLoading:false,error:null};
            return newState
        }) ; resolve() })
        .catch(error => { setState((prevState:any) => {
            const newState = {data:null,isLoading:false,error};
            return newState
        }) ; reject() });
    });

    return({
        fetchState:state,
        getFetch
    });

}

export default useFetchHook