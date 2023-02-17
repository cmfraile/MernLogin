import { GoogleLogin } from '@react-oauth/google';
import { useContext } from 'react';
import { authContext } from '../auth/context/auth.context';

const LoginOrRegister = () => {

    const { fetchState , setFetchProps , getFetch } = useContext(authContext).authFetch ;

    const onSuccess = ({credential}:any) => {console.log(credential)};

    return(
        <div className="container">

            <div className="row"><div className="col">
                <h2>Login or Register</h2>
                <GoogleLogin 
                    onSuccess={onSuccess}
                    size={'large'}/>
            </div></div>

        </div>
    )
}

export default LoginOrRegister