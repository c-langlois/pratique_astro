import React, { useState, useEffect } from 'react';

function Timer() {
    const [isActive, setIsActive] = useState(false);
    const [timeSeconds, setTimeSeconds] = useState(0);
    const [timeMinutes, setTimeMinutes] = useState(0);

    useEffect(() => {
        let timer = null;
        if (isActive) {
            timer = setInterval(() => {
                setTimeSeconds(prevTimeSeconds => prevTimeSeconds + 1);
                if (timeSeconds === 59) {
                    setTimeSeconds(0);
                    setTimeMinutes(prevTimeMinutes => prevTimeMinutes + 1);
                }
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div className="flex justify-center">
            <div className="space-y-4">
                <div className="border-2 rounded-lg border-cyan-700 bg-cyan-200 text-center">
                    {timeMinutes} min, {timeSeconds} sec
                </div>
                <div className="flex gap-4">
                    <button className="w-20 py-2 px-4 border-2 rounded-lg border-cyan-500 bg-cyan-400 text-center shadow-md" onClick={()=>{setIsActive(true)}}>Start</button>
                    <button className="w-20 py-2 px-4 border-2 rounded-lg border-cyan-500 bg-cyan-400 text-center shadow-md" onClick={()=>{setIsActive(false)}}>Stop</button>
                    <button className="w-20 py-2 px-4 border-2 rounded-lg border-cyan-500 bg-cyan-400 text-center shadow-md" onClick={()=>{setTimeSeconds(0);setTimeMinutes(0)}}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Timer;