import { useState , useEffect } from "react";
import environment from "../../env/environment";

const url:string = environment.backendURL;
type method = 'GET'|'POST'|'PUT'|'DELETE';
interface getFetch <T>{data:T|null,isLoading:boolean,error:any}
interface useFetchDefaultObject { route:string , method:method , body:any , headers:any };
const useFetchDefaultArgument:useFetchDefaultObject = { route:'',method:'GET',body:undefined,headers:undefined };

const useFetchHook = <queryData>({route,method,body,headers} = useFetchDefaultArgument):any => {

    const [ state , setState ] = useState<getFetch<queryData>>({data:null,isLoading:true,error:null});

    const getFetch = async():Promise<void> => {

        setState({...state,isLoading:true});
        await(await fetch(`${url}${route}`,{method,mode:'cors',body,headers})).json()
        .then(data => {setState({data,isLoading:false,error:null}) })
        .catch(error => {setState({data:null,isLoading:false,error}) });

    }

    //useEffect(() => { getFetch() },[url]);
    
    return({...state,getFetch});

}

export default useFetchHook