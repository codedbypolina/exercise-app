// This is a component that displays Homepage of the app

// Link links an element to the desired page
import { Link } from "react-router-dom"



export default function Duration() {
    return (
        <div className="homepage">
            <h1> <i> Just do it!</i></h1>

            <h4>Select an exercise <i class="fa-solid fa-hand-point-down"></i></h4>
            <Link to={{ pathname: "/repetition", state: "Push Ups" }} className="buttons"><button><i class="fa-solid fa-dumbbell"></i> Push Ups</button></Link>
            <Link to={{ pathname: "/duration", state: "Bicycling" }} className="buttons"><button><i class="fa-solid fa-person-biking"></i> Bicycling</button></Link>
            <Link to={{ pathname: "/repetition", state: "Jumping Jacks" }} className="buttons"><button><i class="fa-solid fa-dumbbell"></i> Jumping Jacks</button></Link>
            <Link to={{ pathname: "/duration", state: "Running" }} className="buttons"><button><i class="fa-solid fa-person-running"></i> Running</button></Link>
            <Link to={{ pathname: "/repetition", state: "Sit Ups" }} className="buttons"><button><i class="fa-solid fa-dumbbell"></i> Sit Ups</button></Link>
            <Link to={{ pathname: "/countdown", state: "Russian Bicycle Twist" }} className="buttons"><button><i class="fa-solid fa-dumbbell"></i> Russian Bicycle Twist</button></Link>

        </div>
    )
}