import { useEffect } from "react";

const TargetEvent = ({scroll,setScroll}) => {
    let someDays;

   
   useEffect(() => {
       const handleScroll = (e) => {
           setScroll(e.target.scrollLeft)
       }
        someDays = document.getElementById('quick-box')
       if (someDays) {
           someDays.addEventListener('scroll', handleScroll)
       }
       return () => someDays.removeEventListener('scroll', handleScroll)
   }, [])


    return <div id='quick-box' className=" wrapper w-full  row-span-2 p-1 ">
          <div className="item rounded-sm bg-blue-800">     
          </div>
          <div className="item bg-green-800">     
          </div>
          <div className="item bg-yellow-800">     
          </div>
          <div className="item bg-pink-800">     
          </div>
          <div className="item bg-red-800">     
          </div>
    </div>
}
 
export default TargetEvent;