import { describe, it, expect } from "bun:test";
import { average, median } from "../src/statistics";

describe("statistics", () => {
  it("should average a list of numbers", () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  it("should throw on an empty average", () => {
    expect(() => average([])).toThrow("average of empty list");
  });

  it("should take the median of an odd-length list", () => {
    expect(median([3, 1, 2])).toBe(2);
  });

  it("should take the median of an even-length list", () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
  });

  it("should throw on an empty median", () => {
    expect(() => median([])).toThrow("median of empty list");
  });
});
