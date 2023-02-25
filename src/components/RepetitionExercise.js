// This is a component that displays any exercises that require reps count

import { Link, useLocation } from "react-router-dom" // needed to link to other pages
import { useState } from "react";


export default function Repetition() {
    const [counter, setCounter] = useState(0);

    // function that increases counter with each click
    const handleClick = () => {
        setCounter(counter + 1)
    }
    // function that resets counter
    const reset = () => {
        setCounter(0)
    }

    return (
        <div>
            <span className="icon"><i className="fa-solid fa-dumbbell"></i></span>
            <h3>{useLocation().state}</h3>
            <p>Reps: {counter}</p>
            <button onClick={handleClick}>
                Complete Rep
            </button>
            <button onClick={reset}>
                Reset
            </button>
            <Link to="/" className="buttons">
                <button>
                    Return
                </button>
            </Link>

        </div >
    )
}