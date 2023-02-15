import { useState , useEffect } from "react";
import environment from "../../env/environment";

const url:string = environment.backendURL;
interface authData { logged:boolean|undefined , token:string , googleUserData:any };
export interface getFetch {data:authData|null,isLoading:boolean,error:any} ; const fetchArgument:argumentObject = {route:'',method:'GET',body:undefined,headers:undefined};

// const url:string = environment.backendURL ;
type method = 'GET'|'POST'|'PUT'|'DELETE';
interface argumentObject {route:string,method:method,body:any,headers:any};
export const initialState = {data:null,isLoading:true,error:null};

export const useFetchHook = ({route,method,body,headers} = fetchArgument) => {

    const [ state , setState ] = useState<getFetch>(initialState);

    const getFetch = async():Promise<void> => {

        setState({...state,isLoading:true});
        await(await fetch(`${url}${route}`,{method,mode:'cors',body,headers})).json()
        .then(data => {setState({data,isLoading:false,error:null}) })
        .catch(error => {setState({data:null,isLoading:false,error}) });

    }

    useEffect(() => { getFetch() },[url]);
    
    return({fetchState:state,getFetch});
    
}