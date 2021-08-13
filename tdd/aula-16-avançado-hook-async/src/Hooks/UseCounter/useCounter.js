import { useState, useCallback, createContext, useContext } from "react";

const CounterStepContext = createContext(1);

export const CounterStepProvider = ({ step, children }) => (
  <CounterStepContext.Provider value={step}>
    {children}
  </CounterStepContext.Provider>
);

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const step = useContext(CounterStepContext);
  const increment = useCallback(() => setCount((x) => x + step), [step]);
  const incrementAsync = useCallback(
    () => setTimeout(increment, 100),
    [increment]
  );
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  return { count, increment, incrementAsync, reset };
};

export default useCounter;
