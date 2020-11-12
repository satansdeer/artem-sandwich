import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useCollection } from "./useCollection";

describe("useCollection", () => {
  it("uses empty array as default value", () => {
    const { result } = renderHook(() => useCollection());
    expect(result.current[0]).toEqual([]);
  });

  describe("with initial value", () => {
    it("uses initial value as default", () => {
      const { result } = renderHook(() => useCollection([1, 2, 3]));
      expect(result.current[0]).toEqual([1, 2, 3]);
    });
  });

  describe(".addItem", () => {
    it("adds the item to the state array", () => {
      const { result } = renderHook(() => useCollection());

      act(() => {
        result.current[1]("test")
      })

      expect(result.current[0]).toEqual(["test"]);
    });
  });

  describe(".removeItem", () => {
    it("removes the item from the state array", () => {
      const { result } = renderHook(() => useCollection(["test", "foo"]));

      act(() => {
        result.current[2]("test")
      })

      expect(result.current[0]).toEqual(["foo"]);
    });
  });
});
