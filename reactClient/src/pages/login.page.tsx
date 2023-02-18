import { useGoogleLogin } from '@react-oauth/google';
import { useContext, useState } from 'react';
import { json } from 'react-router-dom';
import { authContext } from '../auth/context/auth.context';

const LoginOrRegister = () => {

    const { fetchState , setFetchProps , getFetch } = useContext(authContext).authFetch ;

    const onSuccess = ({access_token}:any) => {
        const headers = new Headers({token:access_token}); headers.append('token',access_token);
        setFetchProps((props:any) => ({...props,headers}));
        getFetch();
    };
    const login = useGoogleLogin({onSuccess})

    return(
        <div className="container">

            <div className="row"><div className="col">
                <h2>Login or Register</h2>
                <button onClick={() => {login()}} >Login/register with google</button>
            </div></div>

        </div>
    )
}

export default LoginOrRegister