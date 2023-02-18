import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useContext } from 'react';
import { authContext } from '../auth/context/auth.context';

const LoginOrRegister = () => {

    const { fetchState , setFetchProps , getFetch } = useContext(authContext).authFetch ;
    const onSuccess = (resp:any) => {console.log(resp)};
    const login = useGoogleLogin({onSuccess})

    return(
        <div className="container">

            <div className="row"><div className="col">
                <h2>Login or Register</h2>
                <button onClick={() => {login()}} >Lorem ipsum dolor sit amet.</button>
            </div></div>

        </div>
    )
}

export default LoginOrRegister