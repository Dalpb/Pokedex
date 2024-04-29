import { size } from "./buttonSize";
import styles from "../styles/App.module.css"


export function Button({width,height,backgroundcolor,borderadius}){

    const sizeDet = (s) =>{
        if(s === "small")return size.small;
        else if(s === "medium")return size.medium;
        else if(s === "big") return size.big;
    }
    
    const styleButtons = {
        width : sizeDet(width),
        backgroundColor: backgroundcolor || 'red',
        borderRadius: borderadius ||'25px',
        outline: "0.1rem solid black",
        boxShadow: "-7px 6.5px 2px -4px #EE8497",  
    }
    const equal = width == height;
    
    if(!equal){
        styleButtons.height = sizeDet(height);
    }

    return(
        <div style={styleButtons} className={`${equal ? styles.buttonCircle : ""}`}></div>
    )

}
export default Button;