import { useGoogleLogin } from '@react-oauth/google';
import { useContext, useEffect } from 'react';
import { authContext } from '../auth/context/auth.context';
import { useFetchDefaultObject } from '../auth/hooks/useFetch.hook';

const LoginOrRegister = () => {

    const { fetchState , getFetch } = useContext(authContext).authFetch;
    const { setUser } = useContext(authContext).userHook;
    const argumentFetch:useFetchDefaultObject = {route:'user/google',method:'POST',body:undefined,headers:undefined}

    const onSuccess = async({access_token}:{access_token:string}) => {
        const headers = {'token':access_token};
        getFetch({...argumentFetch,headers})
        .then(() => {setUser(fetchState.data)})
    };

    const login = useGoogleLogin({onSuccess});

    return(
        <div className="container">

            <div className="row"><div className="col">
                <h2>Login or Register</h2>
                <button onClick={() => {login()}} >Login/register with google</button>
                <br />
                <code>{JSON.stringify(localStorage.getItem('user'))}</code>
                <br />
                <code>{JSON.stringify(fetchState)}</code>
            </div></div>

        </div>
    )
}

export default LoginOrRegister