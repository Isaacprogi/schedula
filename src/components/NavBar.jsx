import { FaBars, FaSearch } from 'react-icons/fa'
import { FcTodoList } from 'react-icons/fc'
import { BsCalendar4Event } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../hooks/useUserContext'

const NavBar = ({ nav, setNav, setSwitchList, search,handleFilters,setEditing}) => {
    const handleClick = () => setNav(!nav)
    const date = new Date()
    const{setBlock} = useUserContext()
    const navigate = useNavigate()

    const dateData = {
        year: date.getFullYear(),
        day: date.getDate(),
        weekDay: new Date().toLocaleString('default', { weekday: 'long' }),
        month: new Date().toLocaleString('default', { month: 'long' })
    }

    const handleLogout = () =>{
         setBlock(true)
         return navigate('/login')
    }
    

    return <div className="w-full grid grid-rows-2 shadow-sm shadow-gray-500 h-full bg-[#373152] z-[999]    p-2 flex ">
        <span onClick={handleLogout} className='absolute top-7 flex items-center justify-center  right-[7.3rem] lg:right-[4.5rem] w-[5rem] hover:bg-gray-300 cursor-pointer p-1 rounded-md  bg-gray-100'>Logout</span>
        <div className="top  flex justify-between items-center">
            <FaBars onClick={handleClick} className={!nav ? 'duration-100 burger z-[500]  cursor-pointer  text-white lg:hidden  text-3xl ' : ' z-[500] text-white scale-75 burger cursor-pointer duration-100 bg-gray-100 p-2 rounded-full text-black lg:hidden  text-3xl'} />
            <div className="icons text-lg sm:text-[1.3rem] bg-gray-900 py-1 rounded-md overflow-hidden flex flex-row items-center lg:w-full lg:justify-between  ">
                <span onClick={() =>{
                   setSwitchList(true)
                   setEditing(false)
                }} className='mr-1 text-white text-3xl cursor-pointer text-2xl lg:text-3xl  p-2 rounded-full focus:bg-blue-100 lg:hover:bg-gray-800 '><FcTodoList /></span>
                <span onClick={() =>{
                   setSwitchList(false)
                   setEditing(false)
                }} className='mr-4 text-white text-3xl cursor-pointer text-2xl lg:text-3xl   p-2 rounded-full focus:bg-blue-100 lg:hover:bg-gray-800  '><BsCalendar4Event /></span>
            </div>
        </div>
        <div className="bottom overflow-hidden   bg-gray-900 px-2 rounded-md   flex items-end py-1  justify-between">
            <div className=" rounded-full w-full bg-white flex items-center justify-between overflow-hidden border-4 mr-3">
                <input type="text" ref={search} onChange={handleFilters}
                className="w-[95%] h-full p-2 bg-gray-100 outline-none   " />
                <FaSearch className='p-2 ml-1 cursor-pointer text-3xl font-bolder text-gray-400' />
            </div>

            <div className="flex flex-col   text-white items-center justify-center">
                <span className='sm:text-[1rem] flex'>{dateData.month.substring(0, 3)} {dateData.year}</span>
                <span className='text-3xl sm:text-[2.7rem] text-gray-400'>{dateData.day}.{dateData.weekDay === 'Thursday' ? dateData.weekDay.substring(0, 4) : dateData.weekDay.substring(0, 3)}</span>
            </div>
        </div>

    </div>

}

export default NavBar;