// import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
     <div className="h-[70px] w-[full]">
        {value}
     </div>
    // <Textfit className="screen" mode="single" max={70}>
     
    // </Textfit>
  );
};

export default Screen;