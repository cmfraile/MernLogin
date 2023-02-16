import { useEffect } from "react";
import useFetchHook from "./useFetch.hook";

interface authData { token:string|null }

const authHook = () => {

    const headers = new Headers();
    const { data , isLoading , error , getFetch } = useFetchHook<authData>({route:'user',method:'GET',body:undefined,headers});

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){headers.append('token',token);getFetch()};
    },[]);

    return({token:data.token||null,isLoading,error})

}

export default authHook ;