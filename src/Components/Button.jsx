export function Button({width,height,backgroundcolor,borderadius}){
    const styleButtons = {
        width: width||'100px',
        height: height ||'100px',
        backgroundcolor: backgroundcolor || 'red',
        borderadius: borderadius ||'25px',
    }

    return(
        <div style={styleButtons}>sdas</div>
    )

}
export default Button;