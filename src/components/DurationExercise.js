// This is a component that displays any exercises that require timer


import { Link, useLocation } from "react-router-dom" // needed to link to other pages
import Stopwatch from "./Stopwatch"

export default function Duration() {

    return (
        <div>
            <span className="icon"><i class="fa-solid fa-stopwatch-20"></i></span>
            <h3>{useLocation().state}</h3>
            <p>Timer: </p>
            <Stopwatch />

            <Link to="/" className="buttons">
                <button>
                    Return
                </button>
            </Link>

        </div >
    )
}