const About = ({setNav}) => {
    return ( 
        <div onClick={()=>setNav(false)} className="flex-auto  bg-gray-800 w-full h-full overflow-auto  bg-gray-800">
            <div className="max-w-[1000px] w-full h-full min-h-[40rem] overflow-hidden mx-auto flex justify-center px-4 flex-col items-center">
               <div>
                   <h1 className=" text-4xl text-gray-500 mb-2 font-bold border-b-4 ">About Me</h1>
               </div>
                 <p className="text-white text-center max-w-[500px]">
                     Isaac Anasonye is a computer scientist and a front end developer
                     currently based in Nigeria. Isaac started writing codes and engaging him
                      self in coding activities
                     from his first year in the university. As He continued coding He knew eventually that this
                      was what He wanted to do. His goal is to be provide as much help as possible to where the call is made. With
                      my knowledge of the listed skills, I am able to deliver on every corresponding given assignment.
                     Isaac will like to say that a programmer that really knows it does it.
                 </p>

            </div>
        </div>
     );
}
 
export default About;