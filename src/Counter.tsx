import React from 'react';
import Button from './Button';
import { useState } from 'react'; 

interface CounterProps {
    start: number;
    step: number;
}

var Counter = (props: CounterProps) => {
    var [ count, setCount ] = useState(props.start); 
    var handleIncrease = () => {
        setCount(count + props.step);
    };
    return (
        <div>
            <div>Значение счётчика: {count}.</div>
            <Button text={"Прибавить " + props.step} onClick={handleIncrease} />
        </div>
    );
};
export default Counter;