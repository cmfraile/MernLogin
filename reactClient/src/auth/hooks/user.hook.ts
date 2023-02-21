import { useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import useFetchHook from "./useFetch.hook";
import { useFetchDefaultObject } from "./useFetch.hook";

interface user {user:{email:string,given_name:string,picture:string},token:string};

const userHook = (navigate:NavigateFunction) => {

    const [ user , setFullUser ] = useState<user|null|undefined>(undefined);
    const { fetchState , getFetch } = useFetchHook();
    const argumentFetch:useFetchDefaultObject = {route:'user/checkToken',method:'GET',body:undefined,headers:undefined}

    useEffect(() => {
        const user:any = (localStorage.getItem('user')) ? JSON.parse(`${localStorage.getItem('user')}`) : null ;
        if(!user){setFullUser(null);return};
        const fetchArgument = {...argumentFetch,...{headers:user.token}};
        getFetch(fetchArgument)
        .then(() => { setFullUser(fetchState.data) ; localStorage.setItem('user',JSON.stringify(user)) } )
        .catch(() => { setFullUser(null) ; localStorage.clear() } )
    },[])

    return({user,setUser:setFullUser});

}

export default userHook