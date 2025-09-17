import React, { useState } from "react";

interface CounterProps {
    initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {

    const [count, setCount] = useState<number>(initialCount);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(reset => reset =0);
    }
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Counter Exercise</h2>
            <h1 style={{color:'#27C3E3'}}>{count}</h1>
            <div style={{ margin: '20px' }}>
                <button style={{backgroundColor:'green',margin:'10px'}}onClick={increment}>+ เพิ่ม</button>
                <button style={{backgroundColor:'red',margin:'10px'}}onClick={decrement}>- ลด</button>
                <button style={{backgroundColor:'#D19E08',margin:'10px'}}onClick={reset}>🔁 Reset</button>

            </div>
        </div>
    )
}
export default Counter;