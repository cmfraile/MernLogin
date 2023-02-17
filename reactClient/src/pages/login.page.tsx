import { GoogleLogin } from '@react-oauth/google';

const LoginOrRegister = () => {

    return(
        <div className="container">

            <div className="row"><div className="col">
                <h2>Login or Register</h2>
                <GoogleLogin onSuccess={console.log}/>
            </div></div>

        </div>
    )
}

export default LoginOrRegister