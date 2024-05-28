import React, { useState, useEffect } from "react";


interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  onClickPlus: (count: number) => void;
  onClickMinus: (count: number) => void;
}

const Counter = ({
  className,
  onClickMinus,
  onClickPlus,
  ...props
}: CounterProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      onClickPlus(newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      const newCount = prev < 1 ? 0 : prev - 1;
      onClickMinus(newCount);
      return newCount;
    });
  };

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
