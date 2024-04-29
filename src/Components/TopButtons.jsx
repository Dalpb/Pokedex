import Button from "./Button";
import styles from "../styles/App.module.css"

export function TopButtons(){
    return(
        <div className={`${styles.buttonContainer}`}>
            <Button width="big" height="big" backgroundcolor="#01fbfb" borderadius="50%"/>
            <Button width="small" height="small" backgroundcolor="#dc092f" borderadius="50%"/>
            <Button width="small" height="small" backgroundcolor="#fecc03" borderadius="50%"/>
            <Button width="small" height="small" backgroundcolor="#2ff800" borderadius="50%"/>
        </div>
    )
}

export default TopButtons;