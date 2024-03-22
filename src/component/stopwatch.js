import React from "react"
import styles from "./stopwatch.module.css"
import { useState, useEffect } from "react"

function Stopwatch(){
    const [buttonclicked, setbuttonclicked] = useState(true)
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    const handlebuttonclick = () =>{
        setbuttonclicked(prevState => !prevState)
    }

    const handlereset = () =>{
        setElapsedSeconds(0)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setElapsedSeconds(prevElapsedSeconds => prevElapsedSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    return(
        <div>
            <h2>Stopwatch</h2>
            <p>Time: {minutes < 10 ? `${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
            <div>
                {buttonclicked ? (<button type="button" onClick={handlebuttonclick}>Start</button>) : (<button type="button" onClick={handlebuttonclick}>Stop</button>)}
                <button type="button" onClick={handlereset}>Reset</button>
            </div>
        </div>
    )

}
export default Stopwatch