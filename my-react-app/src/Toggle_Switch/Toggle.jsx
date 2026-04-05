import React from "react";
import { IoIosSwitch } from "react-icons/io";
import { useState } from "react";
const Toggle = () => {

    const [isOn, setIsOn] = useState(false);

    const  handleToggle = () => {
        setIsOn(!isOn);
    };

    const CheckIsOn= isOn ? "on" : "off";
    return (
        <>
        <h1 style={{
            color:"#000", textAlign:"center",
        }}>Toogle Switch <IoIosSwitch /></h1>
        <div className="toggle-switch" style={{backgroundColor: isOn ? "#4caf50" : "#f44336"}} onClick={handleToggle}>
            <div className={`switch ${CheckIsOn}`}>
                <span className="switch-state">
                    {CheckIsOn}
                </span>
            </div>
        </div>        </>
    );
};
export default Toggle;