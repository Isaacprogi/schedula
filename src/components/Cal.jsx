import { useState } from 'react'
import Calendar from 'react-calendar'

const Cal = ({page,rotate,date,setDate}) => {
 

    return <>
       {page === 'new-task'?

        //  home calendar
       <div className="flex w-full h-full p-1 items-center justify-center">
           <div className="calendar-container flex items-center justify-center bg-white  shadow-md w-full h-full rounded-md overflow-hidden">
            <Calendar className='w-full h-full' onChange={setDate} value={date}/>
          </div>

        {/* new task calendar   */}
        </div>:page ==='home'?
         <div className={!rotate? 'flex absolute z-10   duration-100 -top-[400px] left-0 flex-col w-full   p-1  items-center justify-center': 'flex  max-w-[25rem]  overflow-y-scroll z-10    absolute duration-100 top-[100%]   left-0 flex-col w-full  p-1  items-center justify-center'}>
           <div className="calendar-container  grid overflow-y-scroll flex items-center justify-center bg-white  shadow-md w-full h-full rounded-md overflow-hidden">
            <Calendar className='w-full h-full f'   onChange={setDate} value={date}/>
          </div>
        </div>: '' }
    </>
}
 
export default Cal;