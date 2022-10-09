import { FaArrowAltCircleUp } from "react-icons/fa";
import { useState } from 'react'
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    return <div className='flex-auto   overflow-auto bg-gray-800'>

        <div className="w-full max-w-[1000px] min-h-[20rem] mx-auto gap-3 h-full  overflow-hidden relative grid sm:place-content-center overflow-auto  p-5 sm:grid-cols-2 ">
            <div className="h-full w-full   flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-bold text-white px-2 rounded-md bg-gradient-to-r from-cyan-600">Contact Me</h1>
                <span className="text-gray-400">You can send me a message</span>
                <form method="POST" action="https://getform.io/f/f185342c-b370-4d1c-a743-4c8b1a2cfa9d" className="w-full h-[max-content] p-2 flex flex-col items-center justify-center">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" placeholder="name.." className="w-full px-1 outline-none bg-blue-200 rounded-sm mb-1 h-[2rem]" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="emai" placeholder="email.." className="w-full px-1 outline-none bg-blue-200 rounded-sm mb-1 h-[2rem]" />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} name='message' className="resize-none h-[10rem] outline-none px-1 bg-blue-100 rounded-sm w-full" ></textarea>
                    <button type="submit" className="bg-gray-400 mt-3 sm:mt-0 w-[9rem] sm:absolute top-[50%] right-[8rem] hover:bg-blue-300  text-white cursor-pointer py-2 px-10 rounded-sm">
                        SEND
                        <FaArrowAltCircleUp className="rotate-[30deg]" />
                    </button>
                </form>

            </div>
            <div className=" hidden sm:block">
                <div className=" w-full h-full flex items-center justify-center">
                </div>
            </div>
        </div>
    </div>

}

export default Contact;