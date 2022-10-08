import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../hooks/useUserContext'


const PrivateRoute = ({ children }) => {
    //this is a private routing to prevent unauthoized visits
    const navigate = useNavigate()
    const {user} = useUserContext()

    useEffect(() => {
         if(!user?.password){
             return navigate('/login')
         }
    }, [navigate,user?.password])


    return children;
}

export default PrivateRoute