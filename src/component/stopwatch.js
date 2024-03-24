import React from "react"
import styles from "./stopwatch.module.css"
import { useState, useEffect } from "react"

function Stopwatch(){
    const [buttonclicked, setbuttonclicked] = useState(true)
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handlebuttonclick = () =>{
        if (!intervalId) {
            const newIntervalId = setInterval(() => {
                setElapsedSeconds(prevElapsedSeconds => prevElapsedSeconds + 1);
            }, 1000);
            // console.log(setIntervalId)
            setIntervalId(newIntervalId);
            setbuttonclicked(false)
        }
        
    }

    const handleStop = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        setbuttonclicked(true)
    };

    const handlereset = () =>{

        clearInterval(intervalId);
        setElapsedSeconds(0)
        setIntervalId(null);
    }

    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    return(
        <div>
            <h2>Stopwatch</h2>
            <p>Time: {minutes < 10 ? `${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
            <div>
                {buttonclicked ? (<button type="button" onClick={handlebuttonclick}>Start</button>) : (<button type="button" onClick={handleStop}>Stop</button>)}
                <button type="button" onClick={handlereset}>Reset</button>
            </div>
        </div>
    )

}
export default Stopwatch