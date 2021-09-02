import { renderHook } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

test("should increment counter after delay", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useCounter());

  result.current.incrementAsync();

  await waitForNextUpdate();

  expect(result.current.count).toBe(1);
});
