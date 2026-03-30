import { useState } from "react";

export function useToggle(initialState: boolean = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((prev) => !prev);
  const setTrue = () => setState(true);
  const setFalse = () => setState(false);
  const reset = () => setState(initialState);

  return {
    state,
    toggle,
    setState,
    setTrue,
    setFalse,
    reset,
  };
}
