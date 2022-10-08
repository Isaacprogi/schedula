import { AiOutlineDelete } from 'react-icons/ai'
import { useState, useEffect,useRef } from 'react'
import {FaPlus,FaTimes} from 'react-icons/fa'
import Me from '../images/me.jpg'
import { BsCardText } from 'react-icons/bs'
import { useUserContext } from '../hooks/useUserContext'
const Drawer = ({ nav,size }) => {

    const [input2, setInput2] = useState('')
    const [active, setActive] = useState(false)
    const [noteActive, setNoteActive] = useState(false)
    const [quote, setQuote] = useState(localStorage.getItem('quote') || '')
    const [date,setDate] = useState(new Date())
    const[text,setText] = useState('')
    const[notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
    const [filteredNotes,setFilteredNotes] = useState(notes) 
    const[current,setCurrent] = useState('')
    const[edited,setEdited] = useState(false)
    const[noteDate,setNoteDate] = useState(null)
    const[deleting,setDeleting] = useState(false)
    const{user} = useUserContext()
    


    const getRandomColors = () =>{
        var letters = '0123456789ABCDEF'.split('')
        var color = '#'
        for(var i=0; i<6; i++){
            color += letters[Math.round(Math.random()*15)]
        }
        return color;
    }

    
    const noteRef = useRef('')
    const search = useRef('')


    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))
        setFilteredNotes(notes)
    },[notes])
    
    useEffect(()=>{
        if(quote !== ''){
         localStorage.setItem('quote',quote)
        }
    },[quote])

    useEffect(()=>{
       const textbox = document.getElementById('texty')
       if(textbox){
              textbox.value = current.note
              setText(current.note)
       }
    },[current.note])

 useEffect(()=>{
   setDate(new Date())
 },[edited,noteActive])

    const dateData = {
        minutes:new Date().getMinutes(),
        hours:new Date().getHours(),
        time:(new Date().getHours()) + ':' + (date.getMinutes()) + (new Date().getHours() >12?' PM':' AM'),
        day: new Date().getDate(),
        weekDay: new Date().toLocaleString('default', { weekday: 'long' }),
        month: new Date().toLocaleString('default', { month: 'long' }),
        year: new Date().getFullYear(),
    }
    

    const handleActive = () => setActive(!active)
    const handleNoteActive = () => setNoteActive(!noteActive)

    const handleOk = (current) =>{
       if(!current){
           if(text ===''){
            return handleNoteActive()
           }
           setNotes([...notes,{id:notes.length+1, note:text, created:dateData.time, edited:dateData.time, date:`${dateData.day} ${dateData.month}`, year:dateData.year, color:getRandomColors()}])
           setText('')
           return handleNoteActive()
       }
    
       if(current){
           if(!edited){   
            const newState = notes.map((note)=>{
                if(note.id === current.id){
                    return {...note,  note:text}
                }
                return note
            })
            setNotes(newState)
            setCurrent('')
            setText('')
            return handleNoteActive()
            
           }

          const newState = notes.map((note)=>{
              console.log(text)
              if(note.id === current.id){
                  console.log('there is')
                  return {...note, edited:dateData.time, note:text}
              }
              return note
          })
          setNotes(newState)
          setCurrent('')
          setText('')
          setEdited(false)
          return handleNoteActive()
          

       }
       
    }

     const handleTextChange = () =>{
          setText(noteRef.current.value)
     }

     const handleFilter = (value) =>{
        if(value !== ''){
             const result = notes.filter((note)=>{
                return note.note.toLowerCase().includes(value.toLowerCase())
             })
             return setFilteredNotes(result)
     }
       else{
        return setFilteredNotes(notes)
       }

    }

    const handleDelete = (value) =>{
       setNotes([...notes.filter((note)=>note.id !== value.id)])
    }
    

  return <div className={size ==='small'? !nav ? 'absolute flex z-[100] overflow-hidden   lg:hidden  flex-col h-screen  sm:w-1/2  duration-300 top-0 w-full -left-[100%]' : 'w-full sm:w-1/2 z-[400]  lg:hidden overflow-hidden  duration-300  flex flex-col h-screen   absolute  top-0 left-0  ':size === 'medium'?'flex overflow-hidden flex-col w-full h-full':''}>
        
        {/* Navbar */}
        <div className="flex-none flex bg-[#373152]   flex-col h-[5rem]">
            <div className="bg-[#373152]     flex-1"></div>
            <div className="bg-[#373152] text-gray-200 flex items-center font-nunito mt-6 justify-center flex-1">
               Gallant
            </div>
        </div>
       

        {/* main */}
        <div id='scroll-container' className="flex-auto grid grid-flow-col overflow-y-hidden auto-cols-[100%] overflow-x-auto">
            <div className=' flex flex-col overflow-y-auto '>

                {/* profile */}
                <div className="h-[10rem] flex-none w-full flex flex-col items-center justify-center flex-none bg-white">
                    <div className="rounded-full w-[5rem] overflow-hidden h-[5rem] ">
                        <img className='w-full h-full' src={Me} alt="" />
                    </div>
                    <span>{user && `${user.firstname} ${user.lastname}`}</span>
                    <span className='text-[.8rem] text-gray-400'>{user && user.email}</span>
                </div>

                {/* Quote section */}
                <div className="flex-auto  relative w-full">
                    <div className=" flex flex-col bg-[#373152] items-center  overflow-hidden h-full  w-full ">
                        <div className=' mt-2 text-center flex items-center   w-full mb-10'>
                            <span className='flex-1' ></span>
                            <span className='text-center text-blue-200 text-[1.4rem] font-[3rem] flex-1'>My Quote</span>
                            <span className='flex-1 flex justify-end items-center'><BsCardText onClick={handleActive} className='mr-5 cursor-pointer text-white   hover:scale-125 duration-300' /></span>
                        </div>

                        {active ?
                            <div className='flex  mb-4'>
                                <textarea  value={input2} onChange={(e) => setInput2(e.target.value)} className='outline-none resize-none p-4 rounded-md' placeholder='my quote...' type="text" />
                                <span onClick={
                                    () => {
                                        setQuote(input2)
                                        setActive(false)
                                    }
                                } className='ml-2 bg-gray-800 text-white px-2 cursor-pointer py-1 hover:bg-gray-700 hover:text-white rounded-md flex items-center justify-center'>ADD</span>
                            </div> :
                            <div className='text-gray-400 px-3 text-center'>{!quote ? 'Your quote goes here' : quote}</div>}
                    </div>
                </div>

                {/* bottom */}
                <div className="h-[4rem] w-full flex items-center justify-center flex-none bg-gray-800">
                    <span className="rounded-full  w-2 h-2 bg-white"></span>
                    <span className="rounded-full ml-1 w-2 h-2 bg-black"></span>
                    <span className="rounded-full ml-1 w-2 h-2 bg-white"></span>
                </div>
            </div>

            {/* Routine box and other divs in the grid */}
            
            <div className="bg-gray-100 flex flex-col relative overflow-hidden ">
            <div className="flex-none h-[4rem] p-2 flex items-center ">
                <input ref={search} type="text" onChange={(e)=>handleFilter(e.target.value)}  placeholder='search' className='h-full w-full bg-gray-200 border outline-none p-2 rounded-full ' />
               < AiOutlineDelete  onClick={()=>setDeleting(!deleting)} className='ml-3 mr-2 rounded-md overflow-hiden lg:hover:bg-gray-600 hover:text-white cursor-pointer text-[1.4rem]'/>
            </div>
                {!noteActive && <>
                    <div  className="w-full  h-full  bg-gray-300 overflow-auto  gap-2 grid p-1 grid-cols-2 items-start place-content-start">
                       {filteredNotes.map((note=>{
                           return <div key={note?.id} style={{backgroundColor:note.color}} className='h-[10rem] w-full p-3 rounded-md cursor-pointer hover:border-4  duration-300'>

                               <div className="w-full flex flex-col break-all h-full overflow-hidden">
                                    <span onClick={()=>{
                            setCurrent(note)
                            setNoteDate({date:note.date,year:note.year})
                            handleNoteActive()
                           }}  className='flex-auto overflow-hidden'>{note?.note}</span>
                                   <span className="h-[1rem] flex-none text-[.7rem] flex items-center justify-start  w-full">
                                      <span className='w-full'>{note.edited}</span> {deleting && <FaTimes onClick={()=>handleDelete(note)} className='text-[.9rem]'/>}
                                   </span>
                               </div>
                           </div>
                       }))} 
                        
                        
                     
                 <div onClick={()=>{handleNoteActive()}} className="bg-gray-800 absolute cursor-pointer w-11 z-[30] h-11 rounded-full overflow-hidden text-white  cursor-pointer  top-[4.2rem] right-2 flex items-center justify-center">
                    <FaPlus  />
             </div>  
                </div>  
               
                 </>}

              {noteActive && <>
                  <div className='w-full    h-full  flex flex-col '>
                      <div  className="flex-none text-[.7rem] text-gray-400 p-1 h-[3rem] bg-gray-100 flex items-center justify-start ">
                          <span className='mr-[.5rem]'>{!noteDate?.date? `${dateData?.day} ${dateData?.month}` :noteDate?.date} {dateData.time} </span> <span>| {text?.length} characters</span>
                      </div>
                      <textarea id='texty' ref={noteRef} onChange={()=>{
                          setEdited(true)
                          handleTextChange()}}  type="text" className="flex-auto p-1 outline-none resize-none bg-gray-100" />


                  <div onClick={
                        ()=>handleOk(current)
                    } className="bg-gray-800 absolute cursor-pointer w-11 z-[30] h-11 rounded-full overflow-hidden text-white fixed cursor-pointer  top-[4.2rem] right-2 flex items-center justify-center">
                          OK
                  </div>
                  </div>

              </>}   
            </div>
            
        </div>
    </div>
}

export default Drawer;