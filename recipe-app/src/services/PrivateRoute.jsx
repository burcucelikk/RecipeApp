import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"


const PrivateRoute = ({element}) => {

    const {isAuthenticated} = useContext(AuthContext)



    return isAuthenticated ? element : <Navigate to="/login-page" />
}


export default PrivateRoute