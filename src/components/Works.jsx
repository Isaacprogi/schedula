const Works = () => {
    return <div className='flex-auto  w-full h-full bg-gray-800 overflow-auto bg-gray-800'>
        
        <div className="w-full h-full mx-auto max-w-[1000px] min-h-[35rem] gap-4  overflow-hidden p-10 flex flex-col items-center justify-center sm:flex-row">
               <div className="w-full h-full bg-red-500 sm:h-[30rem]">
                     
  <a className='w-full h-full' target='_blank'
           rel='noreferrer'
           href='https://Isaacprogi.github.io/schedula'
           >
           <div className="first w-full h-full  hover:scale-[105%] hover:opacity-[.6]  relative duration-300 overflow-hidden    rounded-md">
                
                <span className="absolute bg-blue-600  opacity-[.5] text-white flex items-center justify-center bottom-0 w-full h-[4rem]">
                </span>
                <span className="absolute flex items-center justify-center text-[.9rem] text-white w-full h-[4rem] bottom-0">
                     Schedula app with user authentication using react
                     </span>
            </div>
           </a>
                   </div>  
               <div className=" w-full h-full bg-blue-500 sm:h-[30rem]">
               <a className='w-full h-full' target='_blank'
           rel='noreferrer'
           href='https://Isaacprogi.github.io/movie-search'
           >
           
           <div className="w-full second h-full second hover:opacity-[.6]  relative hover:scale-[105%]  duration-300 overflow-hidden    rounded-md">
            <span className="absolute bg-blue-600 opacity-[.5] flex items-center justify-center bottom-0 w-full h-[4rem]">
                    Movie App
                </span>
                <span className="absolute flex items-center text-[.9rem] justify-center text-white w-full h-[4rem] bottom-0">
                     Movie Search Website with React
                     </span>
            </div>
           
           </a>
                   </div>  
        </div>
        </div>


}

export default Works;