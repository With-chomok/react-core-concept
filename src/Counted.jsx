import { useState } from "react"

export default function Counted (){
    const handleBtns = () => {
        const newNum = counts + 1;
        setCounts(newNum);

    }
    const handleSix = () =>{
        const addSix = counts + 6;
        setCounts(addSix)
    }
    const handleFour = () =>{
        const addFour = counts + 4;
        setCounts (addFour)
    }
    const handleReset = () => {
        const allClear = counts - counts;
        setCounts(allClear)
    }
    const [counts, setCounts]=useState(0)
    return(
        <div className="card">
            <h3>Count Increase: {counts}</h3>
            <button onClick={handleBtns}>Add Single</button>
            <button onClick={handleSix}>Add six</button>
            <button onClick={handleFour}>Add Four</button>
            <button onClick={handleReset}> Reset</button>
        </div>
    )
}






