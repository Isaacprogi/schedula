import { AiOutlineArrowRight } from 'react-icons/ai'
import Resume from "../../src/assets/Isaac.pdf"
import Me from '../img/me.jpg'
const Home = ({ setNav }) => {
    return <div onClick={() => setNav(false)} className=" flex-auto bg-gray-800 overflow-auto">
        <div className="max-w-[1000px] min-h-[40rem] h-full w-full relative mx-auto grid sm:grid-cols-2  overflow-hidden   ">
            <div className="absolute top-0 w-full h-1/2"></div>
            <div className="bg-gray-800 h-full w-full flex items-center flex-col justify-center px-2">
                <p className="text-pink-400 mb-3 ">
                    Hi, my name is
                </p>
                <h1 className="text-3xl font-bold text-white px-2 rounded-md bg-gradient-to-r from-cyan-600">Isaac Anasonye</h1>
                <h1 className="text-xl mb-3 font-bold px-2 rounded-md bg-gradient-to-r from-cyan-600">I'm a Front End Developer</h1>
                <p className="text-gray-300 text-center max-w-[30rem]">As a front-End Developer, I help
                    bring dreams to life and love to deliver as expected,leaving everything simplified.
                </p>
                <a href={Resume} download><span className="group mt-4 bg-blue-200 px-2 flex items-center justify-center rounded-sm py-1 cursor-pointer duration-300 hover:bg-gradient-to-r from-cyan-600 landscape:mb-2">DownLoad Resume <AiOutlineArrowRight className='group-hover:scale-125 group-hover:rotate-90 duration-300' /></span></a>
            </div>
            <div className=" relative  flex flex-col items-center justify-center h-full w-full">
                <div className='absolute top-0 w-full h-[40%] md:h-[20%]  bg-gray-800'></div>
                <div className="relative w-[12rem] mt-3 h-[12rem] sm:w-[20rem] sm:h-[20rem] rounded-lg border-4 overflow-hidden z-10 hover:scale-[110%] transition duration-300">
                    <img className='w-full h-full' src={Me} alt="" />
                </div>
                <p className='mt-3 text-white text-[.6rem] font-sans bg-gradient-to-r from-cyan-600 px-1 rounded-md '>Let's Create together</p>
            </div>
        </div>
    </div>
}
export default Home