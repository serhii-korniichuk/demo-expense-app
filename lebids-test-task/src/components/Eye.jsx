import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Eye = ({ props, onClick, offset }) => {
   const style = {
      position: "absolute",
      top: `${offset}px`,
      left: "320px",
      transform: "scale(1.8)",
      color: "white"
   }
   return (
      props ?
         <>
            <button className="rbutton" type="button">
               <AiOutlineEye style={style} onClick={onClick} />
            </button>
         </> :
         <>
            <button className="rbutton" type="button">
               <AiOutlineEyeInvisible style={style} onClick={onClick} />
            </button>
         </>
   )
}

export default Eye;