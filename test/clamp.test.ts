import { describe, expect, it } from "bun:test";
import { clamp } from "../src/clamp";

describe("clamp", () => {
  it("passes values inside the range through", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
  it("clamps below", () => {
    expect(clamp(-3, 0, 10)).toBe(0);
  });
  it("clamps above", () => {
    expect(clamp(42, 0, 10)).toBe(10);
  });
});
