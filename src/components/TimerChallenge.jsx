import { useState, useRef } from "react"
import Result from "./ResultModal"


const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef()
    const dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if(timeRemaining<=0){
        clearInterval(timer.current)
      
        dialog.current.open()
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prev) => (prev - 10))
        }, 10);

    }

    function handleStop() {
        dialog.current.open()
        clearInterval(timer.current)
    }

    function resetHandle(){
        setTimeRemaining(targetTime*1000)
    }

    // setTimerExpired(true)
    // dialog.current.open()
    return (
        <>
            <Result ref={dialog} targetTime={targetTime} reset={resetHandle} result={timeRemaining} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                {/* {!timeIsActive ? <p>You Lost!</p> : ""} */}
                <p>
                    <button onClick={timeIsActive ? handleStop : handleStart}>
                        {timeIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timeIsActive ? "active" : undefined}>
                    {timeIsActive ? "Timer is running" : "Timer inactive"}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge