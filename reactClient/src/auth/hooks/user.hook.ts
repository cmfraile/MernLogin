import { useEffect, useLayoutEffect, useState } from "react";
import useFetchHook from "./useFetch.hook";
import { useFetchDefaultObject } from "./useFetch.hook";

interface user {user:{email:string,given_name:string,picture:string},token:string};

const userHook = () => {

    const [ user , setFullUser ] = useState<user|null|undefined>(undefined);
    const { fetchState , getFetch } = useFetchHook();
    const argumentFetch:useFetchDefaultObject = {route:'user/checkToken',method:'GET',body:undefined,headers:undefined}

    const setUser = (data:any) => { console.log(data) ; setFullUser(data) ; localStorage.setItem('user',JSON.stringify(data)) };

    useEffect(() => {
        localStorage.clear()
        const user:any = (localStorage.getItem('user')) ? JSON.parse(`${localStorage.getItem('user')}`) : null ;
        if(!user){ setFullUser(null) ; return };
        const fetchArgument = {...argumentFetch,...{headers:user.token}};
        getFetch(fetchArgument)
        .then(() => { setUser(fetchState.data) } )
        .catch(() => { setFullUser(null) ; localStorage.clear() } )
    },[])

    return({user,setUser});

}

export default userHook