import React, { useState } from 'react';

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Counter = ({ className, ...props }: CounterProps) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <button
                onClick={decrement}
                className="bg-green-800 hover:bg-green-900 text-white font-bold py-1 px-2 rounded w-6 h-6 md:h-8 md:w-8"
            >
                -
            </button>
            <span className="text-2xl font-bold">{count}</span>
            <button
                onClick={increment}
                className="bg-green-800 hover:bg-green-900 text-white font-bold py-1 px-2 rounded w-6 h-6 md:h-8 md:w-8"
            >
                +
            </button>
        </div>
    );
};

export default Counter;
