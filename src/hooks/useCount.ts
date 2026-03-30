import { useState } from "react";

type UseCountReturn = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
  isMin: boolean;
  isMax: boolean;
};

export function useCount(
  max: number,
  initialValue = 0,
  min = 0,
  step = 1,
): UseCountReturn {
  validate(initialValue, min, max, step);

  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => Math.min(prev + step, max));

  const decrement = () => setCount((prev) => Math.max(prev - step, min));

  const reset = () => setCount(initialValue);

  const safeSetCount = (value: number) => {
    validate(value, min, max, step);
    setCount(value);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setCount: safeSetCount,
    isMin: count === min,
    isMax: count === max,
  };
}

function validate(value: number, min: number, max: number, step: number): void {
  for (const n of [value, min, max, step]) {
    if (typeof n !== "number" || Number.isNaN(n) || !Number.isFinite(n)) {
      throw new Error(`${n} ist keine gültige Zahl`);
    }
  }

  if (min > max) {
    throw new Error("min darf nicht größer als max sein");
  }

  if (value < min || value > max) {
    throw new Error(`${value} liegt außerhalb des Bereichs ${min} bis ${max}`);
  }
}
