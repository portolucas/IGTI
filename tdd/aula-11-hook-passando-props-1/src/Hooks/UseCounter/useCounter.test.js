import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

test("should increment counter from custom initial value", () => {
  const { result } = renderHook(() => useCounter(9000));

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(9001);
});
