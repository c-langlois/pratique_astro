import React, {useState} from 'react';
import './Counter.css';

function Counter() {
    const [amount, setAmount] = useState(0);

    function handleDecrease() {
        setAmount(prevAmount => prevAmount - 1);
    };

    function handleIncrease() {
        setAmount(prevAmount => prevAmount + 1);
    }

    return (
        <div className="flex justify-center items-center">
            <button className="btn" onClick={handleDecrease}>-</button>
            <div className="mx-4">{amount}</div>
            <button className="btn" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default Counter;