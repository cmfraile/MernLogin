import { useContext } from "react"
import { authContext } from "../auth/context/auth.context"

const Private = () => {

    const { user } = useContext(authContext)

    return(
        <div className="container w-75">

            <div className="row"><div className="col">
                <h2>Private zone</h2>
                <p>{user.user.email}</p>
            </div></div>

        </div>
    )
}

export default Private