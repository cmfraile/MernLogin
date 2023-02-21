import { useContext } from "react"
import { authContext } from "../auth/context/auth.context"

const Private = () => {

    const { user } = useContext(authContext).userHook

    return(
        <div className="container">

            <div className="row"><div className="col">
                <h2>Private zone</h2>
                <p>{JSON.stringify(user)}</p>
            </div></div>

        </div>
    )
}

export default Private