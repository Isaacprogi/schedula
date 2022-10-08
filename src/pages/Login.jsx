import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import useForm from "../hooks/useForm";
import { useUserContext } from "../hooks/useUserContext";

const Login = () =>{
    const{values:signUpInput,handleChange} = useForm({username:'',password:''})
    const{username,password} = signUpInput
    const {user} = useUserContext()
    const [error,setError] = useState()
    const navigate = useNavigate()

    const handleSignUp = (e) =>{
        e.preventDefault()
         if(!username || !password){
          return setError('all fields are required')
         }
         if(username !== user?.username && password !== user?.password){
            return setError('invalid credentials')
        }

        return navigate('/')

    }


    return <div className="login w-full bg-blue-100 flex flex-col items-center relative justify-center h-screen overflow-y-auto overflow-x-hidden px-4">
               <div className="absolute bg-blue-300 w-[10rem] -top-[35px] z-10 h-[5rem]  rounded-b-full -right-[60px]"></div>
               <div className="bg-gray-300 h-1/2 absolute bottom-0 w-full left-0"></div>
               <p className="text-gray-400 mb-1">Welcome back</p> 
            <form onSubmit={handleSignUp} className="h-[max-content] border border-blue-900 z-10 rounded-md bg-gray shadow-md min-w-[15rem] w-[50%] max-w-[35rem] flex flex-col p-4 items-center justify-center">
                 <input name="username" placeholder="username.." className="w-full mb-3 outline-none p-3 bg-white rounded-md" type="text" value={username} onChange={(e)=>{
                     setError('')
                     handleChange(e)}}/>
                 <input name="password" placeholder="password.." className="w-full mb-3 outline-none p-3 bg-white rounded-md" type="text" value={password} onChange={(e)=>{
                     setError('')
                     handleChange(e)}}/>
                 <input type="submit" className="bg-blue-400 hover:bg-gray-500 py-3 text-white cursor-pointer px-6 rounded-md" />
            </form>
                 {error && <div className="z-10">{error}</div>}
               <Link className="z-10" to='/signup'><p className="text-gray-400  mt-3 cursor-pointer">Register</p></Link> 
          </div>
}

export default Login