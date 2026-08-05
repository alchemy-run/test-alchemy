import { describe, expect, it } from "bun:test";
import { mean, median } from "../src/stats";

describe("stats", () => {
  it("mean", () => expect(mean([1, 2, 3])).toBe(2));
  it("median odd", () => expect(median([3, 1, 2])).toBe(2));
  it("median even", () => expect(median([4, 1, 3, 2])).toBe(2.5));
  it("mean empty throws", () => expect(() => mean([])).toThrow());
});
