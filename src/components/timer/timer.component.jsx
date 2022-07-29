import { useEffect, useRef } from "react";

const Timer = ({ time, setTime, isFirstAlphaPressed, i }) => {
    const interval = useRef(null);

    useEffect(
        () => {
            if (isFirstAlphaPressed) {
                console.log("useEffect setTime wala ran");
                interval.current = setInterval(() => {
                    setTime((time) => time + 10);
                }, 10);
            }
        },
        [isFirstAlphaPressed]
    )

    if (i === 20) clearInterval(interval.current);

    return (
        <div className="timer-container">
            <span className="digits seconds">
                Time: {Math.floor(time / 1000)}.
            </span>
            <span className="digits mili-seconds">
                {("0" + (time) % 1000).slice(-3)}s
            </span>
        </div>
    );
}

export default Timer;