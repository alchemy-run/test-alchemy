import { describe, it, expect } from "bun:test";
import { add, subtract, multiply, divide, power } from "../src/calculator";

describe("calculator", () => {
  it("should add two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should subtract two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  it("should multiply two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it("should divide two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("division by zero");
  });

  it("should calculate power(2, 10) as 1024", () => {
    expect(power(2, 10)).toBe(1024);
  });

  it("should calculate power(5, 0) as 1", () => {
    expect(power(5, 0)).toBe(1);
  });
});
