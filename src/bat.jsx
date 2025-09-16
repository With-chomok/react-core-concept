import { useState } from "react";
export default function Batsman() {

    let [runs, setRuns] = useState(0);
    const [six, setSix] = useState(0);
    const handleSingle =() => {
        const updateRun = runs + 1;
        
        setRuns (updateRun)
        
    }
    const handleSix = () => {
        const updateRuns = runs + 6;
        const updateSixes = six + 1;
        setSix(updateSixes)
        setRuns(updateRuns)
    }
    const handleFour = () => {
        const updateRun = runs + 4;
        setRuns(updateRun)
    }
    return(
        <div>
            <h3>BAtsmman is here</h3>
            <p><small>six count: {six}</small></p>
            {  runs > 50 && <p>you score is 50</p>
            }
            {
                runs > 100 && <p>congratulations , Your runs is 100</p>
            }
            <h1>score : {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}