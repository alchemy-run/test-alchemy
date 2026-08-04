import { describe, it, expect } from "bun:test";
import { add, subtract } from "../src/calculator";

describe("calculator", () => {
  it("should add two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should subtract two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });
});
