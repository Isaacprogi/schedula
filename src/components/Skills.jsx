import HTML from '../../src/assets/html.png'
import CSS from '../../src/assets/css.png'
import JavaScript from '../../src/assets/javascript.png'
import ReactImg from '../../src/assets/react.png'
import Node from '../../src/assets/node.png'
import GitHub from '../../src/assets/github.png'
import TailWind from '../../src/assets/tailwind.png'
import Mongo from '../../src/assets/mongo.png'
const Skills = () => {
  return <div className='flex-auto w-full h-screen overflow-auto bg-gray-800'>
    <div className="max-w-[1000px] mx-auto w-full h-full flex items-center min-h-[20rem] overflow-hidden  flex-col justify-center">
      <div>
        <h1 className=" text-4xl text-gray-500 mb-4 sm:mb-3 sm:text-3xl font-bold border-b-4 ">My Skills</h1>
      </div>
      <div className='grid  grid-cols-2  sm:grid-cols-3 w-40 sm:w-[14rem] gap-3'>
        <div className='w-full h-full p-2 shadow-lg  hover:scale-125 duration-300 cursor-pointer' ><img className='' src={HTML} alt="" /></div>
        <div className='w-full h-full p-2 shadow-lg hover:scale-125 duration-300 cursor-pointer'><img className='' src={CSS} alt="" /></div>
        <div className='w-full h-full p-2 shadow-lg hover:scale-125 duration-300 cursor-pointer'><img className='' src={JavaScript} alt="" /></div>
        <div className='w-full h-full p-2 shadow-lg hover:scale-125 duration-300 cursor-pointer'><img className='' src={ReactImg} alt="" /></div>
        <div className='w-full h-full p-2 shadow-lg hover:scale-125 duration-300 cursor-pointer'><img className='' src={TailWind} alt="" /></div>
        <div className='w-full h-full p-2 shadow-lg hover:scale-125 duration-300 cursor-pointer'><img className='' src={Node} alt="" /></div>
        <div className='w-full h-full p-2 shadow-lg hover:scale-125 duration-300 cursor-pointer'><img className='' src={GitHub} alt="" /></div>
        <div className='w-full h-full p-2 shadow-lg hover:scale-125 duration-300 cursor-pointer'><img className='' src={Mongo} alt="" /></div>
      </div>
    </div>
  </div>

}

export default Skills;