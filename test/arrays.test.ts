import { describe, it, expect } from "bun:test";
import { chunk, unique } from "../src/arrays";

describe("arrays", () => {
  it("should chunk an array into equal parts", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("should chunk into single-element parts", () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  it("should reject a non-positive size", () => {
    expect(() => chunk([1], 0)).toThrow("chunk size must be a positive integer");
  });

  it("should dedupe values preserving order", () => {
    expect(unique([3, 1, 3, 2, 1])).toEqual([3, 1, 2]);
  });
});
