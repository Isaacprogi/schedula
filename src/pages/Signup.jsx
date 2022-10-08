import useForm from "../hooks/useForm";
import { useUserContext } from "../hooks/useUserContext";
import { useState } from "react";
import{Link,useNavigate} from 'react-router-dom'


const Signup = () =>{
     const{values:signUpInput,handleChange} = useForm({firstname:'',lastname:'',username:'',email:'',password:''})
     const{firstname,lastname,username,email,password} = signUpInput
     const {dispatch} = useUserContext()
     const [error,setError] = useState()
     const navigate = useNavigate()

     const handleSignUp = (e) =>{
          e.preventDefault()
          if(!firstname || !lastname || !username || !email || !password){
           return setError('all fields are required')
          }
          dispatch({
               type:'SET_USER',
               payload:{firstname,lastname,username,email,password}
          })
          return navigate('/login')
     }
      
     




    return <div className="login w-full bg-blue-100 flex flex-col items-center relative justify-center h-screen overflow-y-auto overflow-x-hidden px-4">
               <div className="absolute bg-blue-300 w-[10rem] -top-[35px] z-10 h-[5rem]  rounded-b-full -right-[60px]"></div>
               <div className="bg-gray-300 h-1/2 absolute bottom-0 w-full left-0"></div>
               <p className="text-gray-400 mb-1">Welcome back</p> 
            <form onSubmit={handleSignUp} className="h-[max-content] border border-blue-900 z-10 rounded-md bg-gray shadow-md min-w-[15rem] w-[50%] max-w-[35rem] flex flex-col p-4 items-center justify-center">
                 <input name="firstname" placeholder="firstname.." className="w-full mb-3 outline-none p-3 bg-white rounded-md" type="text" value={firstname} onChange={handleChange}/>
                 <input name="lastname" placeholder="lastname.." className="w-full mb-3 outline-none p-3 bg-white rounded-md" type="text" value={lastname} onChange={handleChange}/>
                 <input name="username" placeholder="username.." className="w-full mb-3 outline-none p-3 bg-white rounded-md" type="text" value={username} onChange={handleChange}/>
                 <input name="email" placeholder="email.." className="w-full mb-3 outline-none p-3 bg-white rounded-md" type="text" value={email} onChange={handleChange}/>
                 <input name="password" placeholder="password.." className="w-full mb-3 outline-none p-3 bg-white rounded-md" type="text" value={password} onChange={handleChange}/>
                 <input type="submit" className="bg-blue-400 hover:bg-gray-500 py-3 text-white cursor-pointer px-6 rounded-md" />
            </form>
                {error && <div>{error}</div>}
               <Link className="z-10" to='/login'><p className="text-gray-400  mt-3 cursor-pointer">Login</p></Link> 
          </div>
}

 export default Signup