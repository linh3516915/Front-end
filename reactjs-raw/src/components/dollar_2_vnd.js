import { useState } from "react";

function Dollar2VND(){
    const [dollar, setDollar] = useState(0);
    const [vnd, setVND] = useState(null);

    const onChangeDollarHanlde = (e) =>{
        setDollar(e.target.value);
    }

    const onClickDoiHanlde = () =>{
        const tiGia = 24500;
        setVND(dollar * tiGia);
    }

    return (
        <>
        <input type="text" placeholder="USD" value={dollar} onChange={onChangeDollarHanlde}/>
        <button onClick={onClickDoiHanlde}>Doi</button>
        <input type="text" readOnly placeholder="VND" value={vnd}/>
        </>
    );
}
export default Dollar2VND;