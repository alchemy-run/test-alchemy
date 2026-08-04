import { describe, it, expect } from "bun:test";
import { spawn } from "bun";

describe("calc.sh CLI", () => {
  it("should add 2 and 3 to get 5", async () => {
    const result = spawn({
      cmd: ["sh", "scripts/calc.sh", "add", "2", "3"],
      stdout: "pipe",
      stderr: "pipe",
    });
    const output = await new Response(result.stdout).text();
    expect(output.trim()).toBe("5");
  });

  it("should exit with non-zero status for unknown operation", async () => {
    const result = spawn({
      cmd: ["sh", "scripts/calc.sh", "unknown", "2", "3"],
      stdout: "pipe",
      stderr: "pipe",
    });
    const stderr = await new Response(result.stderr).text();
    expect(stderr.trim()).toBe("usage: calc.sh <op> <a> <b>");
    const exitCode = await result.exited;
    expect(exitCode).not.toBe(0);
  });
});
