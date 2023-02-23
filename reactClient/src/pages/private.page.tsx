import { useContext } from "react"
import { authContext } from "../auth/context/auth.context"

const Private = () => {

    const { session , authCrud } = useContext(authContext);

    return(
        <div className="container w-75">

            <div className="row"><div className="col">
                <h2>Private zone</h2>
                <p>{session.user.email}</p>
                <button onClick={() => {authCrud.logout()}}>Logout</button>
            </div></div>

        </div>
    )
}

export default Private