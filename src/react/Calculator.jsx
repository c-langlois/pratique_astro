import React, {useState} from 'react';

function Calculator() {
    const [answer, setAnswer] = useState(0);
    const [input, setInput] = useState('');
    const [operation, setOperation] = useState('');

    function handleClick(props) {
        if (!isNaN(props)) {
            if(answer === 0) {
                setAnswer(props);
            }
            setInput(answer + props);
        } else if (props === "+") {
            setOperation("+");
        } else if (props === "=") {
            if (operation === "+") {
                setAnswer(parseInt(answer) + parseInt(input));
                setInput('');
            }
        }
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col border w-60">
                <div className="border-2">{answer}</div>
                <div>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('7')}>7</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('8')}>8</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('9')}>9</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('+')}>+</button>
                </div>
                <div>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('4')}>4</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('5')}>5</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('6')}>6</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('-')}>-</button>
                </div>
                <div>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('1')}>1</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('2')}>2</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('3')}>3</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('/')}>/</button>
                </div>
                <div>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('=')}>=</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('0')}>0</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('.')}>.</button>
                    <button className="w-3/12 h-10 border-2" onClick={() => handleClick('*')}>*</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator