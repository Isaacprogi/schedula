import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Me from '../img/me.jpg'
const NavBar = ({handleClick,nav}) => {
      
    return <div className='bg-gray-800 flex-none z-[999] w-full h-[3rem] relative  px-2'>
        <div className="max-w-[1000px] w-full mx-auto flex justify-between items-center py-1">
        <div className="w-10 h-10 rounded-full overflow-hidden ">
            <img className='w-full h-full' src={Me}  alt="" />
        </div>
         <ul className={!nav? ' fixed top-0 duration-300 overflow-auto right-[-100%]': 'absolute overflow-auto sm:hidden group w-1/2 z-40 h-screen flex flex-col items-left  bg-gray-900 duration-300 top-0 right-0 px-1' }>
         <Link  to='/'><li className='mt-12 w-full  text-pink-500 rounded-lg py-2 cursor-pointer hover:bg-gradient-to-r from-cyan-600'>Home</li></Link> 
            <Link to='/about-me'><li className='w-full  text-pink-500 py-2 rounded-lg cursor-pointer duration-500 hover:bg-gradient-to-r from-cyan-600 '>About Me</li></Link>
            <Link to='/skills'><li className='w-full  text-pink-500 py-2 rounded-lg cursor-pointer duration-500 hover:bg-gradient-to-r from-cyan-600 '>Skills</li></Link>
            <Link to='/works'><li className='w-full  text-pink-500 py-2 rounded-lg cursor-pointer duration-500 hover:bg-gradient-to-r from-cyan-600 '>Works</li></Link>
            <Link to='/contact'><li className='w-full  text-pink-500 py-2 rounded-lg cursor-pointer duration-500 hover:bg-gradient-to-r from-cyan-600 '>Contact</li></Link>
            
        </ul> 
        <FaBars onClick={handleClick} className='text-white z-50 sm:hidden cursor-pointer'/>
        <ul className='hidden sm:flex sm:justify-between sm:items-center'>
            <Link to='/'><li className='bg-gray-600 text-gray-200 p-1 rounded-sm mr-2 hover:text-white hover:bg-gray-500'>Home</li></Link>
            <Link to='/about-me'><li className='bg-gray-600 text-gray-200 p-1 rounded-sm mr-2 hover:text-white hover:bg-gray-500'>About Me</li></Link>
            <Link to='/skills'><li className='bg-gray-600 text-gray-200 p-1 rounded-sm mr-2 hover:text-white hover:bg-gray-500'>Skills</li></Link>
            <Link to='/works'><li className='bg-gray-600 text-gray-200 p-1 rounded-sm mr-2 hover:text-white hover:bg-gray-500'>Works</li></Link>
            <Link to='/contact'><li className='bg-gray-600 text-gray-200 p-1 rounded-sm mr-2 hover:text-white hover:bg-gray-500'>Contact</li></Link>
        </ul>
        </div>
    </div>
    
}
export default NavBar;