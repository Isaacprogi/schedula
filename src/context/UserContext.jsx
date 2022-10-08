import {createContext,useReducer} from 'react'
import { useEffect,useState } from 'react'


export const UserContext = createContext()


export const userReducer = (state,action) => {
      switch(action.type) {
          case 'SET_USER':
            return {
                user: action.payload
            }
            default:
                return state
      } 
}



export const UserContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(userReducer, {user:JSON.parse(localStorage.getItem('user')) || null})
    const[block,setBlock] = useState(false)

    useEffect(()=>{
        if(state.user !== null || block){
            localStorage.setItem('user',JSON.stringify(state.user))
        }
    },[state.user,block])
       
   return(
    <UserContext.Provider value={{
        ...state,dispatch,block,setBlock
    }}>
    {children}
    </UserContext.Provider>
   ) 




}