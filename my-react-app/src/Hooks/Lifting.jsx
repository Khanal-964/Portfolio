import { useState } from "react";
const Lifting = () => {
    const [inputValue, setInputValue] =useState("");
    return (
        <>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
        <DisplayComponent inputValue={inputValue} />
        </>
    );
};

const InputComponent = ({inputValue, setInputValue}) => {
    
    return (
        <>
        <input type="text"  placeholder="Enter the name"  value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}></input>
        </>
    );
};

const DisplayComponent = ({inputValue}) => {
    return (
        <>
        <h2>Your Name is: {inputValue}</h2>
        </>
    );
};
export default Lifting;