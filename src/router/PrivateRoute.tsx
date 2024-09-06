
import { Navigate } from "react-router-dom"
import { useUserStore } from "../store/userStore"


export const PrivateRoute = ({children}:{children: React.ReactElement}) => {

    const{isLoged}= useUserStore()

    return (isLoged)
    ? children
    : <Navigate to="/rimac-challenge/"></Navigate>
}