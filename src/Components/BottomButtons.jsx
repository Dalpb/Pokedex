import Button from "./Button";
import styles from "../App.module.css"
export function BottomButtons(){
    
    return(
        <div className={`${styles.buttonContainer}`}>
            <Button width="medium" height="medium" backgroundcolor="#519afb" borderadius="50%"/>
            <Button width="big" height="small" backgroundcolor="#2ff800" borderadius="25px" />
            <Button width="big" height="small" backgroundcolor="#fecc03" borderadius="25px"/>
        </div>
    )
}
export default BottomButtons;