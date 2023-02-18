import { useGoogleLogin } from '@react-oauth/google';
import { useContext } from 'react';
import { authContext } from '../auth/context/auth.context';

const LoginOrRegister = () => {

    const { fetchState , setFetchProps , getFetch } = useContext(authContext).authFetch ;

    const onSuccess = async({access_token}:{access_token:string}) => {
        const headers = {'token':access_token};
        setFetchProps(headers);
        getFetch();
    };

    const login = useGoogleLogin({onSuccess})

    return(
        <div className="container">

            <div className="row"><div className="col">
                <h2>Login or Register</h2>
                <button onClick={() => {login()}} >Login/register with google</button>
                <br />
                <code>{JSON.stringify(fetchState)}</code>
            </div></div>

        </div>
    )
}

export default LoginOrRegister