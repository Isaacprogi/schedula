import NavBar from '../components/NavBar'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Drawer from '../components/Drawer'
import NewTask from '../pages/NewTask'
import { useEffect } from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'
import{useRef} from 'react'




const Home = () => {
    const navigate = useNavigate()
    const [rotate, setRotate] = useState(false)
    const handleRotate = () => setRotate(!rotate)
    const [nav, setNav] = useState(false)
    const [editing, setEditing] = useState(false)
    const search = useRef('')
    const editInput = useRef(null)
    const[current,setCurrent] = useState('')

    const {todos,setTodos, event, setEvent,switchList, 
        setSwitchList} = useGlobalContext()


    const [filteredTodos, setFilteredTodos] = useState(todos)


    useEffect(() => {
            localStorage.setItem('todo', JSON.stringify(todos))
            setFilteredTodos(todos)
    }, [todos])

    const [filteredEvents, setFilteredEvents] = useState(event)

    useEffect(() => {
            localStorage.setItem('event', JSON.stringify(event))
            setFilteredEvents(event)
    }, [event])


    const handleFilters = () => {
        const keyword = search.current.value
        if (keyword !== '') {
            const results = switchList ? todos.filter(item => {
                return item.todo.toLowerCase().startsWith(keyword?.toLowerCase())
            }) : event.filter(item => {
                return item.event.toLowerCase().startsWith(keyword?.toLowerCase())
            })
            switchList ? setFilteredTodos(results) : setFilteredEvents(results)
        }
        else {
            switchList ? setFilteredTodos(todos) : setFilteredEvents(event)
        }
    }
 
    useEffect(()=>{
       const updateContainer = document.getElementById('update-container')
       if(updateContainer && current !== ''){
        console.log(current)
         updateContainer.innerText = current?.todo?current.todo:current?.event?current.event:''
       }
    },[current,editing])

    const todoList = (() => {
        return (switchList && editing) ? <div  className='w-full h-full overflow-auto flex flex-col'>
                <span className=' flex cursor-pointer w-full bg-gray-100 items-start justify-end'><FaTimes onClick={() => handleEdit(true)} className='bg-white hover:text-white hover:bg-gray-400 cursor-pointer text-2xl' /></span>
                <textarea id='update-container'  type="text" ref={editInput}  className='flex-auto min-h-[10rem] bg-gray-100 resize-none p-2 outline-none' />
                <span onClick={() => handleUpdate(current, true)} className="add hover:bg-gray-900 cursor-pointer lg:hover:bg-gray-500 flex-none h-[5rem] flex items-center text-white justify-center bg-gray-700 relative ">Update </span>
            </div>
        : filteredTodos?.map((todo) => {
            return <div key={todo?.id} className={!todo?.completed ? "todo px-1 relative w-full lg:hover:bg-gradient-to-r rounded-md from-cyan-100 to-blue-300 cursor-pointer lg:hover:text-blue-400 h-[max-content] break-all  flex items-center border-b" : "todo w-full relative px-1  h-[max-content] opacity-25 break-all bg-gray-100 flex items-center border-b"}>
                <div className="absolute text-[.8rem] text-gray-900 z-10 bottom-0 left-20">
                    <span>{`${todo.date} ${todo.time}${todo.period}`}</span>
                </div>
                <span className="absolute top-1 text-[.9rem] text-gray-400">todo</span>
                <span className=' h-full flex-none  w-[4rem] flex items-center p-5  justify-center'>
                    {todo?.clicked === true ? <AiOutlineDelete onClick={() => handleDelete(todo, true)} className='text-[1.3rem] cursor-pointer ' /> : <div className="h-[1rem] flex items-center justify-center cursor-pointer  bg-gray-300 shadow-sm rounded-sm w-[1rem]">
                        <input className='cursor-pointer' checked={todo.completed} type="checkbox" onChange={(e) => {
                            handleCompleted(todo, true)
                        }} name="" id="" />
                    </div>}
                </span>
                <span onClick={() => handleTodo(todo)} className={!todo?.clicked ? 'cursor-pointer relative break-all h-full  p-5 flex-auto' : 'cursor-ponter break-all h-full flex-auto p-5 relative bg-blue-200'}>
                    {todo?.todo}
                </span>
                <span onClick={() => handleEdit(todo, true)} className="flex-none w-[4rem]  flex items-center justify-center">
                    {todo?.clicked && <FiEdit2 className='cursor-pointer' />}
                </span>

            </div>
        })
    })

    const eventList = (() => {
        return (!switchList && editing) ? <div className='w-full h-full overflow-auto flex flex-col'>
        <span className=' flex items-start bg-gray-100 justify-end'><FaTimes onClick={() => handleEdit(false)} className='cursor-pointer hover:text-white hover:bg-gray-400 bg-white text-2xl' /></span>
        <textarea id='update-container' type="text" ref={editInput}  className='flex-1 p-2 resize-none bg-gray-100 outline-none' />
        <span onClick={() => handleUpdate(current, false)} className="add cursor-pointer lg:hover:bg-gray-900 flex-none h-[5rem] flex items-center text-white justify-center bg-gray-700 relative ">Update </span>
    </div> : filteredEvents?.map((event) => {
            return <div  key={event?.id} className={!event?.completed ? "todo relative px-2 lg:hover:bg-gradient-to-r rounded-md from-cyan-100 to-blue-300 lg:hover:text-blue-400 w-full h-[max-content] break-all  flex items-center border-b" : "todo w-full relative px-2  h-[max-content] opacity-25 break-all bg-gray-100 flex items-center border-b"}>
                <div className="absolute text-[.8rem] text-gray-900 z-10 bottom-0 left-20">
                    {event.date}
                </div>
                <span className="absolute top-1 text-[.9rem] text-gray-400">event</span>
                <span className=' h-full flex-none  w-[4rem] flex items-center p-5  justify-center'>
                    {event?.clicked === true ? <AiOutlineDelete onClick={() => handleDelete(event, false)} className='text-[1.3rem] cursor-pointer ' /> : <div className="h-[1rem] flex items-center justify-center  bg-gray-300 shadow-sm rounded-sm w-[1rem]">
                        <input className='cursor-pointer' checked={event.completed} type="checkbox" onChange={(e) => {
                            handleCompleted(event, false)
                        }} name="" id="" />
                    </div>}
                </span>
                <span onClick={() => handleEvent(event)} className={!event?.clicked ? 'cursor-pointer relative break-all h-full  p-5 flex-auto' : 'cursor-pointer break-all h-full flex-auto p-5 relative bg-blue-200'}>
                    {event?.event}
                </span>
                <span onClick={() => handleEdit(event, false)} className="flex-none w-[4rem]  flex items-center justify-center">
                    {event?.clicked && <FiEdit2 className='cursor-pointer' />}
                </span>

            </div>
        })
    })



    const handleTodo = (todo) => {
        const newState = todos?.map((item) => {
            if (item.id === todo.id) {
                return { ...item, clicked: !item.clicked }
            }
            return item
        })
        setTodos(newState)

    }


    const handleEvent = (vent) => {
        const newState = event.map((item) => {
            if (item.id === vent.id) {
                return { ...item, clicked: !item.clicked }
            }
            return item
        })
        setEvent(newState)


    }


    const handleCompleted = (value, action) => {
        const todoCompleted = () => {
            const newState = todos.map((item) => {
                if (item.id === value.id) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
            setTodos(newState)
        }


        const eventCompleted = () => {
            const newState = event.map((item) => {
                if (item === value) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
            setEvent(newState)
        }

        action ? todoCompleted() : eventCompleted()


    }


    const handleDelete = (value, action) => {
            return action ? setTodos([...todos.filter((item)=>item.id !== value.id)]) : setEvent([...event.filter(item => item.id !== value.id)])
    }

    const handleEdit = (value, action) => {
        const todoEdit = () => {
            if(value){
              setCurrent(value)
            }
            return setEditing(!editing)
        }

        const eventEdit = () => {
            if(value){
                console.log(value)
                 setCurrent(value)
               }
               console.log('sjksdjk')
            return setEditing(!editing)
        }
        action ? todoEdit() : eventEdit()

    }


    const handleUpdate = (value, action) => {
        const todoUpdate = () => {
            const newState = todos.map((item) => {
                if (item.id === value.id) {
                    return { ...item, todo: editInput.current.value, edit: false, clicked: false }
                }
                return item
            })
            setTodos(newState)
            setEditing(!editing)
        }


        const eventUpdate = () => {
            const newState = event.map((item) => {
                if (item.id === value.id) {
                    return { ...item, event: editInput.current.value, edit: false, clicked: false }
                }
                return item
            })
            setEvent(newState)
            setEditing(!editing)
        }

        action ? todoUpdate() : eventUpdate()
    }

    return <div className=' w-full h-full '>
        <Drawer size='small' nav={nav} />
        <div className=" h-full w-full grid md:grid-cols-medium bg-blue-100 gap-3 lg:p-1 lg:grid-cols-large overflow-hidden">
            <div className="bg-gray-100 hidden lg:block lg:rounded-md overflow-hidden">
                <Drawer size='medium' />
            </div>
            <div className="w-full h-full lg:rounded-md flex flex-col overflow-hidden ">
                <div className="nav flex-none bg-yellow-400 relative w-full h-[10rem] ">
                    <NavBar setEditing={setEditing} switchList={switchList} setSwitchList={setSwitchList} search={search} handleFilters={handleFilters}  nav={nav} setNav={setNav} handleRotate={handleRotate} rotate={rotate} />
                </div>

                <div className="w-full mt-1 flex-auto  overflow-hidden">
                    <div className={(switchList && editing) || (!switchList && editing) ? 'w-full h-full' : "w-full relative grid h-full  auto-rows-[max-content]  grid-flow-row overflow-y-auto  "}>
                        {switchList ? todoList() : eventList()}
                    </div>
                </div>
            </div>
            {/* add buton */}
            <div onClick={() => navigate('/new-task')} className="bg-gray-800 cursor-pointer w-11 z-[30] h-11 rounded-full overflow-hidden text-white fixed  bottom-5 lg:[display:none] right-2 flex items-center justify-center">
                <FaPlus />
            </div>

            <div className=" hidden md:block lg:rounded-md overflow-hidden">
                <NewTask />
            </div>
        </div>

    </div>
}









export default Home;