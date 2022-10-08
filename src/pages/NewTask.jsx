import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect} from 'react';
import { FaPlus, FaMinus,FaArrowLeft } from 'react-icons/fa'
import { useGlobalContext } from '../hooks/useGlobalContext';


const NewTask = () => {
    const navigate = useNavigate()
    const[red,setRed]= useState(false)


    const { date, setDate, todoInput,setTodos,setEvent,
        eventInput, type, setType,todos,event,
        hours, setHours, minutes, setMinutes, period, setPeriod, setSwitchList } = useGlobalContext()

     const[active,setActive] = useState(JSON.parse(localStorage.getItem('navActive'))||false)

     useEffect(()=>{
      localStorage.setItem('navActive',active)
     },[active])

    const todoBox = () => {
        return <input type="text" name='todo' ref={todoInput} onChange={()=>setRed(false)} placeholder='todo...' className='w-full bg-gray-200 outline-none px-2 h-[4rem] min-h-[4rem] border border-blue-100 shadow-md rounded-md ' />
    }

    const eventBox = () => {
        return <input type="text" name='event' ref={eventInput} onChange={()=>setRed(false)} placeholder='event...' className='w-full bg-gray-200 outline-none px-2 h-[4rem] min-h-[4rem] border border-blue-100 shadow-md rounded-md ' />
    }


    const handlePeriod = () => setPeriod(!period)


    const handleHours = (increment) => {
        if (increment === true) {
            if (hours >= 12) {
                return setHours(12)
            }
            setHours(hours + 1)
        }
        if (increment === false) {
            if (hours <= 0) {
                return setHours(0)
            }
            setHours(hours - 1)
        }
    }

    const handleMinutes = (increment) => {
        if (increment === true) {
            if (minutes >= 59) {
                return setMinutes(59)
            }
            setMinutes(minutes + 1)
        }
        if (increment === false) {
            if (minutes <= 0) {
                return setMinutes(0)
            }
            setMinutes(minutes - 1)
        }
    }



    const handleAdd =()=> {       
        if (type === 'todo') {
            if(!todoInput.current.value || !date){
                setRed(!red);
                return null
            }
            setSwitchList(true)
            setTodos([{ id: todos.length + 1, clicked: false, period:period?'AM':'PM',  date:date, time:hours+':'+minutes, todo: todoInput.current.value, completed: false }, ...todos])
            todoInput.current.value = ''
            return active? navigate('/'):null
        }
        if (type === 'event') {
            if(!eventInput.current.value && !date){
                setRed(!red);
                return null
            }
            setSwitchList(false)
            setEvent([{ id: event.length + 1, clicked: false, period:period?'AM':'PM', date:date, time:hours+':'+minutes, event: eventInput.current.value, completed: false }, ...event])
            eventInput.current.value = ''
            return active? navigate('/'):null
        }
    
    }

    return <div className='flex flex-col w-full h-screen '>
        <div className="flex-none text-white flex items-center relative  h-[5rem] bg-[#373152]">
            <span className='pl-3 flex-1 text-2xl md:hidden cursor-pointer' onClick={() => navigate('/')}><IoIosArrowBack /></span>
            <span className='flex-1 flex items-center justify-center'>New Task</span>
            <span className='flex-1 md:hidden'></span>
            <span onClick={()=>setActive(!active)} className={!active?'absolute cursor-pointer md:hidden right-0 bg-gray-500 w-[4rem] flex items-center justify-center rounded-l-full h-[3rem]':'absolute cursor-pointer md:hidden right-0 bg-blue-500 w-[4rem] flex items-center justify-center rounded-l-full h-[3rem]'}>
                <FaArrowLeft />
            </span>
        </div>
        <div className="flex-auto bg-white rounded-md overflow-auto w-full h-full   p-5 flex flex-col items-center justify-start">
            <div className="cal flex flex-col w-full min-w-[13rem] relative  max-w-[20rem] h-[max-content] items-center justify-center">
                {red && <div className="red w-3 h-3 bg-red-400 rounded-full absolute top-0 right-0"></div>}
            <div className=" flex-none mr-2 flex flex-col items-center justify-center">
                <span className=' text-gray-400'>{!date?new Date().toLocaleDateString():date}</span>
                <span className='text-gray-300'> {type === 'todo' ? 'todo..' : 'event...'}</span>
            </div>
                <div className="flex-none bg-pink-10 h-[5rem] flex items-center justify-evenly">
                    <span className=' w-[12rem] flex overflow-hidden border h-[3rem] rounded-full'>
                        <span onClick={() => setType('todo')} className="flex-1 hover:bg-gray-100 cursor-pointer flex items-center border-r-2 justify-center bg-white">
                            Todo
                        </span>
                        <span onClick={() => setType('event')} className="flex-1 hover:bg-gray-100 cursor-pointer flex bg-white items-center justify-center  ">
                            Event
                        </span>
                    </span>
                </div>
                <input onClick={()=>setRed(false)} value={date} onChange={(e)=>{
                    setDate(e.target.value)}} type="date" className='cursor-pointer  p-1 rounded-md' />
                <div className=" flex w-full  h-[4rem] mb-2  ">
                    <div className=" flex-auto grid grid-cols-5 gap-1 py-2 ">
                        <div onClick={() => handlePeriod()} className="bg-black text-white shadow-md flex items-center justify-center cursor-pointer rounded-md overflow-hidden">{period ? 'AM' : 'PM'}</div>
                        <div className=" bg-blue-100 flex col-span-2 ">
                            <span className="bg-blue-400 shadow-md  flex-1 rounded-md text-gray-300 cursor-pointer overflow-hidden hover:text-black ">
                                <FaMinus onClick={() =>{
                                    setRed(false)
                                    handleHours(false)
                                }} className='w-full h-full p-2  ' />
                            </span>
                            <span className="bg-blue-100 flex-1 text-[1.5rem] flex items-center justify-center">
                                {hours}
                            </span>
                            <span className="bg-gray-600 flex-1 shadow-md  rounded-md cursor-pointer  text-gray-300 overflow-hidden hover:text-black ">
                                <FaPlus onClick={() =>{
                                    setRed(false)
                                    handleHours(true)
                                }} className='w-full h-full p-2  ' />
                            </span>
                        </div>
                        <div className=" bg-blue-100 flex col-span-2">
                            <span className="bg-blue-400  flex-1 shadow-md rounded-md text-gray-300 cursor-pointer overflow-hidden hover:text-black ">
                                <FaMinus onClick={() =>{
                                    setRed(false)
                                    handleMinutes(false)
                                }} className='w-full h-full p-2 ' />
                            </span>
                            <span className="bg-blue-100 flex-1 text-[1.5rem] flex items-center justify-center">
                                {minutes}
                            </span>
                            <span className="bg-gray-600 flex-1 shadow-md  rounded-md cursor-pointer  text-gray-300 overflow-hidden hover:text-black ">
                                <FaPlus onClick={() =>{
                                    setRed(false)
                                    handleMinutes(true)
                                }}  className='w-full h-full p-2  ' />
                            </span>
                        </div>


                    </div>
                </div>
                {type === 'todo' ? todoBox() : eventBox()}



                <div onClick={handleAdd} className="cursor-pointer rounded-md mt-4 overflow-hidden lg:hover:bg-gray-900 bg-[#373152] w-full h-[4rem] bg-white text-gray-400 flex items-center justify-center">
                    ADD
                </div>
            </div>

        </div>
    </div>
}

export default NewTask;