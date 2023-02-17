import { useEffect } from "react";
import useFetchHook from "./useFetch.hook";

interface authData { token:string|null }

const authHook = () => {

    const headers = new Headers();
    const { data , isLoading , error , getFetch } = useFetchHook<authData>({route:'user',method:'GET',body:undefined,headers});

    return({
        token:data.token||null,
        isLoading,
        error:(error) ? true : false
    })

}

export default authHook ;