import { forwardRef, useImperativeHandle, useRef } from "react";

const Result = forwardRef(function ResultModal({ result, targetTime, reset }, ref) {
    const dialog = useRef()
    const userLost = result <= 0
    const score = (result / 1000).toFixed(2)
    const gameScore = Math.round((1 - result / (targetTime * 1000)) * 100)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>You score {gameScore}</h2>}
            <p>The target time was <strong>{targetTime}seconds.</strong></p>
            <p>
                You stopped the timer with <strong>{score} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={reset}>
                <button>
                    Close
                </button>
            </form>

        </dialog>
    )
})

export default Result
