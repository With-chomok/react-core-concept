import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0);
    const handleBtn = ()=> {
        const newCounta = count + 1;
        setCount(
            newCounta)
        // console.log("cliced");
        
    }
    return(
        <div className="card">
            <h3>Count: {count}</h3>
            <button onClick={handleBtn}>Add Counter </button>
        </div>
    )
}