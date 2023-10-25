import { average, sum } from "./stats";
import { describe, expect, it, test } from "./testLib";
import * as statsAsync from "./statsAsync";

describe("Stats should", () => {
  it("calculate sum", () => {
    const result = sum([1, 2, 3]);
    const expected = 6;
    expect(expected).toBe(result);
  });

  it("Calculate average", () => {
    const result = average([1, 2, 3]);
    const expected = 2;
    expect(expected).toBe(result);
  });
});
describe("Stats Async should", () => {
  it("calculate (async) sum", async () => {
    const result = await statsAsync.sum([1, 2, 3]);
    const expected = 6;
    expect(expected).toBe(result);
  });

  it("Calculate (async) average", async () => {
    const result = await statsAsync.average([1, 2, 3]);
    const expected = 2;
    expect(expected).toBe(result);
  });
});
