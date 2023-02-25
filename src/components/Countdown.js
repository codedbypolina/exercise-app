import { Link, useLocation } from "react-router-dom" // needed to link to other pages
import { useEffect, useRef, useState } from "react";

export default function Countdown() {

    /* constructor(props) {
         super(props);
         this.state = {
             toggle: false;
         }
         this.handleClick = this.handleClick.bind(this)
     }; */


    const [countdown, setCountdown] = useState(30);
    const count = useRef(0);
    console.log(count);

    useEffect(() => {
        count.current = setInterval(() => {
            setCountdown(previous => previous - 1)
        }, 1000)
        return () => clearInterval(count.current)
    }, [])

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(count.current)
        }
    })

    const time = (time) => {
        let minute = Math.floor(time / 60);
        let second = Math.floor(time - minute * 60);


        if (minute <= 10) {
            // console.log(minute)
            minute = '0' + minute
            // console.log(minute)
        };
        if (second <= 10) second = '0' + second;
        return `${minute}:${second}`
    };

    const [count1, setCount1] = useState("00:30");
    const handleClick1 = () => setCount1(time(countdown));

    const [count2, setCount2] = useState("00:30");
    const handleClick2 = () => setCount2(time(countdown));

    const [count3, setCount3] = useState("00:30");
    const handleClick3 = () => setCount3(time(countdown));




    /*
    const handleClick = (e) => {
        e.preventDefault()
        console.log("Clicked")
        clickOn = true;
    }

    function displayText() {
        console.log(clickOn)
        if (clickOn === false) {
            return (<>00:30</>)
        }
    }
    */


    return (
        <div>
            <span className="icon"><i class="fa-solid fa-stopwatch-20"></i></span>
            <h3>{useLocation().state}</h3>
            <button onClick={handleClick1}>Set 1: {count1} </button>
            <button onClick={handleClick2}>Set 2: {count2} </button>
            <button onClick={handleClick3}>Set 3: {count3} </button>

            <Link to="/" className="buttons">
                <button>
                    Return
                </button>
            </Link>
        </div>
    )
}