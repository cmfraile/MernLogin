import { useGoogleLogin } from '@react-oauth/google';
import { useContext, useEffect } from 'react';
import { authContext } from '../auth/context/auth.context';

const LoginOrRegister = () => {

    //const { authCrud } = useContext(authContext);

    const onSuccess = async({access_token}:{access_token:string}) => {
        //
    };

    const login = useGoogleLogin({onSuccess});

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