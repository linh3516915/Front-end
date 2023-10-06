import { useState } from "react";

function CountUp(props){

    const [number,setNumber] = useState(1);

    const CountUpHendle = () =>{
        setNumber(number + 1);
    }

    const onChangeHanlde = (evt) => {
        setNumber(evt.target.value);
    }

    return(
        <>
        <input type="text" value={number} onChange={onChangeHanlde}/>
        <button onClick={CountUpHendle}>Click me up !</button>       
        </>
    );
}

export default CountUp;