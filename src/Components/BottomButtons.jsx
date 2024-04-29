import Button from "./Button";
import styles from "../styles/App.module.css"
export function BottomButtons(){
    
    return(
        <div className={`${styles.buttonContainer}`}>
            <Button width="medium" height="medium" backgroundcolor="#519afb" borderadius="50%"/>
            <Button width="big" height="medium" backgroundcolor="#2ff800" borderadius="25px" />
            <Button width="big" height="medium" backgroundcolor="#fecc03" borderadius="25px"/>
        </div>
    )
}
export default BottomButtons;